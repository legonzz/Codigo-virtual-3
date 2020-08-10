/**
 * La Clase math es una clase ESTÁTICA: NO TIENE UNA VARIABLE U OBJETO
 * Clase estática : es una clase que no recibe variables
 * sino nos provee funciones matematicas
 */

 //Ejm: Math.sqrt (numero)

 let raizDe25 = Math.sqrt(25)
 console.log(raizDe25);

 //Math.floor(numero_decimal)
 //Redondea un número al proximo entero inferior
 //Ejm: Math.floor(5.9999) = 5;
 console.log(Math.floor(12.99999));

 //Math.ceil(numero_decimal)
 //Redondea un número al próximo entero superior
 //Ejm: Math.ceil(10.4938) = 11;
 console.log(Math.ceil(0.12));

 //Math.round(numero_decimal)
 //Redondea un número respetando las formas normales de redondeo
 //Ejm : Math.round(3.2) = 3
 //Ejm : Math.round(6.7) = 7;
console.log(Math.round(2.5));

//Math.random() => genera un número aleatorio 
//entre 0 y 1 ;
let aleatorio = console.log(Math.random());

//Math.random() * (max - min) + min
//genera un número aleatorio entre 'max' y 'min';

let aleatorioQuinceYcien = Math.random() * (100 - 15) + 15;
console.log(aleatorioQuinceYcien);

//toFixec(numero_de_decimales)
console.log(aleatorioQuinceYcien.toFixed(1));


//Considerar la acción de un cajero automático
//De forma que de los billetes bien distribuidos
//EJM : S/. 500.00 = 2 billetes de 200 y 1 de cien
//EJM : S/. 190.00 = 1 billete de 100, 1 de 50 y  dos de 40
//Intentear sacar módulos de %100, %10
//considerando que la máxima cantidad es: 9000

/* const cajero = (cantidad) => {
    let billetes = [10,20,50,100,200];
    let totalValue = billetes[i];
    let retiro = [];
    for (let i = 0; i < array.length; i++) {
        
    }
}

if (totalValue%200 === 0 && totalValue%10 === 0){
    return 
} */

/* let billetes = [10,20,50,100,200];

const retiro = (monto) => {
    let cantidad = 0;
    cantidad = cantidad + 
}

const retiro = (monto) => {
    for (let i = 0; i < billetes.length; i++) {
        let cantidad = 0;
        cantidad = cantidad + billete[i]
        if (monto/billete[i] === 0) {
            return billete[i] * i;
        }
    }
}

let montoAretirar = retiro(400); */

/* function iWantToGet(ammountRequired){
    var availableNotes = [100, 50, 20, 10],
        result = [];

    if(ammountRequired && ammountRequired > 0) {
      while(ammountRequired > 0) {
        for (var i = 0; i < availableNotes.length; i++) {
          var note = availableNotes[i];
          if(ammountRequired - note >= 0) {
            ammountRequired -= note;
            result.push(note);
            break;
          } else if(i === availableNotes.length - 1 && ammountRequired > 0) {
              throw 'NoteUnavailableException';
          }
        }
      }
    } else if(ammountRequired <= 0) {
      throw 'InvalidArgumentException';
    }

    return result;
  }

  console.log(iWantToGet(1350)); */

const quieroRetirar = (montoSolicitado) => {
    let billetesDisponibles = [200,100,50,20];
    let resultado = [];
    while (montoSolicitado && montoSolicitado > 0) {
        for (let i = 0; i < billetesDisponibles.length; i++) {
            let billete = billetesDisponibles[i];
            
            if (montoSolicitado >= 0) {
                resultado.push(billete);
                montoSolicitado = montoSolicitado - billete;
                break;
            } else if (i === billetesDisponibles.length && montoSolicitado > 0){
                throw 'Ahora no joven'
            }
        }
        console.log(montoSolicitado);
        
    }
}

let montoFinal = quieroRetirar(2400);

  







 
  

