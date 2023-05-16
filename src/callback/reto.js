const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //llamado al XmlHttpRequest
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

fetchData(`${API}/products`, function (error1, data1){ //Traemos todos los productos de la API
    if (error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) { //Seleccionamos el primer producto desde data1
        if (error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) { //Sacamos categoría del producto en data2
            if (error3) return console.error(error3);
            
            console.log(data1[0]); //Traemos todo el primer producto
            console.log(data2.title); //Traemos el título del producto
            console.log(data3.name); //Traemos el nombre de la categoría del producto
        })
    }) 
})

