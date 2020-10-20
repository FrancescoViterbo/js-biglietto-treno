
/* Colleziono i dati dagli input */

var kilo = document.getElementById('kilo');
var eta = document.getElementById('eta');
var btn = document.getElementById('btn');
var etaAlert = document.getElementById('eta-alert');
var showPrezzo = document.getElementById('prezzo');
var mainDiv = document.querySelector('.gray-background');
btn.addEventListener('click', calculate);

/* Aliquota */
const aliquota = 0.21;


function calculate(event){

    /* prevengo il ricaricamento della pagina */
    event.preventDefault();

    /* Prezzo base calcolato */
    var prezzoBase = aliquota * kilo.value;

    /* Preparo la variabile per il prezzo finale */
    var prezzoFinale;
    
    if(isNaN(kilo.value) || isNaN(eta.value)){
        etaAlert.innerText = "Per favore inserisci solo numeri validi nei campi sopra!";
    } else {
        /* Calcolo il prezzo con eventuali sconti */
        if(eta.value > 65){
            prezzoFinale = prezzoBase * 0.60;
        } else if(eta.value < 18){
            prezzoFinale = prezzoBase * 0.80;
        } else{
            prezzoFinale = prezzoBase;
        }
    
        /* Comunico il prezzo finale e nascondo il form */
        mainDiv.style.opacity = "0";
        mainDiv.style.height = "0";
        mainDiv.style.width = "0";
        var frasePrezzo = 'Il prezzo del tuo biglietto è di:\n' + prezzoFinale.toFixed(2) + '€';
        var para = document.createElement('h2');
        para.innerText = frasePrezzo.toString();
        para.style.textAlign = 'center';
        showPrezzo.appendChild(para);
    }
}