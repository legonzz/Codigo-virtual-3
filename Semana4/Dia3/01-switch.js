//switch

console.log(`Elegir Opcion:
1. Login
2. Ver Facturas
3. Ver Reportes`);


let rpta = +prompt("Ingresar Opción;");

switch (rpta){
    case 1:
        console.log("Usted eligió iniciar sesión");
        break;
    case 2:
        console.log("Usted desea ver las facturas");
        break;
    case 3:
        console.log("Usted desea ver los reportes");
        break;
    default:
        console.log("Ingresar una opción válida");
        
}
console.log("Fin del Programa");
