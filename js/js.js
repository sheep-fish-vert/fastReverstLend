$(document).ready(function() {

    /*
	$('.lightSlider').each(function(){

        $(this).lightSlider({
            gallery: true,
            item: 1,
            loop: true,
            slideMargin: 0,
            thumbItem: 4
        });

    });
    */

    $('.block_2_2').each(function(index){

        $(this).find('.slide_big').addClass('slide_main_'+index);
        $(this).find('.slide_small').addClass('slide_submain_'+index);
        var mainClass = '.slide_main_'+index;
        var submainClass = '.slide_submain_'+index;

        $(this).find('.slide_main_'+index).slick({
            slidesToShow:1,
            slidesToShow:1,
            arrows:false,
            fade:true,
            asNavFor:submainClass,
            draggable:false
        });

        $(this).find('.slide_submain_'+index).slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: mainClass,
            dots: false,
            arrows: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow:2
                    }
                },
                {
                    breakpoint:480,
                    settings:{
                        slidesToShow:1
                    }
                }
            ]
        });

    });

    function modalHide(){
        $('.menu .btn-menu').click(function(event) {
            //event.preventDefault();

             console.log('go');
            if( $('body').is('.modal-open') ){
                $('.menu input[type="checkbox"]').prop('checked', 'false');
                console.log('is(.modal-open)');
                $('#modal-call-form').modal('hide');
            }
        });
    }
    modalHide();
});