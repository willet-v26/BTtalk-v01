var pContainerHeight = $('.ofertyAll').height();
var sec01 = $('.container-fluid#section1').height();
var sec02 = $('.container-fluid#section2').height();
var sec03 = $('.container-fluid#section3').height();
var sec04 = $('.container-fluid#section4').height();
var sec05 = $('.container-fluid#section5').height();
var secAll = sec01 + sec02 + sec03 + sec04 + sec05
var top = secAll

$(window).scroll(function(e){
 parallax();
});

function parallax(){
  var wSroll = $(this).scrollTop();
    $('.oferta01').css({
      'transform' : 'translate(0px, '+ wScroll /60 +'%)'
    });
// the 70 corresponds to the 'cloud1' value for 'top'.

    $('.oferta02').css(
      'top', +(wSroll*0.095) + 440 +'%'
    );
// the 50 corresponds to the 'cloud2' value for 'top'.

    $('.oferta03').css(
      'top', -(wSroll*0.1)+490+'%'
    );
// the 50 corresponds to the 'cloud2' value for 'top'.

    $('.oferta04').css(
      'top', -(wSroll*0.15)+720+'%'
    );
// the 50 corresponds to the 'cloud2' value for 'top'.

    $('.oferta05').css(
      'top', -(wSroll*0.1)+510+'%'
    );
// the 50 corresponds to the 'cloud2' value for 'top'.

//     $('.bonus.b01').css(
//       'top', -(wSroll*0.1)+410+'%'
//     );
// // the 50 corresponds to the 'cloud2' value for 'top'.
//
//     $('.bonus.b02').css('top', -(wSroll*0.1)+450+'%');
// // the 50 corresponds to the 'cloud2' value for 'top'.
//
//     $('.bonus.b03').css('top', -(wSroll*0.1)+450+'%');
// // the 50 corresponds to the 'cloud2' value for 'top'.
}

// ///////////////////////////////////////////

// $(window).scroll(function(e){
//  parallax();
// });
// function parallax(){
//   var scrolled = $(window).scrollTop();
//
//     $('.cloud1').css('top', -(scrolled*0.1)+70+'%');
// // the 70 corresponds to the 'cloud1' value for 'top'.
//
//     $('.cloud2').css('top', -(scrolled*0.3)+50+'%');
// // the 50 corresponds to the 'cloud2' value for 'top'.
// }
