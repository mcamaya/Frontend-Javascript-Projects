function* gen() {
    yield 1; //Permite "pausar el código" --> como steps
    yield 2;
    yield 3;
    yield 4;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterable(arr) {
    for (let value of arr){
        yield value;
    }
}

const it = iterable(['camila', 'esteban', 'nicolás', 'lucía', 'mariana']);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());