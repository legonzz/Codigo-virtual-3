//ESTA ES UNA FUNCIÓN QUE RETORNA UN OBJETO PELÍCULA
//EN CASO ENCUENTRE LA PLEÍCULA QUE EL USUARIO BUSQUE
//SEGÚN EL NOMBRE. EN CASO CONTRARIO, SE RETORNA NULL

const getPeliculasByName = (nombre) => {
  for (let i = 0; i < data.peliculas.length; i++) {
    if (data.peliculas[i].title === nombre) {
      //return retorna una respuesta de la función y
      //finaliza el ciclo FOR automaticamente
      return data.peliculas[i];
    }
  }
  return null;
};

let peliEncontrada = getPeliculasByName("Atrapa ese email");
console.log(peliEncontrada.title);

// 2
/**
 * Función que retorna una lista de películas que
 * tienen menos de 200 votos (en la propiedad vote_count)
 * En caso de no tener películas con menos de 200 votos
 * Retornar un arreglo vacío
 */


const getMenosVotadas = () => {
  let arrayPeliculas = [];
  for (let i = 0; i < data.peliculas.length; i++) {
    if (data.peliculas[i].vote_count < 200) {
      arrayPeliculas.push(data.peliculas[i].title);
    }
  }
  return arrayPeliculas;
};

let pelisMenosVotadas = getMenosVotadas();
console.log(pelisMenosVotadas);

// 3
/**
 * FUNCIÓN QUE RETORNA EL NÚMERO DE PELÍCULAS CUYOS LENGUAJES ORIGINALES
 * NO SEAN EL INGLÉS (EN)
 * VER EL CAMPO ORIGINAL_LANGUAGE
 */

const peliculasExtranjeras = ()=> {
  let arregloPelis = [];
  for (let i = 0; i < data.peliculas.length; i++) {
    if (data.peliculas[i].original_language !== "en") {
      arregloPelis.push(data.peliculas[i].title)
    }    
  }
  return arregloPelis;
};

let ceroIngles = peliculasExtranjeras();
console.log(ceroIngles);








 

