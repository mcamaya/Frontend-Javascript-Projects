 import fetch from 'node-fetch';
 const API = 'https://api.escuelajs.co/api/v1';

 async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
 }

 const myFn = async (urlApi) => {
    try {
        const products = await fetchData(`${urlApi}/products`);
        const singleProduct = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${singleProduct.category.id}`)

        console.log(products);
        console.log('...');
        console.log(singleProduct.title);
        console.log('...');
        console.log(category.name);

    } catch (err) {
        console.error(err);
    }
 };

 myFn(API);