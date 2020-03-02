$(document).ready(function () {
    $('.q2-7,.q3-7,.q4-7,.form-q2,.form-q3,.form-q4').hide();
    var bl = $('div[class^="q1_"]');

    $(bl).click(function () {
        $(bl).css({
            'backgroundColor': '#fff',
            'color': '#434647'
        })
        $(bl).removeClass('active');

        var col = $(this).css('border-color');
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
                $('.form-q4').show();
                break;

            case (num <= 8):
                $('.form-q2,.form-q4').hide();
                $('.form-q3').show();
                break;

            case (num >= 9):
                $('.form-q3,.form-q4').hide();
                $('.form-q2').fadeIn();
                break;

            default:
                $('.form-q2,.form-q3,.form-q4').show();
        }

    })

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

});