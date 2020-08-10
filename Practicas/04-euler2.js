function fibonacci(n) {
    let a = 1;
    let b = 2;
    let sum = b;

    while (b <= n) {
        let valorTemporal = a;
        a = b;
        b = valorTemporal + b;

        if (b % 2 === 0) {
            sum += b;
        }
    }
    return sum;
}

let respuesta = fibonacci(4000000);
console.log(respuesta);


