
/* Prevengo che lo script si attivi prima del completo caricamento della pagina NON FUNZIONA!!!*/
window.onload = function paginaCaricata(){

    /* Chiedo all'utente il numero dei Km da percorrere */

    var kilo = prompt('Quanti kilometri devi percorrere?');

    /* Chiedo all'utente la sua età */
    var eta = prompt('Quanti anni hai?');

    /* Prezzo del viaggio per kilometro */
    const aliquota = 0.21;

    /* Prezzo base calcolato */
    var prezzoBase = aliquota * kilo;

    /* Preparo la variabile per il prezzo finale */
    var prezzoFinale;

    /* Calcolo il prezzo con eventuali sconti */
    if(eta > 65){
        prezzoFinale = prezzoBase * 0.60;
    } else if(eta < 18){
        prezzoFinale = prezzoBase * 0.80;
    } else{
        prezzoFinale = prezzoBase;
    }

    /* Comunico il prezzo finale */
    window.alert('Il prezzo del tuo biglietto è di:\n' + prezzoFinale.toFixed(2) + '€');
};
