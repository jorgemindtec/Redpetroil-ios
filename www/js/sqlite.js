// global variables
var db;
var shortName = 'GrupoPetroilBD';
var version = '1.0';
var displayName = 'GrupoPetroilBD';
var maxSize = 5000000;

// called when the application loads
function CrearBD(){
//alert("DEBUGGING: we are in the onBodyLoad() function");

 if (!window.openDatabase) {
   alert('Error con la Base de Datos');
   return;
 }
 db = openDatabase(shortName, version, displayName,maxSize);
 
 db.transaction(function(tx){
   //tx.executeSql( 'DROP TABLE ViajesGPl',nullHandler,nullHandler);
   tx.executeSql( 'CREATE TABLE IF NOT EXISTS BDViajes (Ruta TEXT NOT NULL, Magna DECIMAL(18,2) NULL, Premium DECIMAL(18,2) NULL, Diesel DECIMAL(18,2) NULL, Auto TEXT NOT NULL, Litros DECIMAL(18,2) NOT NULL, Combustible TEXT NOT NULL, KilometrajeInicial DECIMAL(18,2) NOT NULL, KilometrajeFinal DECIMAL(18,2) NULL, Rendimiento DECIMAL(18,2) NULL, Fecha DATE NOT NULL)',[],nullHandler,errorHandler);
   },errorHandler,successCallBack);
}

function errorHandler(transaction, error) {
   alert('Error: ' + error.message + ' code: ' + error.code);
}

function successCallBack() {
  // alert("DEBUGGING: success");
}

function nullHandler(){}

function AddValueToDB() {
 if (!window.openDatabase) {
   alert('Error con la Base de Datos');
   return;
 }
var f = new Date();
var Fecha = f.getDate() + "-" + (f.getMonth() +1) + "-" + f.getFullYear();

var ruta=document.getElementById("ruta").value;
var magna=document.getElementById("magna").value;
var premium=document.getElementById("premium").value;
var diesel=document.getElementById("diesel").value;
var modelo=document.getElementById("modelo").value;
var litros=document.getElementById("litros").value;
var combustible=document.getElementById("combustible").value;
var kmi=document.getElementById("kilometrajeinicial").value;

 db.transaction(function(transaction) {transaction.executeSql('INSERT INTO BDViajes(Ruta,Magna,Premium,Diesel,Auto,Litros,Combustible,KilometrajeInicial,KilometrajeFinal,Rendimiento,Fecha)VALUES (?,?,?,?,?,?,?,?,?,?,?)',[ruta,magna,premium,diesel,modelo,litros,combustible,kmi,"","",Fecha],nullHandler,errorHandler);});

document.getElementById("ruta").value='';
document.getElementById("magna").value='';
document.getElementById("premium").value='';
document.getElementById("diesel").value='';
document.getElementById("modelo").value='';
document.getElementById("litros").value='';
document.getElementById("combustible").value='';
document.getElementById("kilometrajeinicial").value='';
 
 rendimiento(3);
 return;
}

function UpdateValueToDB() {
 if (!window.openDatabase) {
   alert('Error con la Base de Datos');
   return;
 }
var kmf=document.getElementById("kilometrajefinal").value;
var viaje=document.getElementById("viajedt").value;
var kini="";
var litros="";
var valor="";
var rendimiento="";
db.transaction(function(transaction) {
   transaction.executeSql('SELECT rowid,Litros,KilometrajeInicial FROM BDViajes WHERE rowid='+viaje+';', [],
     function(transaction, result) {
      if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
		  kini = row.KilometrajeInicial;
		  litros = row.Litros;
		  valor = (kmf-kini)/litros;
		  rendimiento = parseFloat(Math.round(valor * 100) / 100).toFixed(2);
		  
        }
db.transaction(function(transaction) {transaction.executeSql('UPDATE BDViajes SET KilometrajeFinal = ?,Rendimiento = ? WHERE rowid = ?',[kmf,rendimiento,viaje],nullHandler,errorHandler);});
      }
     },errorHandler);
 },errorHandler,nullHandler);
 

document.getElementById("viajedt").value='';
document.getElementById("kilometrajefinal").value='';
alert("El viaje ha sido finalizado");
// submenu(1);
 return;
}

function ShowValueToDB() {
 if (!window.openDatabase) {
   alert('Error con la Base de Datos');
   return;
 } 
 $('#viajedt').html('');
 db.transaction(function(transaction) {
   transaction.executeSql('SELECT rowid,Ruta FROM BDViajes WHERE kilometrajefinal='+"''"+';', [],
     function(transaction, result) {
      if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
          $('#viajedt').append('<option value="'+row.rowid+'">' + row.Ruta + '</option>');
        } 
      }
     },errorHandler);
 },errorHandler,nullHandler);

 return;
}

function Reporte() {
 if (!window.openDatabase) {
   alert('Error con la Base de Datos');
  return;
 }
 $('#Datos').html('');
 $('#Datos').append('<tr class="encabezado"><th>'+"RUTA"+'</th><th style="width: 60px;">'+"LITROS"+'</th><th>'+"KM.INICIAL"+'</th><th>'+"KM.FINAL"+'</th><th style="width: 60px;">'+"FECHA"+'</th></tr>');
 db.transaction(function(transaction) {
   transaction.executeSql('SELECT rowid,Ruta,Litros,KilometrajeInicial,KilometrajeFinal,Rendimiento,Fecha FROM BDViajes;', [],
     function(transaction, result) {
      if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
          $('#Datos').append('<tr id="'+row.rowid+'" class="dt" onclick="calcular('+row.rowid+')"><td>' + row.Ruta + '</td><td>' + row.Litros+ '</td><td>' + row.KilometrajeInicial+ '</td><td>' + row.KilometrajeFinal + '</td><td>' + row.Fecha+'</td></tr>');
        } 
      }
     },errorHandler);
 },errorHandler,nullHandler);

 return;
}

var select=0;
var c=false
function calcular(viaje){
	if(select!=viaje){
		if(c==false){
			select=viaje;
			document.getElementById(viaje).className="datos";
			c=true;
		}
		else {
			document.getElementById(select).className="dt";
			select=viaje;
			document.getElementById(viaje).className="datos";
		}
	}
 if (!window.openDatabase) {
   alert('Error con la Base de Datos');
  return;
 }
 var kmi=0;
 var kmf=0;
 var ltr=0;
 var rend=0;
 $('#rendimientolitros').html('');
 
db.transaction(function(transaction) {
   transaction.executeSql('SELECT rowid,Magna,Premium,Diesel,Litros,Combustible,KilometrajeInicial,KilometrajeFinal,Rendimiento FROM BDViajes WHERE rowid ='+viaje+';', [],
     function(transaction, result) {
      if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
		  var rend = row.Rendimiento;
		  document.getElementById("rendimientolitros").value = rend +' km x Litro';
        }
      }
     },errorHandler);
 },errorHandler,nullHandler);
 
 return;
}

//-----------------------------

/*
function Exportar(){
	//var html = document.getElementById("Datos").innerHTML;
    var html = document.querySelector("#Datos").outerHTML;
	export_table_to_csv(html, "rendimiento.csv");
}

function export_table_to_csv(html, filename) {
	var csv = [];
	var rows = document.querySelectorAll("table#Datos tr");
	
    for (var i = 0; i < rows.length; i++) {
		var row = [], cols = rows[i].querySelectorAll("td, th");
		
        for (var j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);
        
		csv.push(row.join(","));		
	}

    // Download CSV
    download_csv(csv.join("\n"), filename);
}

function download_csv(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV FILE
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // We have to create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Make sure that the link is not displayed
    downloadLink.style.display = "none";

    // Add the link to your DOM
    document.body.appendChild(downloadLink);

    // Lanzamos
    downloadLink.click();
}

*/

