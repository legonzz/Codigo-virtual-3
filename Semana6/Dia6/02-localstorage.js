let formulario = document.getElementById("formulario");
let inputCodigo = document.getElementById("inputCodigo");
let inputNombre = document.getElementById("inputNombre");
let tbody = document.getElementById("tbody");

let productos =[];

const llenarTabla = ()=>{

  tbody.innerHTML = "";

  console.time("tabla");
  productos.forEach((objProducto, i)=>{
    let tr = document.createElement("tr");
    let tdNmro = document.createElement("td");
    tdNmro.innerText = i + 1;
    let tdCodigo = document.createElement("td");
    tdCodigo.innerText = objProducto.codigo;
    let tdNombre = document.createElement("td");
    tdNombre.innerText = objProducto.nombre;
    tr.appendChild(tdNmro);
    tr.appendChild(tdCodigo);
    tr.appendChild(tdNombre);
    tbody.appendChild(tr);
  });
  console.timeEnd("tabla");
};

formulario.onsubmit = (e)=>{
  e.preventDefault();
  let objProducto = {
    codigo: inputCodigo.value ,
    nombre: inputNombre.value,
  };
  productos.push(objProducto);
  /**
   * window.localStorage.setItem("identificador_del_item", "valor"):
   * En la memoria localStorage del navegador, se crea una variable
   * llamada "indentificador_del_item" con un valor "valor".
   * OJO: Solo se pueden guardar valores Strings.
   */
  /**
   * JSON: 
   * Es una clase estática, análoga a Math, que tiene una serie
   * de funciones para trabajar con objetos JSON
   * ejm:
   * JSON, stringify (objeto|arreglo), retorna el parámetro
   * pasado como argumento pasado como STRING.
   */
  let productosString = JSON.stringify(productos)
  /* console.log(productosString); */
  window.localStorage.setItem("listaproductos",productosString);
  llenarTabla();
};

/**
 * Función que verifica si hay datos en el storage
 * y llena una tabla
 */
const verificarStorage = ()=>{
  let productosStorage = window.localStorage.getItem("listaproductos");
  //Preguntar si existen datos con esa clave (listaproductos) en el storage.
  if (productosStorage) {
    let productosJSON = JSON.parse(productosStorage);
    productos = productosJSON;
    llenarTabla();
  }
};

verificarStorage();

//Eliminar datos del local storage y editar datos del local storage