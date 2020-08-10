//EJERCICIO 3.17

//Realice un algoritmo y represéntelo mediante el diagrama de flujo,
//el pseudocódigo y el diagrama N/S que permitan determinar qué
//paquete se puede comprar una persona con el dinero que recibirá
//en diciembre, considerando lo siguiente:
//• Paquete A. Si recibe $50,000 o más se comprará una televisión,
//un modular, tres pares de zapatos, cinco camisas y cinco pantalones.
//• Paquete B. Si recibe menos de $50,000 pero más (o igual) de
//$20,000, se comprará una grabadora, tres pares de zapatos,
//cinco camisas y cinco pantalones.
//• Paquete C. Si recibe menos de $20,000 pero más (o igual) de
//$10,000, se comprará dos pares de zapatos, tres camisas y tres
//pantalones.
//• Paquete D. Si recibe menos de $10,000, se tendrá que conformar
//con un par de zapatos, dos camisas y dos pantalones.



paquete = +prompt(`Escoja paquete de preferencia:
1 = Paquete (A) premium
2 = Paquete (B) gold
3 = Paquete (C) silver
4 = Paquete (D) standard`);

switch (paquete) {
  case 1:
    console.log("Usted escogió el paquete A, precio desde $50000");
    break;
  case 2:
    console.log("Usted escogió el paquete B, precio desde 20000");
    break;
  case 3:
    console.log("Usted escogió el paquete C, precio desde 10000");
    break;
  case 4:
    console.log("Usted escogió el paquete D, precio desde 1000");
    break;
}

if (paquete == 1 || paquete == 2 || paquete == 3 || paquete == 4) {
  let dinero = +prompt("Ingrese monto a pagar");
  if (dinero > 50000) {
    console.log(`Usted puede realizar la compra`);
  } else if (paquete == 2 || paquete == 3 || paquete == 4) {
    if (dinero >= 20000) {
      console.log(`Usted puede realizar la compra`);
    } else if (paquete == 3 || paquete == 4) {
      if (dinero >= 10000) {
        console.log(`Usted puede realizar la compra`);
      } else if (paquete || 4) {
        if (dinero > 1000) {
          console.log(`Usted puede realizar la compra`);
        } else {
          console.log(
            `Usted no dispone de dinero suficiente, escoja otro paquete`
          );
        }
      } else {
        console.log(
          `Usted no dispone de dinero suficiente, escoja otro paquete`
        );
      }
    } else {
      console.log(`Usted no dispone de dinero suficiente, escoja otro paquete`);
    }
  } else {
    console.log(`Usted no dispone de dinero suficiente, escoja otro paquete`);
  }
} else {
  console.log(`Usted no dispone de dinero suficiente, escoja otro paquete`);
}
