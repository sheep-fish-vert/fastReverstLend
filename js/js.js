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