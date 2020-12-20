window.addEventListener("DOMContentLoaded", scrollLoop, false)

// var sec01 = $('#section1').height();
// var sec02 = $('#section2').height();
// var sec03 = $('#section3').height();
// var sec04 = $('#section4').height();
// var sec05 = $('#section5').height();
// var secAll = sec01 + sec02 + sec03
// var sec01h = document.getElementById('#section1').offsetHeight

// function showheight() {
//     var H = document.getElementById(sec01h);
//     alert (H.offsetHeight);
// }


var of1 = document.querySelector(".oferta01");
var of2 = document.querySelector(".oferta02");
// var of3 = document.querySelector(".oferta03");
var of4 = document.querySelector(".oferta04");
var of5 = document.querySelector(".oferta05");
var bon01 = document.querySelector(".bonus.b01");
var bon02 = document.querySelector(".bonus.b02");
var bon03 = document.querySelector(".bonus.b03");

var xScrollPosition;
var yScrollPosition;

function scrollLoop(e) {
  xScrollPosition = window.scrollX;
  yScrollPosition = window.scrollY;


  setTranslate(0, yScrollPosition * -0.45, of1);
  setTranslate(0, yScrollPosition * -0.5, of2);
  // setTranslate(0, yScrollPosition * -0.3, of3);
  setTranslate(0, yScrollPosition * -0.1, of4);
  setTranslate(0, yScrollPosition * -0.25, of5);
  setTranslate(0, yScrollPosition * -0.1, bon01);
  setTranslate(0, yScrollPosition * -0.96, bon02);
  setTranslate(0, yScrollPosition * -0.1, bon03);

  requestAnimationFrame(scrollLoop);
}

// function setTranslate(xPos, yPos, el) {
//   el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0";
// }

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}
