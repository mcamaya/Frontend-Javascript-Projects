/* Función que pasa como argumento a otra función */

function sum(num1, num2) {
    return num1 + num2; 
}
function calc(num1, num2, callback) {
    return callback(num1, num2)
}
/* especificanmos números y el procedimiento a realizar (sum) */
console.log(calc(5, 7, sum));




setTimeout(function (){
    console.log('Hello world');
}, 3500)


function greet(name) {
    console.log(`Hola, ${name}!`);
}
/* No hacemos 'greet()' ya que estaríamos invocando la misma función en lugar de hacer un callback */
setTimeout(greet, 3500, 'Camila')