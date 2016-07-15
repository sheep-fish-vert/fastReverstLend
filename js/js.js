$(document).ready(function() {

    $('.lightSlider').each(function(){

        $(this).lightSlider({
            gallery: true,
            item: 1,
            loop: true,
            slideMargin: 0,
            thumbItem: 4
        });

    });


});