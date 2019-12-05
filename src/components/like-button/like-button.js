import './like-button.sass'

$(function(){
    $('.like-button').click(function (e, changeState) {
        if (changeState === undefined) {
            $(this).toggleClass('like-button-on');
        }
        if ($(this).hasClass('like-button-on')) {
            $(this).trigger('on.likeButton');

            $(this).find($('.like-button__like')).text('favorite');
            let count = $(this).find($('.like-button__count')).text();
            count = parseInt(count);
            $(this).find($('.like-button__count')).text(++count);

        } else {
            $(this).trigger('off.likeButton');

            $(this).find($('.like-button__like')).text('favorite_border');
            let count = $(this).find($('.like-button__count')).text();
            count = parseInt(count);
            $(this).find($('.like-button__count')).text(--count);
        }
    });


    $('like-button').on('on.likeButton', function () {
        $(this).addClass('like-button-on');
    });
    $('like-button').on('off.likeButton', function () {
        $(this).removeClass('like-button-on');
    });
    
});