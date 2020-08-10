let objTienda = {
  nombre: "Capricho",
  categoria: "postres",
  descripcion: "Tienda de postres arequipeños",
  sucursales: [
    {
      nombre: "Capricho Mercaderes",
      telefono: "987654321",
    },
    {
      nombre: "Capricho Lambramani",
      telefono: "987654321",
    },
    {
      nombre: "Capricho EEUU",
      telefono: "987654321",
    },
  ],
};

console.log(`----CAPRICHO----`);
console.log(`Nombre: ${objTienda.nombre}`);
console.log(`Categoría: ${objTienda.categoria}`);
console.log(`Descripción: ${objTienda.descripcion}`);
console.log(`Sucursales:`);


for (let i = 0; i < objTienda.sucursales.length; i++) {
    console.log("------CAPRICHO-------");
    console.log(`Sucursal ${i+1}`);
    console.log(`Nombre: ${objTienda.sucursales[i].nombre}`);
    console.log(`Nombre: ${objTienda.sucursales[i].telefono}`);
    console.log("-------------") 
}





