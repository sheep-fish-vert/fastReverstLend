$(document).ready(function() {

	$('#lightSlider').lightSlider({
		gallery: true,
		item: 1,
		loop: true,
		slideMargin: 0,
		thumbItem: 4
	});

    function modalHide(){
        $('.menu .btn-menu').click(function() {
            if( $('body').is('.modal-open') ){
                console.log('go');
                $('#modal-call-form').modal('hide');
            }
        });
    }
    modalHide();
});