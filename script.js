const PRECIO_ENTRADA_GENERAL = 105;

let date = new Date();
let currentDate = `Fecha: ${date.getDate()}/${
  date.getMonth() + 1
}/${date.getFullYear()}`;

document.getElementById("d1").innerHTML = currentDate;

document.getElementById("form").addEventListener("submit", computeResult);

function computeResult(e) {
  const UIdias = document.getElementById("entrada-general").value;
  const UIcamping = document.getElementById("camping").value;
  const UInumDePersonas = document.getElementById("num-personas").value;

  let div = document.getElementById("preview");

  /* ENTRADA GENERAL */
  div.innerHTML += `<p> El total de por ${UInumDePersonas} persona(s) para ${UIdias} dia(s) es de $${
    UInumDePersonas * UIdias * PRECIO_ENTRADA_GENERAL
  } pesos por un horario de 9 a.m. a 6 p.m. </p> <br> <br>`;

  /* CAMPING */

  console.log(UIcamping, UIdias, UInumDePersonas, PRECIO_ENTRADA_GENERAL);

  e.preventDefault();
}
