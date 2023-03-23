// event pada saat link di klik 
$('.page-scroll').on('click', function(e) {

 var tujuan = $(this).attr('href');

 var elemenTujuan = $(tujuan);

 $('html , body').animate({
  scrollTop: elemenTujuan.offset().top - 50
 }, 900, 'easeInOutExpo');

 e.preventDefault();
});




// parallax
// about
$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});


$(window).scroll(function(){
	var wscroll = $(this).scrollTop();

	// jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wscroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wscroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wscroll/1.2 +'%)'
	});

	// porfolio
	if( wscroll > $('.porfolio').offset().top -250 ) {
		$('.porfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.porfolio .thumbnail').eq(i).addClass('muncul');

			}, 400 * (i+1));

		});


		// $('.porfolio .thumbnail').addClass('muncul');
	}


});