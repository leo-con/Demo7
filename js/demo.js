$(document).ready(function () {
    genesysWidget();
});

function botonSubirFileClick(){
  let mensaje1 = document.getElementById("mensaje1");
  let mensaje2 = document.getElementById("mensaje2");
  let elmBoton = document.getElementById("btnChat");

  let input = document.getElementById('fileupload');

  mensaje1.innerHTML = "";
  mensaje2.innerHTML = "";

  if (!input.files[0]) {
      mensaje1.innerHTML = "Seleccione un archivo";
      return;
  }
  let file = input.files[0];
  if (file.size / 1024  > 1024){
      mensaje1.innerHTML = "El tamaño de archivo máximo permitido es de 1024 KB";
      mensaje2.innerHTML = "Intenta de nuevo" ;
      //elmBoton.className = "botonChat";
      Genesys("command", "Journey.record", { eventName: "ErrorCargarArchivo"});
  }
  else if (file.size <= 0){
      mensaje1.innerHTML = "El archivo está vacio.";
      mensaje2.innerHTML = "Intenta de nuevo";
      //elmBoton.className = "botonChat";
      Genesys("command", "Journey.record", { eventName: "ErrorCargarArchivo"});
  }
  else if ( file.name.split('.').pop().toLowerCase() !== "txt"){
      mensaje1.innerHTML = "El proceso solo acepta archivos tipo txt.";
      mensaje2.innerHTML = "Intenta de nuevo";
      //elmBoton.className = "botonChat";
      Genesys("command", "Journey.record", { eventName: "ErrorCargarArchivo"});
  }
  else{
      mensaje1.innerHTML = "Archivo Ok.";
      Genesys("command", "Journey.record", { eventName: "Archivo_Ok" });
  }

}



