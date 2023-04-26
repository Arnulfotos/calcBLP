const PRECIO_ENTRADA_GENERAL = 105;
const PRECIO_CAMPING = 400;

let date = new Date();

let currentDate = `Fecha: ${date.getDate()}/${
  date.getMonth() + 1
}/${date.getFullYear()}`;

document.getElementById("d1").innerHTML = currentDate;

let currentYear = `&copy; Arnulfotos ${date.getFullYear()}`

document.getElementById("copyright").innerHTML = currentYear;

document.getElementById("form").addEventListener("submit", computeResult);

function computeResult(e) {
	const UIdias = document.getElementById("entrada-general").value;
	const UIcamping = document.getElementById("camping").value;
	const UInumDePersonas = document.getElementById("num-personas").value;
	const UInumDeAutos = document.getElementById("auto").value;

	const calcEntradaGeneral = UInumDePersonas * UIdias * PRECIO_ENTRADA_GENERAL
	const calcCamping = UInumDeAutos * UIcamping * PRECIO_CAMPING;

	const calcTotal = calcCamping + calcEntradaGeneral

	let div = document.getElementById("preview");



	let UIvalores = [UIdias, UInumDePersonas, UInumDeAutos, UIcamping]

	let palabrasSingulares = ["dia", "persona", "auto", "noche"]
	let palabrasSingulares2 = [...palabrasSingulares]

	for (i = 0; i < palabrasSingulares.length; i++) {

		if (UIvalores[i] > 1) {
			palabrasSingulares[i] += "s"
		}

	}



	const datoTextoCalc = {}

	palabrasSingulares2.forEach((element, index) => {
		datoTextoCalc[element] = palabrasSingulares[index];
	});

	console.log(datoTextoCalc)



	/* ENTRADA GENERAL */
	div.innerHTML += `<p> El total por ${UInumDePersonas} ${datoTextoCalc.persona} para ${UIdias} ${datoTextoCalc.dia} es de $${calcEntradaGeneral} pesos por un horario de 9 a.m. a 6 p.m. </p> <br> <br>`;

	/* CAMPING */
	div.innerHTML += `<p> El total por ${UInumDeAutos} ${datoTextoCalc.auto} para ${UIcamping} ${datoTextoCalc.noche} es de $${calcCamping} pesos por un horario de 6 p.m. a 9 a.m. </p> <br> <br>`;

	/* TOTAL */

	div.innerHTML += `<p> El total a pagar es de $${calcTotal} pesos</p> <br>  <hr /> <br>`;



	e.preventDefault();
}