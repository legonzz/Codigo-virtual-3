/**
 * Los nombres de las clases deben comenzar con mayuscula
 */

class Restaurante {
  aforo ;
  nmroMesas ;
  direccion ;
  categoria ;
  telefonos ;
  nombre ;
  delivery ;
  /**
   * Para la tipificación será tipo A si el aforo es mayor a 500 personas
   * Seá tipo B si el aforo es mayor a 300 personas
   * Será tipo C si el aforo es menor o igual a 300 personas
   */
  tipificacion ;

  /**
    * 
Función que se ejecuta automaticamente al momento de crear un objeto
En caso de que no llegue un valor, poner valores por defecto Ejm: _aforo : 0;
    */
  constructor(
    _aforo = 0,
    _nmroMesas = 0,
    _direccion = "Sin Dirección",
    _categoria = "Sin Categoría",
    _telefonos = [],
    _nombre = "Sin Nombre",
    _delivery = false
    
  ) {
    // this : acceder al scope interno de la clase;
    // this : se usa para acceder a los atributos internos de la clase;
    this.aforo = _aforo;
    this.nmroMesas = _nmroMesas;
    this.direccion = _direccion;
    this.categoria = _categoria;
    this.telefonos = _telefonos;
    this.nombre = _nombre;
    this.delivery = _delivery;

    if (this.aforo > 500) {
      this.tipificacion = "A";
    } else if (this.aforo > 300) {
      this.tipificacion = "B";
    } else {
      this.tipificacion = "C";
    }
  }


  imprimirTelefonos(){
    console.log(this.telefonos);
    console.log(`Telefonos del restaurant : ${this.nombre}`);
    
    for (let i = 0; i < this.telefonos.length; i++) {
      console.log(`${this.telefonos[i]}`);
      
    }
    
  }

  imprimirTelefonos2(){

    for (const tel of this.telefonos) {
      console.log(`Telefono : ${tel}`);
      
    }
  }

  toString() {
    return this.nombre;
  }
}

//Instanciar una clase: crear un objeto a partir de una clase
let objTanta = new Restaurante(
  800,
  200,
  "Vallecito",
  "comida criolla",
  ["982332140", "982737123"],
  "Tanta",
  true
);

let objAstrid = new Restaurante();
console.log(objTanta);

//Modificando los atributos de un objeto

/* objAstrid.aforo = 1000; */


console.log(objAstrid);


objTanta.imprimirTelefonos();
objTanta.imprimirTelefonos2();

