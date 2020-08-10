

let primosYdivisores = [];
function largestPrimeFactor(numero) {
    for (let i = 0; i < numero; i++) {
        let esDivisor = numero%i == 0;
        let isPrime = true;
        if (esDivisor) {
            for (let k = 2; k < i; k++) {
                if (i%k == 0) {
                    isPrime = false;
                    continue
                }
                
            }
        }
        if (esDivisor && isPrime) {
            primosYdivisores.push(i);
        }
    }

    
    console.log(primosYdivisores.pop());
    
    
};

let respuesta = largestPrimeFactor(600851475143);



