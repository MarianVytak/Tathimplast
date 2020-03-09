$(function(){


  'use strict';


  // Navigation anchors
  $('.js-anchor').on('click', function(e){
    e.preventDefault();

    let navScroll = $(this).attr('href'),
    navScrollBlock = $(navScroll).offset().top;
    $('html, body').animate({
      scrollTop: navScrollBlock
    }, 2000);
  });


  // Form Validation
  $('.js-input-tel').inputmask("+7 (999) 999 - 99 - 99");

  $.validator.addMethod( "mobileRU", function( phone_number, element ) {
    var ruPhone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
    return this.optional( element ) || ruPhone_number.length > 9 && /^((\+7|7|8)+([0-9]){10})$/.test( ruPhone_number );
  }, "Please specify a valid mobile number" );

  $("#s1-form").validate({

    rules: {
        s1_input_name: {
            required: true,
            minlength: 2
        },
        s1_input_tel: {
            required: true,
            mobileRU: true
        },
    },
    messages: {
        s1_input_name: {
            required: "Это поле обязательно к заполнению",
            minlength: jQuery.validator.format("Длина имени должна составлять не менее {0} букв.")
        },
        s1_input_tel: {
            required: "Это поле обязательно к заполнению",
            mobileRU: "Пожалуйста, укажите действительный номер мобильного телефона"
        },
    },
    focusCleanup: true,
    focusInvalid: false,
    errorClass: "form__input_error",
    validClass: "form__input_success"
});

$("#s8-form").validate({

  rules: {
      s8_input_name: {
          required: true,
          minlength: 2
      },
      s8_input_tel: {
          required: true,
          mobileRU: true
      },
  },
  messages: {
      s8_input_name: {
          required: "Это поле обязательно к заполнению",
          minlength: jQuery.validator.format("Длина имени должна составлять не менее {0} букв.")
      },
      s8_input_tel: {
          required: "Это поле обязательно к заполнению",
          mobileRU: "Пожалуйста, укажите действительный номер мобильного телефона"
      },
  },
  focusCleanup: true,
  focusInvalid: false,
  errorClass: "form__input_error",
  validClass: "form__input_success"
});


});