var pContainerHeight = $('.ofertyAll').height();
var sec01 = $('.container-fluid#section1').height();
var sec02 = $('.container-fluid#section2').height();
var sec03 = $('.container-fluid#section3').height();
var sec04 = $('.container-fluid#section4').height();
var sec05 = $('.container-fluid#section5').height();
var secAll = sec01 + sec02 + sec03 + sec04 + sec05
var top = secAll
// cStart -moja zmienna
var cStart = $('#section1').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.oferta01').css({
      'transform' : 'translate(0px, '+ wScroll /60 +'%)'
    });

    $('.oferta02').css({
      'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });

    $('.oferta03').css({
      'transform' : 'translate(0px, -'+ wScroll /35 +'%)'
    });

    $('.oferta04').css({
      'transform' : 'translate(0px, -'+ wScroll /50 +'%)'
    });

    $('.oferta05').css({
      'transform' : 'translate(0px, -'+ wScroll /3 +'%)'
    });

    $('.bonus.b01').css({
      'transform' : 'translate(0px, -'+ wScroll /2 +'%)'
    });

    $('.bonus.b02').css({
      'transform' : 'translate(0px, -'+ wScroll /4 +'%)'
    });

    $('.bonus.b03').css({
      'transform' : 'translate(0px, -'+ wScroll /54 +'%)'
    });

  }


  // // Landing Elements
  // if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {
  //
  //   $('.clothes-pics figure').each(function(i){
  //
  //     setTimeout(function(){
  //       $('.clothes-pics figure').eq(i).addClass('is-showing');
  //     }, (700 * (Math.exp(i * 0.14))) - 700);
  //   });
  //
  // }


  // // Promoscope
  // if(wScroll > $('.large-window').offset().top - $(window).height()){
  //
  //   $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});
  //
  //   var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);
  //
  //   $('.window-tint').css({'opacity': opacity});
  //
  // }
  //
  //
  // // Floating Elements
  //
  // if(wScroll > $('.blog-posts').offset().top - $(window).height()){
  //
  //   var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();
  //
  //   $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});
  //
  //   $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});
  //
  // }
});
