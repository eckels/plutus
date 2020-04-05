var maxHeight = 0;
$( document ).ready(function() {
    $('.smooth').smoothScroll();
    $(".card-content").each(function() {
        var temp = $(this).height();
        if (maxHeight < temp) {
            maxHeight = temp;
        }
    });
    if ($(window).width() > 700) {
        $('.card-content').css('height', maxHeight);
    }
});

$(window).resize(function() {
    maxHeight = 0;
    $(".card-content").each(function() {
        var temp = $(this).height();
        if (maxHeight < temp) {
            maxHeight = temp;
        }
    });
    if ($(window).width() > 700) {
        $('.card-content').css('height', maxHeight);
    }
});