let btnLight = document.getElementById("btnLight");
let btnDarks = document.getElementById("btnDarks");
let btnToggle = document.getElementById("btnToggle");
let seccion1 = document.querySelector(".seccion1");
// Evento Click

btnLight.onclick = () => {
  if (seccion1.classList.contains("sombra-darks") === true) {
    seccion1.classList.remove("sombra-darks");
  }
  seccion1.classList.add("sombra-light");
};

btnDarks.onclick = () => {
  if (seccion1.classList.contains("sombra-light") === true) {
    seccion1.classList.remove("sombra-light");
  }
  seccion1.classList.add("sombra-darks");
};

btnToggle.onclick = () => {
  if (seccion1.classList.contains("sombra-light") === true) {
    seccion1.classList.remove("sombra-light");
    seccion1.classList.add("sombra-darks");
  } else if (seccion1.classList.contains("sombra-darks") === true) {
    seccion1.classList.remove("sombra-darks");
    seccion1.classList.add("sombra-light");
  } else {
    seccion1.classList.add("sombra-light");
  }
};

// EJERCICIO NEOMORFISMO:
let neomorfismoBtn = document.querySelector(".neomorfismoBtn");
let neomorfismo = document.querySelector(".neomorfismo");
neomorfismoBtn.classList.add("btnOn")

neomorfismoBtn.onclick = ()=>{
    if (neomorfismoBtn.classList.contains("btnOn")=== true) {
        neomorfismoBtn.classList.remove("btnOn");
        neomorfismoBtn.classList.add("btnOf")
    } else if (neomorfismoBtn.classList.contains("btnOf")=== true){
        neomorfismoBtn.classList.remove("btnOf");
        neomorfismoBtn.classList.add("btnOn")
    }
};
