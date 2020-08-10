//BREAK Y CONTINUE

//BREAK

//EL CONTINUE ES UN SCOOPE DE ESTRUCTURA REPETITIVA QUE 
//OBVIA LAS SENTENCIAS DE ITERACIÓN (LAS QUE DESEAMOS OBVIAR) 
//EN LA QUE NOS ENCONTRAMOS
//Y CONTINUAMOS CON LA SIGUIENTE ITERACIÓN

// BREAK, EN UN SCOPE DE DE UNA ESTRUCTURA REPETITIVA,
//FINALIZA TODOS LOS CICLOS O ITERACIONES POR HACER
//SIN IMPORTAR EN QUE ITERACIÓN NOS ENCONTREMOS


let nombres = ["jorge" , "teresa", "javier", "leonor","daniel","francisca"];
let edades = [20,19, 99, 38,79,23];
let encontrado = false;

//QUE EL USUARIO BUSQUE UN NOMBRE Y CUANDO 
//EL ALGORITMO LO ENCUENTRE SE IMPRIMA SU EDAD Y NOMBRE

let buscar = prompt("Ingrese el nombre en la base de datos")

for (let i = 0; i < nombres.length; i++) {
    console.log(`i = ${i}`);
    
    if  (nombres[i] === buscar){
        console.log(`Encontrado ${buscar}`);
        console.log(`Edad: ${edades[i]}`);
        encontrado = true;
        break;
    }
}
//if(!encontrado)
//if (encontrado === false)
//if (encontrado !== true)
if (!encontrado){
    console.log("Usuario no encontrado");
}

//------------------uso del continue
//De los arreglos anteriores, imprimir la edad y nombre de las 
//personas menores de 60 años.

for (let i = 0; i < edades.length; i++) {
    if(edades [i]>60){
        continue;
    }
    console.log(`${nombres[i]} tiene ${edades[i]} años`);
}



