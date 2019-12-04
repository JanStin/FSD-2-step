import './like-button.sass'

$(function(){
    $('.like-button').click(function (e, changeState) {
        if (changeState === undefined) {
            $(this).toggleClass('like-button-on');
        }
        if ($(this).hasClass('like-button-on')) {
            $(this).trigger('on.likeButton');

            let e = $(this).children('like-button__like');
            console.log(e);
        } else {
            $(this).trigger('off.likeButton');
        }
    });

    $('like-button').on('on.likeButton', function () {
        $(this).addClass('like-button-on');
    });
    $('like-button').on('off.likeButton', function () {
        $(this).removeClass('like-button-on');
    });
    
});