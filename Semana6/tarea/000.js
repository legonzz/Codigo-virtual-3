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

    let tdEliminar = document.createElement("td");
    let btnEliminar = document.createElement("button");
    btnEliminar.innerHTML = "Eliminar";
    tdEliminar.appendChild(btnEliminar);

    let tdEditar = document.createElement("td");
    let btnEditar = document.createElement("button");
    btnEditar.innerHTML = "Editar";
    tdEditar.appendChild(btnEditar);
    
    tr.appendChild(tdNmro);
    tr.appendChild(tdCodigo);
    tr.appendChild(tdNombre);
    tr.append(tdEliminar);
    tr.appendChild(tdEditar);
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
  llenarTabla();
};


//Eliminar datos del local storage y editar datos del local storage
