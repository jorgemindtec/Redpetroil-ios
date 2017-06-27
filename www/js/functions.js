
var destino=0;

function onload() {
	document.getElementById("content").className="page-content petropuntos display";
	document.getElementById("menu").className="menu-footer display";
	document.getElementById("section01").className="display";
	document.getElementById("section02").className="hide";
	document.getElementById("section03").className="hide";
	document.getElementById("section04").className="hide";
	document.getElementById("contacto").className="hide";	
	document.getElementById("s1-01").className="display";
	document.getElementById("s1-02").className="hide";
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
		
		document.getElementById("section01").className="display";
		document.getElementById("section02").className="hide";
		document.getElementById("section03").className="hide";
		document.getElementById("section04").className="hide";	
		document.getElementById("contacto").className="hide";
		document.getElementById("tittle01").className="display";
		document.getElementById("tittle02").className="hide";
		document.getElementById("tittle03").className="hide";
		document.getElementById("s1-01").className="hide";
		document.getElementById("s1-02").className="display";
	}
	else if(dato==2){
		document.getElementById("menu02").style.backgroundColor="#f6892e";
		document.getElementById("menu01").style.backgroundColor="#131B45";
		document.getElementById("menu03").style.backgroundColor="#131B45";
		document.getElementById("menu04").style.backgroundColor="#131B45";
		document.getElementById("content").className="page-content";
		
		document.getElementById("section01").className="hide";
		document.getElementById("section02").className="display";
		document.getElementById("section03").className="hide";
		document.getElementById("section04").className="hide";	
		document.getElementById("contacto").className="hide";
		document.getElementById("tittle01").className="hide";
		document.getElementById("tittle02").className="display";
		document.getElementById("tittle03").className="hide";
	}
	else if(dato==3){
		document.getElementById("menu03").style.backgroundColor="#f6892e";
		document.getElementById("menu02").style.backgroundColor="#131B45";
		document.getElementById("menu01").style.backgroundColor="#131B45";
		document.getElementById("menu04").style.backgroundColor="#131B45";
		document.getElementById("content").className="page-content";
		
		document.getElementById("section01").className="hide";
		document.getElementById("section02").className="hide";
		document.getElementById("section03").className="display";
		document.getElementById("section04").className="hide";
		document.getElementById("contacto").className="hide";
		document.getElementById("tittle01").className="hide";
		document.getElementById("tittle02").className="hide";
		document.getElementById("tittle03").className="display";
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
		
		document.getElementById("section01").className="hide";
		document.getElementById("section02").className="hide";
		document.getElementById("section03").className="hide";
		document.getElementById("section04").className="display";
		document.getElementById("contacto").className="hide";
		document.getElementById("tittle01").className="display";
		document.getElementById("tittle02").className="hide";
		document.getElementById("tittle03").className="hide";
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
	if(dato==1){		
		document.getElementById("menu01").style.backgroundColor="#131B45";
		document.getElementById("menu02").style.backgroundColor="#131B45";
		document.getElementById("menu03").style.backgroundColor="#131B45";
		document.getElementById("menu04").style.backgroundColor="#131B45";
		document.getElementById("content").className="page-content petropuntos";
		
		document.getElementById("section01").className="display";
		document.getElementById("section02").className="hide";
		document.getElementById("section03").className="hide";	
		document.getElementById("section04").className="hide";
		document.getElementById("contacto").className="hide";
		document.getElementById("tittle01").className="display";
		document.getElementById("tittle02").className="hide";
		document.getElementById("tittle03").className="hide";
		document.getElementById("s1-01").className="display";
		document.getElementById("s1-02").className="hide";
	}
	else if(dato==2){
		grupo(8);
	}
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
		
		document.getElementById("section01").className="hide";
		document.getElementById("section02").className="hide";
		document.getElementById("section03").className="hide";
		document.getElementById("section04").className="hide";		
		document.getElementById("contacto").className="display";
		document.getElementById("tittle01").className="hide";
		document.getElementById("tittle02").className="hide";
		document.getElementById("tittle03").className="display";
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
