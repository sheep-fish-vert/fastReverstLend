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

    function modalHide(){
        $('.menu .btn-menu').click(function() {
            if( $('body').is('.modal-open') ){
                $('#modal-call-form').modal('hide');
            }
        });
    }
    modalHide();
});