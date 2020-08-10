/* const buscarPorDni = (dni) => {
    //conecto a Base de Datos
    //Hago consulta del DNI
    //RETORNO INFORMACIÓN DE A PERSONA
    //EJECUTAR UNA FUNCIÓN DESPUÉS DE DOS SEGUNDOS (O EL TIEMPO QUE ESTABLEZCA)

    setTimeout(function () {console.log("lo que se coloca aca se ejecuta luego de 2 segundos o 2mil milisegundos");
    }, 2000)
    
}; */

/* buscarPorDni("47167171"); */

const buscarPorDni = (dni, callback) => {
  let nombreEncontrado = "------------";
  setTimeout(function () {
    console.log("Buscando en la base de datos");
    nombreEncontrado = "Gonzalo Linares Paulet";
    callback(nombreEncontrado);
  }, 2000);
  
};

buscarPorDni("47167171", (nombre) => {console.log(nombre);
});


