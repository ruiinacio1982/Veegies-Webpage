

var slideIndex = 0; //slide inicial
var timechange = 2000; //tempo em milisegundos
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slideVeggie");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, timechange); 
}



