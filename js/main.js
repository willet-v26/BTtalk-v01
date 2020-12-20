$(document).ready(function(){
  // init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // build scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#project01'
  })
  .setClassToggle('#project01', 'fade-in') //add class to project01
  .addTo(controller);
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// to jest moj skrypt ktory nei dziala
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
