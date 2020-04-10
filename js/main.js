/**
 * CREARE UNO SLIDER DI IMMAGINI
 */

/**
  * PSEUDO CODICE:
  * 1) TARHETTIZZO I BOTTONI
  * 2) TARGHETTIZZO LA PRIMA IMMAGINE
  * 3) TARCHETTIZZO L'ULTIMA IMMAGINE
  * 
*/

$(document).ready ( function (){

  var btnPrevious = $('.block-sx > i');
  var btnNext = $('.block-dx > i');
  var imageFirst = $('.first');
  var imageLast = $('.last');


  btnNext.click ( function (){
    // CREO LA MIA VARIABILE CHE CONTERRA' L'ELEMENTO CORRENTE
    var imageCurrent = $('.container-img .active');
    imageCurrent.removeClass('active');
    imageCurrent.next().addClass('active');
  });

  btnPrevious.click ( function (){
    var imageCurrent = $('.container-img .active');
    imageCurrent.removeClass('active');
    imageCurrent.prev().addClass('active');
  });

  








// FINE DOCUMENT READY
});