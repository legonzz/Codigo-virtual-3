let frase = "anita lava la tina";
console.log(frase[0]);

for (let i = 0; i < frase.length; i++) {
  console.log(`${i} => ${frase[i]}`);
}

console.log("---------------");

/**
 * Función que retorna la cantidad de palabras que
 * tiene una cadena de texto
 */
const contadorDePalabras = (cadena) => {
  let contadorPalabras = 0;
  let cadenaArreglada = cadena.trim();
  if (cadenaArreglada === "") {
    return 0;
  }
  for (let i = 0; i < cadenaArreglada.length; i++) {
    if (cadenaArreglada[i] === " ") {
      contadorPalabras++;
    }
  }
  return contadorPalabras + 1;
};

let resultado = contadorDePalabras("Las chicas del can");
console.log(`Palabras: ${resultado}`);

console.log("--------------------------");

// 2.

/**
 * Función que recibe una cadena de texto, le quita los espacios en blanco
 * tanto a los extremos como en los espacios internos y  retorna una nueva
 * cadena sin los espacios en blanco
 */

const quitarEspacios = (cadena) => {
  let texto = "";
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] !== " ") {
      texto = texto + cadena[i];
    }
  }
  return texto;
};

let result = quitarEspacios("Erase una vez en chollywood");
console.log(result);

// 3.

/**
 * Función que retorna true o false en caso que una cadena sea un palíndromo
 * ejm, anita lava la tina es palindromo
 */

/* const esPalindromo = (cadena) => {
  let cadenaUnida = cadena.trim();
  cadenaUnida = cadenaUnida.toLowerCase();
  cadenaUnida = quitarEspacios(cadenaUnida);

  let cadenaReves = "";
  for (let i = cadenaUnida.length - 1; i >= 0; i--) {
    cadenaReves = cadenaReves + cadenaUnida[i];
  }

  if (cadenaUnida === cadenaReves) {
    return true;
  } else {
    return false;
  }
};

let rptaPalindromo = esPalindromo("AniTa Lava la tina")
console.log(rptaPalindromo); */

const esPalindromo = (cadena) => {
    let cadenaUnida = cadena.trim();
    cadenaUnida = quitarEspacios(cadenaUnida);
    cadenaUnida = cadenaUnida.toLowerCase();

    let cadenaReves = "";

    for (let i = cadenaUnida.length - 1; i >= 0; i--) {
        cadenaReves = cadenaReves + cadenaUnida[i];
    }

    if (cadenaReves === cadenaUnida) {
        return true;
    } else {
        return false;
    }
};

let rptaPalindromo = esPalindromo("oso ose");
console.log(rptaPalindromo);


