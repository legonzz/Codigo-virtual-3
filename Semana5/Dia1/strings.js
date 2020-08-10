let frase = "Agua que no has de BEBER, jala la cadena y dejala CORRER";
let cantidadletras = frase.length;
console.log(`Cantidad de caracteres: ${cantidadletras}`);

/**
 * string.TolowerCase()
 * Retorna una copia de la cadena del texto convertida a minúsculas
 */

let minusculas = frase.toLowerCase();
console.log(minusculas);

/**
 * String to UperCase
 * retorna una copia de la cadena de texto, convertida a minusculas
 */

let mayusculas = frase.toUpperCase();
console.log(mayusculas);

/**
 * string.subst(posicion_inicial, cantidad_de_caracteres_desde_posición_inicial)
 * Retorna una subcadena dada una posición inicial y una cantidad de caracteres
 * a partir de dicha posición inicial.
 */

let subcadena = frase.substr(8, 4);
console.log(subcadena);

/**
 * string.substring(posición_inicial, posición_final)
 * Retorna una subcadena dada su posición inicial y posición final
 * ATENCIÓN: La última subcadena no es considerada dentro de la subcadena de respuesta
 */

let subcadenaInicioFin = frase.substring(8, 15);
console.log(subcadenaInicioFin);

/**
 * string.includes ("Subcadena buscada")
 * Retorna true si la subcadena buscada existe en el string
 * Retorna false si la subcadena no existe en el string
 */

let existeBEBER = frase.includes("BEBER");
console.log(`¿BEBER ESTÁ INCLUIDA?: ${existeBEBER}`);

/**
 * string.IndexOf("subcadena")
 * Retorna la posición inicial de la subcadena buscada
 * Si la subcadena no existe, se retorna -1
 */

let posicionPalabraCadena = frase.indexOf("cadena");
console.log(posicionPalabraCadena);

let posicionPalabraCadenas = frase.indexOf("cadenas");
console.log(posicionPalabraCadenas);

/**
 * string.trim()
 * Devuelve o retorna una copia de la
 * cadena sin los espacios en blanco a los
 * extremos de dicha cadena. Si la cadena tiene espacios
 * intermedios, no los borra.
 */

let frasesConEspacios = "      ups!        ";
console.log(frasesConEspacios);
console.log(frasesConEspacios.trim());
