/**
 * CREARE UNO SLIDER DI IMMAGINI
 */

/**
  * PSEUDO CODICE:
  * 1) TARHETTIZZO I BOTTONI
  * 2) TARGHETTIZZO LA PRIMA IMMAGINE
  * 3) TARGHETTIZZO L'ULTIMA IMMAGINE
  * 4) GENERO L'EVENTO DEL CLICK NEI DUE BOTTONI
  * 5) CREO LA VARIABILE CHE CONTERRA' L'ELEMENTO CORRENTE
  * 
*/

$(document).ready ( function (){

  $(document).keydown(function (event) {
    if(event.keyCode == 39) {
      var imageCurrent = $('.container-img .active');
      imageCurrent.removeClass('active');
      imageCurrent.next().addClass('active');
      if (imageCurrent.hasClass('last')) {
        imageFirst.addClass('active');
      }
    } else if (event.keyCode == 37) {
      var imageCurrent = $('.container-img .active');
      imageCurrent.removeClass('active');
      imageCurrent.prev().addClass('active');
      if (imageCurrent.hasClass('first')) {
        imageLast.addClass('active');
      }
    }

  });

  var btnPrevious = $('.block-sx > i');
  var btnNext = $('.block-dx > i');
  var imageFirst = $('.first');
  var imageLast = $('.last');

  btnNext.click ( function (){
    // CREO LA MIA VARIABILE CHE CONTERRA' L'ELEMENTO CORRENTE
    var imageCurrent = $('.container-img .active');
    imageCurrent.removeClass('active');
    imageCurrent.next().addClass('active');
    if (imageCurrent.hasClass('last')) {
      imageFirst.addClass('active');
    }
  });

  btnPrevious.click ( function (){
    var imageCurrent = $('.container-img .active');
    imageCurrent.removeClass('active');
    imageCurrent.prev().addClass('active');
    if(imageCurrent.hasClass('first')) {
      imageLast.addClass('active');
    }
  });
  








// FINE DOCUMENT READY
});