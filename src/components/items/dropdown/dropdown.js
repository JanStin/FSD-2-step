$(document).ready(function(){
    $(".dropdown__button").click(function() {
        $(this).next().slideToggle();
    });

    $(this).click(function() {
        if ($(this).hasClass("minus"))
            alert('-');
    });
});