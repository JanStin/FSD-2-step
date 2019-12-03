import './toggle.sass';
$(function(){
    $('.toggle').click(function (e, changeState) {
        if (changeState === undefined) {
            $(this).toggleClass('toggle-on');
        }
        if ($(this).hasClass('toggle-on')) {
            $(this).trigger('on.toggle');
        } else {
            $(this).trigger('off.toggle');
        }
    });

    $('.toggle').on('on.toggle', function(){
        console.log('Кнопка переключена в состояние on');
    });
    
    $('.toggle').on('off.toggle', function(){
        console.log('Кнопка переключена в состояние off');
    });

    $('.toggle').each(function(){
        $(this).triggerHandler('click', false);
    });
    
});