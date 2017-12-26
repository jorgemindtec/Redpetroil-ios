
var destino=0;

function onload() {
	document.getElementById("content").className="page-content";
	document.getElementById("tittle01").className="display";
	document.getElementById("menu").className="menu-footer display";
	document.getElementById("section00").className="display";
	document.getElementById("s0-01").className="display";
	document.getElementById("Inicio1").className="display";
	document.getElementById("section01").className="hide";
	document.getElementById("section02").className="hide";
	document.getElementById("section03").className="hide";
	document.getElementById("section04").className="hide";
	document.getElementById("contacto").className="hide";
	document.getElementById("menu01").style.backgroundColor="#f6892e";
	
	CrearBD();
}

/* ---- MENU PRINCIPAL --- */
function menu(dato){
	if(dato==1||dato==2||dato==3){
		document.getElementById("more-elements").className="sub-elements";
		document.getElementById("menu").className = "menu-footer";		
	}
	if(dato==1){
		document.getElementById("menu01").style.backgroundColor="#f6892e";
		document.getElementById("menu02").style.backgroundColor="#131B45";
		document.getElementById("menu03").style.backgroundColor="#131B45";
		document.getElementById("menu04").style.backgroundColor="#131B45";
		document.getElementById("content").className="page-content";
		
		document.getElementById("section00").className="display";
		document.getElementById("s0-01").className="display";
		document.getElementById("Inicio1").className="display";
		document.getElementById("Inicio2").className="hide";
		document.getElementById("Inicio3").className="hide";
		document.getElementById("Reporte").className="hide";
		document.getElementById("section01").className="hide";
		document.getElementById("section02").className="hide";
		document.getElementById("section03").className="hide";
		document.getElementById("section04").className="hide";	
		document.getElementById("contacto").className="hide";
		document.getElementById("tittle01").className="display";
		document.getElementById("tittle02").className="hide";
		document.getElementById("tittle03").className="hide";
		document.getElementById("tittle04").className="hide";
	}
	else if(dato==2){
		document.getElementById("menu02").style.backgroundColor="#f6892e";
		document.getElementById("menu01").style.backgroundColor="#131B45";
		document.getElementById("menu03").style.backgroundColor="#131B45";
		document.getElementById("menu04").style.backgroundColor="#131B45";
		document.getElementById("content").className="page-content";
		
		document.getElementById("section00").className="hide";
		document.getElementById("section01").className="hide";
		document.getElementById("section02").className="display";
		document.getElementById("section03").className="hide";
		document.getElementById("section04").className="hide";	
		document.getElementById("contacto").className="hide";
		document.getElementById("tittle01").className="hide";
		document.getElementById("tittle02").className="display";
		document.getElementById("tittle03").className="hide";
		document.getElementById("tittle04").className="hide";
		MapaGps();
	}
	else if(dato==3){
		document.getElementById("menu03").style.backgroundColor="#f6892e";
		document.getElementById("menu02").style.backgroundColor="#131B45";
		document.getElementById("menu01").style.backgroundColor="#131B45";
		document.getElementById("menu04").style.backgroundColor="#131B45";
		document.getElementById("content").className="page-content";
		
		document.getElementById("section00").className="hide";
		document.getElementById("section01").className="hide";
		document.getElementById("section02").className="hide";
		document.getElementById("section03").className="display";
		document.getElementById("section04").className="hide";
		document.getElementById("contacto").className="hide";
		document.getElementById("tittle01").className="hide";
		document.getElementById("tittle02").className="hide";
		document.getElementById("tittle03").className="display";
		document.getElementById("tittle04").className="hide";
		document.getElementById("grupo-icon").className="icon display";
		document.getElementById("grupo").className="grupo-logos display";
		document.getElementById("content-grupos").className="hide";
	}
}
/* --- PREGUNTAS FRECUENTES --- */
function preguntas(){
		document.getElementById("menu03").style.backgroundColor="#131B45";
		document.getElementById("menu02").style.backgroundColor="#131B45";
		document.getElementById("menu01").style.backgroundColor="#131B45";
		document.getElementById("menu04").style.backgroundColor="#131B45";
		document.getElementById("content").className="page-content";
		
		document.getElementById("section00").className="hide";
		document.getElementById("section01").className="hide";
		document.getElementById("section02").className="hide";
		document.getElementById("section03").className="hide";
		document.getElementById("section04").className="display";
		document.getElementById("contacto").className="hide";
		document.getElementById("tittle01").className="hide";
		document.getElementById("tittle02").className="hide";
		document.getElementById("tittle03").className="hide";
		document.getElementById("tittle04").className="display";
		document.getElementById("grupo-icon").className="icon display";
}
/* --- SUBMENU TOGGLE ---- */
function show(){
	if(document.getElementById("more-elements").className == "sub-elements"){
	document.getElementById("more-elements").className = "sub-elements on";
	document.getElementById("menu").className = "menu-footer on";
}
else{
	document.getElementById("more-elements").className="sub-elements";
	document.getElementById("menu").className = "menu-footer";
}
}
function submenu(dato){	
	document.getElementById("menu").className="menu-footer";
	document.getElementById("more-elements").className="sub-elements";
	if(dato==0){
		document.getElementById("menu01").style.backgroundColor="#131B45";
		document.getElementById("menu02").style.backgroundColor="#131B45";
		document.getElementById("menu03").style.backgroundColor="#131B45";
		document.getElementById("menu04").style.backgroundColor="#131B45";
		document.getElementById("content").className="page-content";
		
		document.getElementById("section00").className="display";
		document.getElementById("s0-01").className="display";
		document.getElementById("Inicio1").className="hide";
		document.getElementById("Inicio2").className="hide";
		document.getElementById("Inicio3").className="display";
		document.getElementById("Reporte").className="hide";
		
		document.getElementById("section01").className="hide";
		document.getElementById("section02").className="hide";
		document.getElementById("section03").className="hide";	
		document.getElementById("section04").className="hide";
		document.getElementById("contacto").className="hide";
		document.getElementById("tittle01").className="display";
		document.getElementById("tittle02").className="hide";
		document.getElementById("tittle03").className="hide";
		document.getElementById("tittle04").className="hide";
		
		ShowValueToDB();
	}
	else if(dato==1){
		document.getElementById("menu01").style.backgroundColor="#131B45";
		document.getElementById("menu02").style.backgroundColor="#131B45";
		document.getElementById("menu03").style.backgroundColor="#131B45";
		document.getElementById("menu04").style.backgroundColor="#131B45";
		document.getElementById("content").className="page-content";
		
		document.getElementById("section00").className="display";
		document.getElementById("s0-01").className="display";
		document.getElementById("Inicio1").className="hide";
		document.getElementById("Inicio2").className="hide";
		document.getElementById("Inicio3").className="hide";
		document.getElementById("Reporte").className="display";
		
		document.getElementById("section01").className="hide";
		document.getElementById("section02").className="hide";
		document.getElementById("section03").className="hide";	
		document.getElementById("section04").className="hide";
		document.getElementById("contacto").className="hide";
		document.getElementById("tittle01").className="display";
		document.getElementById("tittle02").className="hide";
		document.getElementById("tittle03").className="hide";
		document.getElementById("tittle04").className="hide";
		
		Reporte();
	}
	else if(dato==2){
		document.getElementById("menu01").style.backgroundColor="#131B45";
		document.getElementById("menu02").style.backgroundColor="#131B45";
		document.getElementById("menu03").style.backgroundColor="#131B45";
		document.getElementById("menu04").style.backgroundColor="#131B45";
		document.getElementById("content").className="page-content";
		
		document.getElementById("section00").className="hide";
		document.getElementById("s0-01").className="hide";
		document.getElementById("Inicio1").className="hide";
		document.getElementById("Inicio2").className="hide";
		document.getElementById("Inicio3").className="hide";
		document.getElementById("Reporte").className="hide";
		
		document.getElementById("section01").className="display";
		document.getElementById("section02").className="hide";
		document.getElementById("section03").className="hide";	
		document.getElementById("section04").className="hide";
		document.getElementById("contacto").className="hide";
		document.getElementById("tittle01").className="hide";
		document.getElementById("tittle02").className="hide";
		document.getElementById("tittle03").className="hide";
		document.getElementById("tittle04").className="display";
	}
	else if(dato==3){
		grupo(8);
	}
}
/* ------ RENDIMIENTO ----- */
function rendimiento(dato){
	document.getElementById("Inicio1").className="hide";	
	document.getElementById("Inicio2").className="hide";	
	document.getElementById("Inicio3").className="hide";	
	document.getElementById("Reporte").className="hide";
	if(dato==1){
		document.getElementById("Inicio1").className="display";	
	}
	else if(dato==2){		
		document.getElementById("Inicio2").className="display";
	}
	else if(dato==3){	
		document.getElementById("Inicio3").className="display";
		ShowValueToDB();
		/*var viaje = document.getElementById("viajedt").value;
		if (viaje ==null || viaje ==''){
			document.getElementById("UpdateRendimiento").className="hide";
		}
		else{
			document.getElementById("UpdateRendimiento").className="show";
		}*/
	}
	else if(dato==4){	
		document.getElementById("Reporte").className="display";	
		Reporte();
	}
}
function validarViaje(pantalla){
	if (pantalla == 1){
		var ruta = document.getElementById("ruta").value;
		var mg = document.getElementById("magna").value;
		var prm = document.getElementById("premium").value;
		var dis = document.getElementById("diesel").value;
		if (ruta == null || ruta.trim().length == 0 ){
			alert("Favor de ingresar un concepto de Ruta.");
			document.getElementById("ruta").value='';
			document.getElementById("ruta").focus();
		}
		else if (mg == null || mg.trim().length == 0 || mg < 0){
			alert("Favor de ingresar un precio valido.");
			document.getElementById("magna").value='';
			document.getElementById("magna").focus();
		}
		else if (prm == null || prm.trim().length == 0 || prm < 0){
			alert("Favor de ingresar un precio valido.");
			document.getElementById("premium").value='';
			document.getElementById("premium").focus();
		}
		else if (dis == null || dis.trim().length == 0 || dis < 0){
			alert("Favor de ingresar un precio valido.");
			document.getElementById("diesel").value='';
			document.getElementById("diesel").focus();
		}
		else{
			rendimiento(2);
		}
	}
	else if (pantalla == 2){
		var modelo = document.getElementById("modelo").value;
		var litros = document.getElementById("litros").value;
		var km = document.getElementById("kilometrajeinicial").value;
		if (modelo == null || modelo.trim().length == 0 ){
			alert("Favor de ingresar el Modelo del auto.");
			document.getElementById("modelo").value='';
			document.getElementById("modelo").focus();
		}
		else if (litros == null || litros.trim().length == 0 || litros < 0){
			alert("Favor de ingresar una cantidad valida.");
			document.getElementById("litros").value='';
			document.getElementById("litros").focus();
		}
		else if (km == null || km.trim().length == 0 || km < 0){
			alert("Favor de ingresar una cantidad valida.");
			document.getElementById("kilometrajeinicial").value='';
			document.getElementById("kilometrajeinicial").focus();
		}
		else{
			AddValueToDB();	
		}
	}
	else if (pantalla == 3){
		var km = document.getElementById("kilometrajefinal").value;
		if (km == null || km.trim().length == 0 || km < 0){
			alert("Favor de ingresar una cantidad valida.");
			document.getElementById("kilometrajefinal").value='';
			document.getElementById("kilometrajefinal").focus();
		}
		else{
			UpdateValueToDB();
		}
	}
}
function Indicador(){
    var valor = document.getElementById("litros").value;
	if(valor >=40){
		document.getElementById("img-indicador").className="cuatro";
	}
	else if(valor >=30){
		document.getElementById("img-indicador").className="tres";
	}
	else if(valor >=20){
		document.getElementById("img-indicador").className="dos";
	}
	else if(valor >=10){
		document.getElementById("img-indicador").className="uno";
	}
	else if(valor >=0){
		document.getElementById("img-indicador").className="cero";
	}
		
    //valor = x.value.toUpperCase();
}

/* ------ GRUPO ------ */
function grupo(dato){
	if(dato==0){
		document.getElementById("grupo-icon").className="icon display";
		document.getElementById("grupo").className="grupo-logos display";
		document.getElementById("content-grupos").className="hide";
	}
	else if(dato==1){
		document.getElementById("grupo-icon").className="hide";
		document.getElementById("grupo").className="hide";
		document.getElementById("content-grupos").className="display";
		document.getElementById("s3-01").className="display";
		document.getElementById("s3-02").className="hide";
		document.getElementById("s3-03").className="hide";
		document.getElementById("s3-04").className="hide";
		document.getElementById("s3-05").className="hide";
		document.getElementById("s3-06").className="hide";
		document.getElementById("s3-07").className="hide";		
	}
	else if(dato==2){
		document.getElementById("grupo-icon").className="hide";
		document.getElementById("grupo").className="hide";
		document.getElementById("content-grupos").className="display";
		document.getElementById("s3-01").className="hide";
		document.getElementById("s3-02").className="display";
		document.getElementById("s3-03").className="hide";
		document.getElementById("s3-04").className="hide";
		document.getElementById("s3-05").className="hide";
		document.getElementById("s3-06").className="hide";
		document.getElementById("s3-07").className="hide";	
	}
	else if(dato==3){
		document.getElementById("grupo-icon").className="hide";
		document.getElementById("grupo").className="hide";
		document.getElementById("content-grupos").className="display";
		document.getElementById("s3-01").className="hide";
		document.getElementById("s3-02").className="hide";
		document.getElementById("s3-03").className="display";
		document.getElementById("s3-04").className="hide";
		document.getElementById("s3-05").className="hide";
		document.getElementById("s3-06").className="hide";
		document.getElementById("s3-07").className="hide";	
	}
	else if(dato==4){
		document.getElementById("grupo-icon").className="hide";
		document.getElementById("grupo").className="hide";
		document.getElementById("content-grupos").className="display";
		document.getElementById("s3-01").className="hide";
		document.getElementById("s3-02").className="hide";
		document.getElementById("s3-03").className="hide";
		document.getElementById("s3-04").className="display";
		document.getElementById("s3-05").className="hide";
		document.getElementById("s3-06").className="hide";
		document.getElementById("s3-07").className="hide";	
	}
	else if(dato==5){
		document.getElementById("grupo-icon").className="hide";
		document.getElementById("grupo").className="hide";
		document.getElementById("content-grupos").className="display";
		document.getElementById("s3-01").className="hide";
		document.getElementById("s3-02").className="hide";
		document.getElementById("s3-03").className="hide";
		document.getElementById("s3-04").className="hide";
		document.getElementById("s3-05").className="display";
		document.getElementById("s3-06").className="hide";
		document.getElementById("s3-07").className="hide";	
	}
	else if(dato==6){
		document.getElementById("grupo-icon").className="hide";
		document.getElementById("grupo").className="hide";
		document.getElementById("content-grupos").className="display";
		document.getElementById("s3-01").className="hide";
		document.getElementById("s3-02").className="hide";
		document.getElementById("s3-03").className="hide";
		document.getElementById("s3-04").className="hide";
		document.getElementById("s3-05").className="hide";
		document.getElementById("s3-06").className="display";
		document.getElementById("s3-07").className="hide";	
	}
	else if(dato==7){
		document.getElementById("grupo-icon").className="hide";
		document.getElementById("grupo").className="hide";
		document.getElementById("content-grupos").className="display";
		document.getElementById("s3-01").className="hide";
		document.getElementById("s3-02").className="hide";
		document.getElementById("s3-03").className="hide";
		document.getElementById("s3-04").className="hide";
		document.getElementById("s3-05").className="hide";
		document.getElementById("s3-06").className="hide";
		document.getElementById("s3-07").className="display";	
	}
	else if(dato==8){
		document.getElementById("menu01").style.backgroundColor="#131B45";
		document.getElementById("menu02").style.backgroundColor="#131B45";
		document.getElementById("menu03").style.backgroundColor="#131B45";
		document.getElementById("menu04").style.backgroundColor="#131B45";
		document.getElementById("content").className="page-content";
		
		document.getElementById("section00").className="hide";
		document.getElementById("section01").className="hide";
		document.getElementById("section02").className="hide";
		document.getElementById("section03").className="hide";
		document.getElementById("section04").className="hide";		
		document.getElementById("contacto").className="display";
		document.getElementById("tittle01").className="hide";
		document.getElementById("tittle02").className="hide";
		document.getElementById("tittle03").className="display";
		document.getElementById("tittle04").className="hide";
		sender(1);
	}
}


/* ---- MARCAR TELEFONO ---- */
function TelefonoConsulta() {	
	if (window.cordova) {
		cordova.InAppBrowser.open('tel:6691180909', '_system');
	}
}
function TelefonoPuntos() {	
	if (window.cordova) {
		cordova.InAppBrowser.open('tel:6691180909', '_system');
	}
}
/* ------- CONTACTO -----------*/
function sender(dato){
	document.getElementById("form1").className="hide";
	document.getElementById("form2").className="hide";
	document.getElementById("form3").className="hide";
	document.getElementById("form4").className="hide";
	document.getElementById("form5").className="hide";
	document.getElementById("form6").className="hide";
	document.getElementById("form7").className="hide";
	if(dato==1){
	document.getElementById("form1").className="display";		
	}
	else if(dato==2){
	document.getElementById("form2").className="display";		
	}
	else if(dato==3){
	document.getElementById("form3").className="display";
	}
	else if(dato==4){
	document.getElementById("form4").className="display";		
	}
	else if(dato==5){
	document.getElementById("form5").className="display";		
	}
	else if(dato==6){
	document.getElementById("form6").className="display";		
	}	
	else if(dato==7){
	document.getElementById("form7").className="display";		
	}	
}
