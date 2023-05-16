import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method : 'POST', //Método a utilizar (obtener, agregar, editar, eliminar)
        mode: 'cors', //Permisos
        credentials: 'same-origin' //Podemos omitir esta línea de código (este es el por defecto)
    })
}