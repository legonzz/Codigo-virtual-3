// 1
/**
 * Función que retorna el número de casos total
 * de personas infectadas en el mundo
 */
const getTotalDeCasosEnElMundo = (infectados) => {
  let total = 0;
  for (let i = 0; i < covid.length; i++) {
    total += covid[i].cases;
  }
  console.log(total);
};

let totalCases = getTotalDeCasosEnElMundo();

/* let totalCases = covid.reduce(function(prev, cur) {
  return prev + cur.cases;
}, 0);

console.log('Total Cases:', totalCases); */

// 2
/**
 * objeto que retorna el caso completo de cifras de un país dado
 * su nombre. En caso de no encontrar el país retornar NULL
 */

const getCifrasByNamePais = (pais) => {
  for (let i = 0; i < covid.length; i++) {
    if (covid[i].country === pais) {
      console.log(covid[i].country);
      console.log(covid[i].cases);
    }
  }
  return null;
};

let casosPorPais = getCifrasByNamePais("Peru");

// 3
/**
 *Función que retonar el porcentaje de personas recuperadas
 frente al total de casos de un país. Para ello, se debe
 proporcionar el nombre de su país.  Para buscar el país, se
 debe usar la función del ejercicio 2.
 */

const getPorcentajeDeRecuperadosByNamePais = (pais) => {
  for (let i = 0; i < covid.length; i++) {
    let porcentaje = (covid[i].recovered * 100) / covid[i].cases;
    if (covid[i].country === pais) {
      console.log(covid[i].country);
      console.log(porcentaje);
    }
  }
  return null;
};

let recuperadosPorPais = getPorcentajeDeRecuperadosByNamePais("Venezuela");

// 4
/**
 * Función que retorna arreglo de todos los paises con
 * el siguiente objeto de estructura:
 * [{
 * país: nombre del pais,
 * pruebasRealizadas: xxxxx,
 * pruebasPositivas: xxxxx,
 * porcentajeDePruebas: x%,
 * }]
 * implica que cada país debe mostrar el porcentaje de casos
 * positivos frente al total de pruebas realizadas
 *
 */

/* const arregloDePorcentajeDePruebasPositivas = () => {
  let resultado = [];
  for (let i = 0; i < covid; i++) {
    let porcentaje = (covid[i].cases * 100) / covid[i].totalTests;
    let objNuevo = {
      pais: covid[i].country,
      pruebasRealizadas: covid[i].totalTests,
      pruebasPositivas: covid[i].cases,
      porcentajeDePruebas: porcentaje,
    }
    resultado.push(objNuevo)
  }
  return resultado;
};

let resultado = arregloDePorcentajeDePruebasPositivas();
console.log(resultado); */

const arregloPorcentajePruebasPositivas = () => {
  let arregloResultado = [];
  for (let i = 0; i < covid.length; i++) {
    let porcentaje = (covid[i].cases * 100) / covid[i].totalTests;
    let objNuevo = {
      pais: covid[i].country,
      pruebasRealizadas: covid[i].totalTests,
      pruebasPositivas: covid[i].cases,
      porcentajeDePruebas: porcentaje,
    };
    arregloResultado.push(objNuevo);
  }
  return arregloResultado;
};

let resultadoFinal = arregloPorcentajePruebasPositivas();
console.log(resultadoFinal);
