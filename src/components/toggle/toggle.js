import './toggle.sass';
$(function(){
    $('.toggle').click(function (e, changeState) {
        // Если нет класса у объекта, то ему он присваевается.
        if (changeState === undefined) {
            //Булевая переменная по типу false/true.
            $(this).toggleClass('toggle-on');
        }

        // Переключение свойства.
        if ($(this).hasClass('toggle-on')) {
            $(this).trigger('on.toggle');
        } else {
            $(this).trigger('off.toggle');
        }
    });

    // Реализация переключения.
    $('.toggle').on('on.toggle', function () {
        $(this).addClass('toggle-on');
    });
    $('.toggle').on('off.toggle', function () {
        $(this).removeClass('toggle-on');
    });
    
});