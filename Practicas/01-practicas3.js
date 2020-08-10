function checkPalindrome(inputString) {
  let recorte = inputString.trim();
  recorte = recorte.toLowerCase();
  recorteEspacios = recorte.replace(/ +/g, "")

  let palindromo = "";

  for (let i = recorteEspacios.length - 1; i >= 0 ; i--) {
    palindromo = palindromo + recorteEspacios[i];
  }

  if (recorteEspacios === palindromo) {
    return true;
  } else{
    return false;
  }
}


let respuesta = checkPalindrome("Anita Lava La Tina");
console.log(respuesta);

