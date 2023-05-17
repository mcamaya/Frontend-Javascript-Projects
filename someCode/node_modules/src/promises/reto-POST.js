import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method : 'POST', //Método a utilizar (GET, POST, PUT (actualizar), DELETE)
        mode: 'cors', //Permisos
        credentials: 'same-origin', //Podemos omitir esta línea de código (este es el por defecto)
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const newProduct = {
    "title": "Gorra Fashion Nike",
    "price": 1600,
    "description": "Una gorra muy cara :)",
    "categoryId": 1,
    "images": [
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5c4ff214-5b12-44cd-88f9-62e65848cef0/gorra-de-running-perforada-dri-fit-aerobill-featherlight-h1mV7m.png"
    ]
};

postData(`${API}/products`, newProduct)
    .then(response => response.json())
    .then(newProduct => console.log(newProduct))
    .catch(error => console.log(error))
    .finally(() => console.log('Petición finalizada'));