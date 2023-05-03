const titulo = document.querySelector('h1');
const carrito = document.querySelector('.carritoDeCompras');
const carrGalleta = document.querySelector('.carritoGalleta');
const carrSoda = document.querySelector('.carritoSoda');
const carrCafe = document.querySelector('.carritoCafe');
const btnGalletas = document.querySelector('#btnGalletas');
const btnSoda = document.querySelector('#btnSoda');
const btnCafe = document.querySelector('#btnCafe');

let galleta = 0;
let soda = 0;
let cafe = 0;
let precioGalletas;
let precioSoda;
let precioCafe;

btnGalletas.addEventListener('click', addGalleta);
btnSoda.addEventListener('click', addSoda);
btnCafe.addEventListener('click', addCafe);


function addGalleta (event){
    console.log({event});
    galleta++;
    precioGalletas = 9.00 * galleta;
    carrGalleta.innerHTML = `<h2>Galletas</h2> <p>Cantidad x${galleta} unidades ------ $${precioGalletas}</p>`
    console.log(galleta);
};

function addSoda (event){
    console.log({event});
    soda++;
    precioSoda = 5.00 * soda;
    carrSoda.innerHTML = `<h2>Soda</h2> <p>Cantidad x${soda} unidades ------ $${precioSoda}</p>`
    console.log(soda);
};

function addCafe (event){
    console.log({event});
    cafe++;
    precioCafe = 7.00 * cafe;
    carrCafe.innerHTML = `<h2>Cafe</h2> <p>Cantidad x${cafe} unidades ------ $${precioCafe}</p>`
    console.log(cafe);
};