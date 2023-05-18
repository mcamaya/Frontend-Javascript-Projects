const myAsyncFunction = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!'), 2500)
            : reject(new Error ('Error!'));
    })
}

const anotherFunction = async () => {
    const something = await myAsyncFunction();
    console.log(something);
    console.log('Hello!!!');
};

console.log('Before');
anotherFunction();
console.log('After');