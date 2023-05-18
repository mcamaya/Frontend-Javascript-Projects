/* 
const promise = new Promise(function (resolve, reject){
    resolve('Wiiii, hubo respuesta!!')
}); 
*/

const vaquitas = 15;
const countVaquitas = new Promise(function(resolve, reject){
    if(vaquitas > 19) {
        resolve(`We have ${vaquitas} cows on the farm`);
    } else {
        reject(`There're not enough cows`);
    }
});


countVaquitas.then((result)=> {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally')); 