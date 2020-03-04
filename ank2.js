$(document).ready(function () {
  $('.q2-7,.q3-7,.q4-7,.form-q2,.form-q3,.form-q4,#block-2').hide();

  var bl = $('div[class^="q1_"]');
  var lb = $("div[class^='q5_']");

    $('.form-sub1').click(function () {
      if ($('input[id^="q2-"]').is(':checked') || $('input[id^="q3-"]').is(':checked') || $('input[id^="q4-"]').is(':checked')) {
      $('#block-1,#text').hide();
      $('#block-2').fadeIn();
      $('.q6-7,.q7-7,.q8-7').hide();


      let url = window.location.search.slice(1);
      $('#9').attr('value', url);


      $(lb).click(function () {
        $(lb).css({
          'backgroundColor': '#fff',
          'color': '#434647'
        })

        $(lb).removeClass('active');

        var col = window.getComputedStyle(this, null).getPropertyValue('border-color');
        $(this).css({
          'backgroundColor': col,
          'color': '#fff'
        })

        $('.q5_5').css({
          'color': '#434647'
        })
        $(this).addClass('active')

        var la = $(this).find('.lab');
        var num = parseInt(la.html());

        /*var la = parseInt($('div[class~="active"]+input > label').html());*/

        switch (true) {
          case (num <= 6):
            $('.form-q6,.form-q7').hide();
            $('.form-q8').fadeIn();
            break;

          case (num <= 8):
            $('.form-q6,.form-q8').hide();
            $('.form-q7').fadeIn();
            break;

          case (num >= 9):
            $('.form-q7,.form-q8').hide();
            $('.form-q6').fadeIn();
            break;

          default:
            $('.form-q6,.form-q7,.form-q8').show();
        }

        $(".q6-6,.q7-6,.q8-6").click(function () {

          if ($("#q6-6").is(':checked'))
            $('.q6-7').slideDown();
          else $('.q6-7').slideUp();

          if ($("#q7-6").is(':checked'))
            $('.q7-7').slideDown();
          else $('.q7-7').slideUp();

          if ($("#q8-6").is(':checked'))
            $('.q8-7').slideDown();
          else $('.q8-7').slideUp();
        });
      });
    }
      else
      return false;
    });




 

  $(bl).click(function () {
    $(bl).css({
      'backgroundColor': '#fff',
      'color': '#434647'
    })

    $(bl).removeClass('active');

    var col = window.getComputedStyle(this, null).getPropertyValue('border-color');
    $(this).css({
      'backgroundColor': col,
      'color': '#fff'
    })
    $('.q1_5').css({
      'color': '#434647'
    })

    $(this).addClass('active')

    var la = $(this).find('.lab');
    var num = parseInt(la.html());

    /*var la = parseInt($('div[class~="active"]+input > label').html());*/

    switch (true) {
      case (num <= 6):
        $('.form-q2,.form-q3').hide();
        $('.form-q4').fadeIn();
        break;

      case (num <= 8):
        $('.form-q2,.form-q4').hide();
        $('.form-q3').fadeIn();
        break;

      case (num >= 9):
        $('.form-q3,.form-q4').hide();
        $('.form-q2').fadeIn();
        break;

      default:
        $('.form-q2,.form-q3,.form-q4').show();
    }

  });

  $(".q2-6,.q3-6,.q4-6").click(function () {

    if ($("#q2-6").is(':checked'))
      $('.q2-7').slideDown();
    else $('.q2-7').slideUp();

    if ($("#q3-6").is(':checked'))
      $('.q3-7').slideDown();
    else $('.q3-7').slideUp();

    if ($("#q4-6").is(':checked'))
      $('.q4-7').slideDown();
    else $('.q4-7').slideUp();
  });

  $('.form-sub2').click(function() {
    if ($('input[id^="q6-"]').is(':checked') || $('input[id^="q7-"]').is(':checked') || $('input[id^="q8-"]').is(':checked'))
      return true
    else 
    return false
  })

});