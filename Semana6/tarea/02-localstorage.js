let formulario = document.getElementById("formulario");
let inputCodigo = document.getElementById("inputCodigo");
let inputNombre = document.getElementById("inputNombre");
let tbody = document.getElementById("tbody");

let productos = [];

const llenarTabla = () => {
  tbody.innerHTML = "";

  console.time("tabla");
  productos.forEach((objProducto, i) => {
    let tr = document.createElement("tr");
    let tdNmro = document.createElement("td");
    tdNmro.innerText = i + 1;
    let tdCodigo = document.createElement("td");
    tdCodigo.innerText = objProducto.codigo;
    let tdNombre = document.createElement("td");
    tdNombre.innerText = objProducto.nombre;
    tdEliminar = document.createElement("td");
    let btnElminar = document.createElement("button");
    btnElminar.innerHTML = "ELIMINAR";
    tdEliminar.appendChild(btnElminar);
    btnElminar.onclick = () => {
      let rpta = confirm(`¿Estás seguro de eliminar ${tr}`);
      if (rpta) {
        tr.setAttribute("hidden", "hidden");
      }
    };

    tr.appendChild(tdNmro);
    tr.appendChild(tdCodigo);
    tr.appendChild(tdNombre);
    tr.append(tdEliminar);
    tbody.appendChild(tr);
    console.log(objProducto);
  });
  console.timeEnd("tabla");
  
  
};

formulario.onsubmit = (e) => {
  e.preventDefault();
  let objProducto = {
    codigo: inputCodigo.value,
    nombre: inputNombre.value,
  };
  productos.push(objProducto);
  let productosString = JSON.stringify(productos);
  window.localStorage.setItem("listaproductos", productosString);
  llenarTabla();
};

const verificarStorage = () => {
  let productosStorage = window.localStorage.getItem("listaproductos");
  if (productosStorage) {
    let productosJSON = JSON.parse(productosStorage);
    productos = productosJSON;
    llenarTabla();
  };

};

verificarStorage();


