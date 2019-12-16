$(document).ready(function() {
    
    writeAmenity($('#amenity'));

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

        writeAmenity($('#amenity'));
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

        writeAmenity($('#amenity'));  
    });

    
    function writeAmenity(id) {
        // Получаем дочерние элементы.
        let child = id.find('.dropdown__count');
        // Переменная для ввода в текстовое поле.
        let amenity = '';

        // Цикл и доп. переменная для него.
        let i = 0;
        $.each(child, function() {
            // Определение позиции и её запись с полученным значением в переменую для ввода.
            switch (i) {
                case 0:
                    amenity += `${this.textContent} спальни`;
                    break;
                // В макете стоят многоточия, следовательно даже если в кол-ве позиции стоит 0 - всё равно указывается.
                case 1:
                    amenity += `, ${this.textContent} кровати`;
                    break;
                case 2:
                    amenity += `, ${this.textContent} ванные комнаты`;
                    break;
            }
            i++;
        })

        // Ищем дочерний элемент и подставляем в него значения.
        let pole = id.find('.dropdown__text');
        pole.text(amenity);
    }
});