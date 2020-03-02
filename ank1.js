$(document).ready(function () {

  var bl = $('div[class^="q1_"]');
  var lb = $("div[class^='q5_']");


  $('.q2-7,.q3-7,.q4-7,.form-q2,.form-q3,.form-q4,#block-2').hide();

  $('.form-sub1').click(function () {
    let part = $('q9');
  let url = window.location;
  part.val = url
    $('#block-1,#text').hide();
    $('#block-2').fadeIn();
    $('.q6-7,.q7-7,.q8-7').hide();
  })


  $('.q1_0').click(function () {
    $(bl).css({
      'backgroundColor': '#fff',
      'color': '#434647'
    });
    $(this).css({
      'backgroundColor': '#a00000',
      'color': '#fff'
    });
    $('.form-q2,.form-q3').hide();
    $('.form-q4').fadeIn();
  });

  $('.q1_1').click(function () {
    $(bl).css({
      'backgroundColor': '#fff',
      'color': '#434647'
    });
    $(this).css({
      'backgroundColor': '#ff0000',
      'color': '#fff'
    });
    $('.form-q2,.form-q3').hide();
    $('.form-q4').fadeIn();
  });

  $('.q1_2').click(function () {
    $(bl).css({
      'backgroundColor': '#fff',
      'color': '#434647'
    });
    $(this).css({
      'backgroundColor': '#ff3c00',
      'color': '#fff'
    });
    $('.form-q2,.form-q3').hide();
    $('.form-q4').fadeIn();
  });

  $('.q1_3').click(function () {
    $(bl).css({
      'backgroundColor': '#fff',
      'color': '#434647'
    });
    $(this).css({
      'backgroundColor': '#ff7b00',
      'color': '#fff'
    });
    $('.form-q2,.form-q3').hide();
    $('.form-q4').fadeIn();
  });

  $('.q1_4').click(function () {
    $(bl).css({
      'backgroundColor': '#fff',
      'color': '#434647'
    });
    $(this).css({
      'backgroundColor': '#ff9b00',
      'color': '#fff'
    });
    $('.form-q2,.form-q3').hide();
    $('.form-q4').fadeIn();
  });

  $('.q1_5').click(function () {
    $(bl).css({
      'backgroundColor': '#fff',
      'color': '#434647'
    });
    $(this).css({
      'backgroundColor': '#ffff00',
      'color': '#434647'
    });
    $('.form-q2,.form-q3').hide();
    $('.form-q4').fadeIn();
  });

  $('.q1_6').click(function () {
    $(bl).css({
      'backgroundColor': '#fff',
      'color': '#434647'
    });
    $(this).css({
      'backgroundColor': '#bbff00',
      'color': '#fff'
    });
    $('.form-q2,.form-q3').hide();
    $('.form-q4').fadeIn();
  });

  $('.q1_7').click(function () {
    $(bl).css({
      'backgroundColor': '#fff',
      'color': '#434647'
    });
    $(this).css({
      'backgroundColor': '#73ff00',
      'color': '#fff'
    });
    $('.form-q2,.form-q4').hide();
    $('.form-q3').fadeIn();
  });

  $('.q1_8').click(function () {
    $(bl).css({
      'backgroundColor': '#fff',
      'color': '#434647'
    });
    $(this).css({
      'backgroundColor': '#1dfc00',
      'color': '#fff'
    });
    $('.form-q2,.form-q4').hide();
    $('.form-q3').fadeIn();
  });

  $('.q1_9').click(function () {
    $(bl).css({
      'backgroundColor': '#fff',
      'color': '#434647'
    });
    $(this).css({
      'backgroundColor': '#00ff2a',
      'color': '#fff'
    });
    $('.form-q4,.form-q3').hide();
    $('.form-q2').fadeIn();
  });

  $('.q1_10').click(function () {
    $(bl).css({
      'backgroundColor': '#fff',
      'color': '#434647'
    });
    $(this).css({
      'backgroundColor': '#00ff40',
      'color': '#fff'
    });
    $('.form-q4,.form-q3').hide();
    $('.form-q2').fadeIn();
  });









  $('.q5_0').click(function () {

    $(lb).css({
      'backgroundColor': '#fff',
      'color': '#434647'
    });
    $(this).css({
      'backgroundColor': '#a00000',
      'color': '#fff'
    });
    $('.form-q6,.form-q7').hide();
    $('.form-q8').fadeIn();


  });

  $('.q5_1').click(function () {
    $(lb).css({
      'backgroundColor': '#fff',
      'color': '#434647'
    });
    $(this).css({
      'backgroundColor': '#ff0000',
      'color': '#fff'
    });
    $('.form-q6,.form-q7').hide();
    $('.form-q8').fadeIn();
  });

  $('.q5_2').click(function () {
    $(lb).css({
      'backgroundColor': '#fff',
      'color': '#434647'
    });
    $(this).css({
      'backgroundColor': '#ff3c00',
      'color': '#fff'
    });
    $('.form-q6,.form-q7').hide();
    $('.form-q8').fadeIn();
  });

  $('.q5_3').click(function () {
    $(lb).css({
      'backgroundColor': '#fff',
      'color': '#434647'
    });
    $(this).css({
      'backgroundColor': '#ff7b00',
      'color': '#fff'
    });
    $('.form-q6,.form-q7').hide();
    $('.form-q8').fadeIn();
  });

  $('.q5_4').click(function () {
    $(lb).css({
      'backgroundColor': '#fff',
      'color': '#434647'
    });
    $(this).css({
      'backgroundColor': '#ff9b00',
      'color': '#fff'
    });
    $('.form-q6,.form-q7').hide();
    $('.form-q8').fadeIn();
  });

  $('.q5_5').click(function () {
    $(lb).css({
      'backgroundColor': '#fff',
      'color': '#434647'
    });
    $(this).css({
      'backgroundColor': '#ffff00',
      'color': '#434647'
    });
    $('.form-q6,.form-q7').hide();
    $('.form-q8').fadeIn();
  });

  $('.q5_6').click(function () {
    $(lb).css({
      'backgroundColor': '#fff',
      'color': '#434647'
    });
    $(this).css({
      'backgroundColor': '#bbff00',
      'color': '#fff'
    });
    $('.form-q6,.form-q7').hide();
    $('.form-q8').fadeIn();
  });

  $('.q5_7').click(function () {
    $(lb).css({
      'backgroundColor': '#fff',
      'color': '#434647'
    });
    $(this).css({
      'backgroundColor': '#73ff00',
      'color': '#fff'
    });
    $('.form-q6,.form-q8').hide();
    $('.form-q7').fadeIn();
  });

  $('.q5_8').click(function () {
    $(lb).css({
      'backgroundColor': '#fff',
      'color': '#434647'
    });
    $(this).css({
      'backgroundColor': '#1dfc00',
      'color': '#fff'
    });
    $('.form-q6,.form-q8').hide();
    $('.form-q7').fadeIn();
  });

  $('.q5_9').click(function () {
    $(lb).css({
      'backgroundColor': '#fff',
      'color': '#434647'
    });
    $(this).css({
      'backgroundColor': '#00ff2a',
      'color': '#fff'
    });
    $('.form-q7,.form-q8').hide();
    $('.form-q6').fadeIn();
  });

  $('.q5_10').click(function () {
    $(lb).css({
      'backgroundColor': '#fff',
      'color': '#434647'
    });
    $(this).css({
      'backgroundColor': '#00ff40',
      'color': '#fff'
    });
    $('.form-q7,.form-q8').hide();
    $('.form-q6').fadeIn();
  });






  $(".q2-6,.q3-6,.q4-6").click(function () {

    if ($("#q2-6").is(':checked')) {

      $('.q2-7').slideDown();
    } else

      $('.q2-7').slideUp();



    if ($("#q3-6").is(':checked')) {

      $('.q3-7').slideDown();

    } else $('.q3-7').slideUp();

    if ($("#q4-6").is(':checked')) {

      $('.q4-7').slideDown();
    } else $('.q4-7').slideUp();
  });

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