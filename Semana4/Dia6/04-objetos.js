// 1. Un objeto es un elemento que abstrae o reune características,
//propiedades y atributos que guardan relación una relación en común

//¿Cómo se crea?
let objPersona = {
  nombre: "Gonzalo",
  apellido: "Linares",
  edad: 28,
  peso: 63,
  casado: false,
  cazado: true,
};

//Forma de acceder los atributos (la más usada):
console.log(objPersona.nombre);
//Forma dos de acceder a los atributos
console.log(objPersona["apellido"]);

//Forma de modificar un atributo
objPersona.casado = true;
objPersona.peso = 60;

console.log(objPersona);

//Forma 1 de crear nuevos atributos a un objeto (no considerado una buena práctica):
objPersona.platosFavoritos = [
  "cebiche",
  "pastel de papa",
  "chicharron",
  "lomo saltado",
];
console.log(objPersona);

for (let i = 0; i < objPersona.platosFavoritos.length; i++) {
  console.log(objPersona.platosFavoritos[i]);
}

//-------------------------------------------//
let productos = [
  {
    nombre: "TV Samsung 50",
    precio: 8000,
    codigo: "101001",
    coloresDisponibles: ["Azul","Plomo","Blanco","Negro"]
  },
  {
    nombre: "TV Samsung 42",
    precio: 7000,
    codigo: "101002",
    coloresDisponibles: ["Azul","Plomo"]
  },
  {
    nombre: "TV Samsung 39",
    precio: 6000,
    codigo: "101003",
    coloresDisponibles: ["Azul"]
  },
  {
    nombre: "TV Samsung 25",
    precio: 5000,
    codigo: "101004",
    coloresDisponibles: []
  },
];
/* debugger; */
for (let i = 0; i < productos.length; i++) {
    console.log(`---Productos ${i+1}---`);
    console.log(`Nombre: ${productos[i].nombre}`);
    console.log(`Precio: ${productos[i].precio}`);
    console.log(`Código: ${productos[i].codigo}`);
    console.log(`Colores Disponibles`);
    
    for (let j = 0; j < productos[i].coloresDisponibles.length; j++) {
        console.log(productos[i].coloresDisponibles[j]);

        
    }
}
