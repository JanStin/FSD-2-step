$(document).ready(function(){
    $(".dropdown__button").click(function() {
        $(this).next().slideToggle();
    });

    $(".minus").click(function() {
        let count = $(this).parent().find($('.dropdown__count')).text();
        count = parseInt(count);
        if (count > 0) {
            $(this).parent().find($('.dropdown__count')).text(--count);
        }
    });

    
    $(".plus").click(function() {
        let count = $(this).parent().find($('.dropdown__count')).text();
        count = parseInt(count);
        $(this).parent().find($('.dropdown__count')).text(++count);
    });
});