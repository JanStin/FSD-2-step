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
        if (count == 0) {
            $(this).removeClass('dropdown__circle');
            $(this).addClass('dropdown__circle_inactive');
        }  
    });

    
    $(".plus").click(function() {
        let count = $(this).parent().find($('.dropdown__count')).text();
        count = parseInt(count);
        $(this).parent().find($('.dropdown__count')).text(++count);
        if (count == 1) {
            let minus = $(this).parent().find($('.minus'));
            minus.removeClass('dropdown__circle_inactive');
            minus.addClass('dropdown__circle');
        }  
    });
});