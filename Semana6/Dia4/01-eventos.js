let btnLight = document.getElementById("btnLight");
let btnDark = document.getElementById("btnDark");
let linkDark = document.getElementById("linkDark");
let btnToggle = document.getElementById("btnToggle");
let cuadrado = document.getElementById("cuadrado");
let cuadrado2 = document.getElementById("cuadrado2");
let cuadrado3 = document.getElementById("cuadrado3");

btnLight.onclick = (e) => {
  console.log("click en light");
  console.log(e);

  /**
   * elemento.getAttribute("nombre_de_atributo")
   * devuelve o retorna el valor de un atributo
   */
  let href = linkDark.getAttribute("href");
  linkDark.setAttribute("href", "");
  console.log(href);
};

btnDark.addEventListener("click", (e) => {
  linkDark.setAttribute("href", "01-eventos-dark.css");
  console.log("click en dark");
});

btnToggle.onclick = (e) => {
  let href = linkDark.getAttribute("href");
  if (href.length > 0) {
    linkDark.setAttribute("href", "");
  } else {
    linkDark.setAttribute("href", "01-eventos-dark.css");
  }
};

cuadrado.onclick = (e) => {
  console.log(e);
  console.log(`tipo de evento : ${e.type}`);
  console.log("Elemento del evento :");
  console.log(e.target);
  console.log(`Valores de X e Y con respecto al navegador`);
  console.log(`Valores X e Y on respecto al MISMO ELEMENTO`);
  console.log(`X => ${e.clientX} - ${e.clientY}`);
  console.log(`Valores X e Y on respecto al MISMO ELEMENTO`);
  console.log(`X => ${e.clientX} - ${e.clientY}`);
};

/**
 * elemento.onmousemove():
 * evento que se desencadena cuando el mouse se mueve por encima del elemento
 */

cuadrado2.onmousemove = (e) => {
  let x = e.offsetX;
  let y = e.offsetY;
  /* console.log(e); => para ver que se imprime con el valor e(evento)*/
  /* console.log(`${x} - ${y}`); => para ver que valores toma x e y cuando se mueven
    por el cuadrado2  */
  if (e.ctrlKey) {
    let bolita = document.createElement("div");
    bolita.classList.add("bolita");
    bolita.style.left = x + "px";
    bolita.style.top = y + "px";
    cuadrado2.appendChild(bolita);
  }
};

/**
 * evento parecido al hover:
 * elemento.onmouseover
 * evento que se ejecuta cuando el mouse pasa por encima del elemento
 * A diferencia del elemento.onmousemove, el evento se dispara 1 sola vez
 * cuando el puntero del mouse ingresa al elemento.
 * SIMILAR AL HOVER EN CSS
 */

cuadrado3.onmouseover = (e) =>{
    /* console.log(e); */
    console.log(e);
    cuadrado3.classList.add("sombra")
};

/**
 * 
 * Función complemento de elemento.onmouseover
 */
cuadrado3.onmouseleave = (e)=>{
    console.log(e);
    cuadrado3.classList.remove("sombra");
};
