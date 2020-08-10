let lista = document.getElementById("lista");
let btnGenerar = document.getElementById("btnGenerar");


btnGenerar.onclick = () => {
    /**
     * cuando se coloca document.createElement("etiqueta-del-elemento")
     * devuelve o retorna un elemento html que aún no está en el DOM
     * imaginemos
     */
    let liTemporal = document.createElement("li");
    liTemporal.innerText = (Math.random()*(45 -1) + 1).toFixed(0);
    liTemporal.setAttribute("class", "lista-item");
    lista.appendChild(liTemporal);
    

    /**
     * Cuando usamos un apendCHild (otro-elemento): agrega 
     * como hijo final al elemento recibido por parámetros
     * elemento before: recibe un elemento analogamente, incerta 
     * un hijo al inicio de los elementos hijos.
     */

    /**
     * reto: 
     * -lograr:  permitiendo como máximo 7 números de la loteria,
     * -validar que si un número se repite, salga otro
     * HINT : usar un arreglo para guardar
     */
    
};



/**
 * document.onkeyup = (e) => {if(e.key === "x"){hacer algo aqui}}
 * html
 *  */ 