import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi);
};

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[3].id}`)
    })
    .then(response => response.json())
    .then(singleProduct => {
        console.log(singleProduct.title);
        return fetchData(`${API}/categories/${singleProduct.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(error => console.log(error))
    .finally(() => {
        console.log('Todo bien, todo correcto');
    })