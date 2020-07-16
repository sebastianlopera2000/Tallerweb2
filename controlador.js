//Consumo del servicio de spotyfy para
//traer canciones de un artista


//DEFINIR LA VARIABLE PARA RECIBIR LA ETIQUETA DE IMG1
let imagen1 = document.getElementById("imagen1");

//1. Definir la URL del servicio
let url = "https://api.spotify.com/v1/artists/0h1zs4CTlU9D2QtgPxptUD/top-tracks?country=US";

//2. Definir el token o permiso de acceso
let token = "Bearer BQCVAq72Cmtp_HNnF89tHd5XeL_9fx4sayCXtfyZXWyQpgvVdNtjGrtNe-4mO4MpHwsf3KywEgdeDRnMEwdq_XUOIzlAuVFVi6xZc5g_moiPK4LZL8C3GAsk42fwG9iKDhnR18qEtOQW6KMpMKC-c54FngmBKMfVCik"
    //3.Definir Objeto AJAX
let objetoAJAX = new XMLHttpRequest();

//4. Abrir la conexion
objetoAJAX.open('GET', url, true);

//5. crear encabezado de conexion
objetoAJAX.setRequestHeader('Authorization', token);

//6. cargamos los datos del servicio
objetoAJAX.onload = function() {
    let respuesta = JSON.parse(this.responseText);
    console.log(respuesta);
    console.log(respuesta.tracks);
    console.log(respuesta.tracks[0]);
    console.log(respuesta.tracks[0].album);
    console.log(respuesta.tracks[0].album);
    console.log(respuesta.tracks[0].preview_url);

    

}

//7. enviamos la peticion
objetoAJAX.send();