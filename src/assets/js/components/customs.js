$(function(){


  'use strict';


  // Navigation anchors
  $('.navigation__link').on('click', function(e){
    e.preventDefault();

    let navScroll = $(this).attr('href'),
    navScrollBlock = $(navScroll).offset().top;
    $('html, body').animate({
      scrollTop: navScrollBlock
    }, 2000);
  });


});