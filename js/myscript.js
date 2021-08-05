

let numeroChilometri = parseInt(prompt("Quanti chilometri deve percorrere?"));
let etaPasseggero = parseInt(prompt("Qual è l'età del passeggero?"));

const prezzoAlChilometro = 0.21;



if (isNaN( numeroChilometri) || isNaN(etaPasseggero) ){
    alert("Devi inserire due numeri")
}

let prezzoIntero = numeroChilometri * prezzoAlChilometro;

document.getElementById("costo-intero-biglietto").innerHTML = prezzoIntero.toFixed(2);

let scontoMinorenni = (20 * prezzoIntero) / 100;
let scontoOver65 = (40 * prezzoIntero) / 100;

if (etaPasseggero < 18){

    prezzoIntero = prezzoIntero - scontoMinorenni;
}else if (etaPasseggero > 65){ 
    prezzoIntero = prezzoIntero - scontoOver65;
}else{
    prezzoIntero = prezzoIntero;
}

document.getElementById("costo-finale-biglietto").innerHTML = prezzoIntero.toFixed(2);

