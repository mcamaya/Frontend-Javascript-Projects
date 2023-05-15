const XMLHttpRequest = require('xmlhttprequest'); //llamado al XmlHttpRequest
const API = 'https://api.escuelajs.co/api/v1'; //API en mayúscula porque es una referencia que no va a cambiar

/* Recibir url y callback */
function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true); //petición "obtener" con true para habilitarlo

    //onreadystatechange escucha diferentes estados de la solicitud y conoce cuando está disponible la información
    xhttp.onreadystatechange = function(event) {
        if (xhttp.readyState === 4) {  //indica si ha sido completada la petición
            if(xhttp.status === 200) {  //indica si el servidor responde de forma correcta
                callback(null, JSON.parse(xhttp.responseText));  //transformamos la respuesta formato texto aun objeto con JSON.parse()
            }
        } else {
            const err = new Error('Error' + urlApi);
            return callback(err, null); //retornamos el error en caso de que no se complete la petición
        }
    };
    xhttp.send();  
}