/**
 * elemento.onload:
 * Función que se dispara cuando se han cargado todos lo elementos hijos
 * de un elemento
 */

window.onload = ()=>{
  let formulario = document.getElementById("formulario");
  let inputEmail = document.getElementById("inputEmail");
  let inputpassword = document.getElementById("inputpassword");
  let enlace = document.getElementById("enlace");
  let helperEmail = document.getElementById("helperEmail")
  
  /* console.log(formulario); */

  const validarEmail = (email)=>{


    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (regexEmail.test(email) == false) {
      helperEmail.innerText = "Error, ingrese un correo válido";
      helperEmail.setAttribute("class", "text-danger")
    } else{
      let resultados = usuarios.filter((objUsuario)=>{
        if (objUsuario.correo === email) {
          return objUsuario;
        }
      });
      if(resultados.length>0){
        helperEmail.innerText = "Error, el usuario ya existe";
        helperEmail.classList.remove("text-succes");
        helperEmail.classList.add("text-danger");
        inputEmail.setAttribute("class", "input-danger");
      } else{
        helperEmail.innerText = "El usuario está disponible";
        helperEmail.classList.remove("text-danger");
        helperEmail.classList.add("text-succes");
        inputEmail.setAttribute("class", "input-succes");
      }
    }

    
  };

  /**
   * 
   * Con ECMASCRPIPT6:
   * const validarEmail = (email)=>{
   * let resultados = usuarios.filter(objetoUsuario => (obj.Usuario.correo === email));
   * }
   */
  /**
   * Función que se ejecuta cuando una tecla es presionada y soltada
   * sobre un elementoobjetivo.
   */



  inputEmail.onkeyup=(e)=>{
    /* console.log(e);
    console.log("presionando algo");
    /* console.log(String.fromCharCode(e.keyCode)); */
   /*  console.log(e.key); */ 
   /* console.log(inputEmail.getAttribute("value")); */
   /* console.log(inputEmail.value); */
   validarEmail(inputEmail.value.trim());
  };

/**
 * elemento.onsubmit :
 * Evento que se ejecuta cuando se hace submit
 * en elformulario
 */
formulario.onsubmit=(event)=>{
  //previene todas las acciones automáticas disparadas por cualquier evento.
  //ejm: El click en un enlace(etiqueta "a"), redirecciona a una página.
  //ejm: El submit de un formulario envía y actualiza datos de una página
  //ejm: el click derecho en cualquier zona abre un menú contextual en 
  //cualquier página.
  //En conclusión, cualquiera de estos evento puedes ser evitados.
  //EN MI CASO NO ENVIABA , REVISAR.
  event.preventDefault();
  console.log("submit del formulario");
  let objetoUsuario = {
    usuario : inputEmail.value,
    password: inputpassword.value,
  };
  console.log("Enviando...");
  console.log(objetoUsuario);
  
  
}

enlace.onclick = (e)=>{
  e.preventDefault();
}

};



