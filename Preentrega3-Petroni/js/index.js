let boton = document.getElementById("btnPrincipal");

boton.onclick = () =>{convertir;}

let seleccion = document.getElementById('seleccion');
let contenido = document.getElementById("contenido")

var toggleSwitch = document.getElementById('container');
var body = document.querySelector('body');

toggleSwitch.onclick = () =>{
	toggleSwitch.classList.toggle('active');
	body.classList.toggle('active');
}

let select = document.getElementById("seleccion");
let value = parseInt(select.options[select.selectedIndex].value);

let select1 = document.getElementById("seleccion1");
let value1 = parseInt(select.options[select1.selectedIndex].value);

const input = document.querySelector("input"); 
const valueInput = document.getElementById("texto"); 

function convertir(){
	let importeDolarizado = parseInt(input)* ArrayMonedas[value].valorEnDolares;
	let importeFinal = importeDolarizado * ArrayMonedas[value1].valorEnMoneda;
	valueInput.innerText = toString(importeFinal);
	
}

class Moneda {
	constructor (nombre,valorEnDolares,valorEnMoneda){
		this.nombre = nombre;
		this.valorEnDolares = valorEnDolares;
		this.valorEnMoneda = valorEnMoneda;
	}
}

const ArrayMonedas = [
	{id: 0 ,nombre:"Dolar", valorEnDolares:1 , valorEnMoneda:1},
	{id: 1, nombre:"Pesos", valorEnDolares:1/1250 , valorEnMoneda:1250},
	{id: 2 ,nombre:"Reales",valorEnDolares: 1/5,valorEnMoneda:5},
	{id: 3 ,nombre:"Euros",valorEnDolares:1.08,valorEnMoneda:0.93 }

]

const guardarLocal = (clave, valor) => {localStorage.setItem(clave,valor)};

for (const nombre of ArrayMonedas){
	guardarLocal (nombre.id, JSON.stringify(nombre) )
}


const ArrayBonos = [
	{bono:"TX24", cotización: 1},
	{bono:"TX26", cotización: 1.25},
	{bono:"TX28", cotización: 1.50}
]


//chequear en el codigo de la clase 15 este pedazo de codigo

const mensaje = "Trabajo Integrador - Conversor de divisas";
const titulo = document.getElementById("titulo");
let indice = 0;

function mostrarLetra(){
	titulo.textContent += mensaje[indice];
	indice++;
	if (indice < mensaje.length){
		setTimeout(mostrarLetra,200)
	}
}

setTimeout(mostrarLetra, 3000);

/*
let divisa1=prompt("Seleccione la primer divisa: 1-Dolar 2-Peso Argentino 3-Real brasileño 4-Euro ");

while (isNaN(divisa1) || divisa1>=5 || divisa1<=0){

	alert("La primer divisa ingresada no corresponde a un valor indicado");
	divisa1=prompt("Seleccione la primer divisa: 1-Dolar 2-Peso Argentino 3-Real brasileño 4-Euro ");

}

let divisa2=parseInt(prompt("Seleccione la segunda divisa: 1-Dolar 2-Peso Argentino 3-Real brasileño 4-Euro "));


while (isNaN(divisa2) || divisa2>=5 || divisa2<=0){

	alert("La segunda divisa ingresada no corresponde a un valor indicado");
	divisa2=prompt("Seleccione la segunda divisa: 1-Dolar 2-Peso Argentino 3-Real brasileño 4-Euro ");

}

let importe=parseFloat(prompt("Ingrese el importe a convertir"));

while (isNaN(importe)){

	alert("El importe ingresado no corresponde a un valor numerico");
	importe=parseFloat(prompt("Ingrese el importe a convertir"));
}


while (divisa1==divisa2){
	console.log ("Ingresó dos veces la misma divisa");
	divisa1=prompt("Seleccione la primer divisa: 1-Dolar 2-Peso Argentino 3-Real brasileño 4-Euro ");
	divisa2=prompt("Seleccione la segunda divisa: 1-Dolar 2-Peso Argentino 3-Real brasileño 4-Euro ");
}; 

*/




/*let respuesta = prompt("¿Quiere conocer la cotizacion de otras bonos dolarizados?").toUpperCase();


if (respuesta == "SI"){
	for (const cotizacion of ArrayBonos){
		console.log(`El bono ${cotizacion.bono} cotiza ${cotizacion.cotización}`)
	}
}else {
	console.log("Te lo pierdes entonces")
}*/



/*******************LISTA DESPLEGABLE*********************************/