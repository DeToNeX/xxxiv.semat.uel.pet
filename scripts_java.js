$(document).ready(function () {
    $('#header2').load('https://www.uel.br/eventos/semat/header.html');
  });


  $(document).ready(function () {
    CheckForHighlight();
});

function CheckForHighlight() {
    href = window.location.href;
    values = href.split('?')[1] // Remove the url ".html?highlight=#try2"
    highlight = values.split('=#')[1]; // divide em =# e pega o segundo parametro
    $('#' + highlight).addClass('highlightedElem');
    //highlightedElemclass has box shadow or border
}