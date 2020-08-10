/**
 * Ejercicio : Recorrer el arreglo COVID para
 * poblar la tabla y agregar filas y columnas
 * con la información que sugieren las tablas
 * !No se debe obedecer a ningun click, el 
 * proceso debe ser ni bien cargue la página
 */

let tbody = document.getElementById("tbody");

const llenarTabla = () => {
    /**
     * 1. Iterar el arreglo COVID
     * 2. En cada vuelta crear una fila y 5 columnas
     * 3. Al final de la vuelta, agregar las columnas a la fila
     * 4. Al final de la vuelta, agregar la fila al body
     */

    covid.forEach((objPais, i)=>{
        let fila = document.createElement("tr");
      
        let tdNmro = document.createElement("td");
        tdNmro.innerText = i + 1;
      
        let tdPais = document.createElement("td");
        tdPais.innerText = objPais.country;
      
        let tdInfectados = document.createElement("td");
        tdInfectados.innerText = objPais.cases;
      
        let tdFallecidos = document.createElement("td");
        tdFallecidos.innerText = objPais.deaths;
      
        let tdRecuperados = document.createElement("td");
        tdRecuperados.innerText = objPais.recovered;
      
        let tdAcciones = document.createElement("td");
        let btnEliminar = document.createElement("button");
        btnEliminar.innerHTML = "ELIMINAR"
        tdAcciones.appendChild(btnEliminar);
        btnEliminar.onclick = ()=>{
            let rpta = confirm(`¿Estás seguro de eliminar ${objPais.country}?`);
            if (rpta) {
                fila.setAttribute("hidden","hidden"); 
            } 
            
        };
        
        fila.appendChild(tdNmro);
        fila.appendChild(tdPais);
        fila.appendChild(tdInfectados);
        fila.appendChild(tdFallecidos);
        fila.appendChild(tdRecuperados);
        fila.appendChild(tdAcciones);
        tbody.appendChild(fila);
      });
      
      }
      
      llenarTabla();