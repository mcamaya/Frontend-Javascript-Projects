const titulo = document.querySelector('h1');
const numero1 = document.querySelector('#calc1');
const numero2 = document.querySelector('#calc2');
const boton = document.querySelector('#btnCalc');
const resultado = document.querySelector('#result');
const form = document.querySelector('form');


form.addEventListener('submit', onClick);


function onClick(event){
   console.log({event});
   event.preventDefault();
   const suma = parseInt(numero1.value) + parseInt(numero2.value);
   resultado.innerText = "Resultado: " + suma;
}