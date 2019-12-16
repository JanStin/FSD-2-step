$(document).ready(function() {
    $(".dropdown__button").next().slideToggle();

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

        // Проверка на наличие родителя.
        if ($(this).parents('.amenity').length > 0) {
            let dataId = ($(this).parents('.amenity').data('id'));
            parent = $('.amenity[data-id=' + dataId + ']');
            writeAmenity(parent); 
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

        // Проверка на наличие родителя.
        if ($(this).parents('.amenity').length > 0) {
            let dataId = ($(this).parents('.amenity').data('id'));
            parent = $('.amenity[data-id=' + dataId + ']');
            writeAmenity(parent); 
        }
    });

    
    function writeAmenity(id) {
        // Получаем дочерние элементы.
        let child = id.find('.dropdown__count');
        // Переменная для ввода в текстовое поле.
        let text = '';

        // Цикл и доп. переменная для него.
        let i = 0;
        $.each(child, function() {
            // Определение позиции и её запись с полученным значением в переменую для ввода.
            switch (i) {
                case 0:
                    text += `${this.textContent} спальни`;
                    break;
                // В макете стоят многоточия, следовательно даже если в кол-ве позиции стоит 0 - всё равно указывается.
                case 1:
                    text += `, ${this.textContent} кровати`;
                    break;
                case 2:
                    text += `, ${this.textContent} ванные комнаты`;
                    break;
            }
            i++;
        })

        // Обрезка текста.
        if (text.length > 20)
        {
            text = text.substr(0, 20);
            text += '...';
        }

        // Ищем дочерний элемент и подставляем в него значения.
        let pole = id.find('.dropdown__text');
        pole.text(text);
    }
});

function lol() {
    alert('lol');
}