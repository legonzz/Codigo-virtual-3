/* Waves.attach(".btn");
Waves.init(); */

/**
 * (()=>{
 * Waves.attach(".btn");
 * Waves.init();
 * })();
 */

 /**
  * Forma más recomendable de llamar a una función
  * de las librerías.
  */
 const inicializarTodo = ()=>{
     Waves.attach(".btn");
     Waves.init();
 };

 inicializarTodo();