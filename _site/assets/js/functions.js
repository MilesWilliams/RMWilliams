$(function(){
  smoothScroll(500);
  workBelt();
  workLoad();
  $(".container .heading ").fitText(1, { minFontSize: '20px', maxFontSize: '86px'});
});

function smoothScroll(duration){
  $('a[href^="#"]').on('click', function(event){

    var target = $( $(this).attr('href'));

    if (target.length) {
      event.preventDefault();
      $('html,body').animate({
        scrollTop: target.offset().top - ($(window).height()* 0.035)
      }, duration);

    }
  });
}

function workBelt(){
  $('.icon').click(function(){
    $('.belt').css('left', '-100%');
    $('.about-container').show();
  });

  $('.work-return').click(function(){
    $('.belt').css('left', '0%');
    $('.about-container').hide(800);
  })
}

function  workLoad(){

  $.ajaxSetup({ cache: false});

  $('.icon').click(function() {

    var $this = $(this),
        spinner = '<div class="loader">Loading...</div>',
        newfolder = $this.data('folder');
        newHTML = 'work/'+ newfolder +'.html';
    $('.project-load').html(spinner).load(newHTML);


  });

}



$(window).scroll(function() {

  var wScroll = $(this).scrollTop();

  $('.container').css({
    'transform' : 'translate(0px, '+ wScroll /10 +'%)'
  });

  $('.content').css({
    'transform' : 'translate(0px, '+ wScroll /7 +'%)'
  });

  if(wScroll > $('.face-lockup').offset().top - ($(window).height() / 1.2)) {

  		$('.face-lockup div').each(function(i) {

        setTimeout(function(){
  			$('.face-lockup div').eq(i).addClass('is-showing');
      }, 100 * (i+1));
  		});


}

if(wScroll > $('#contact').offset().top - ($(window).height() / 1.4)) {

    $('.social-lockup div').each(function(i) {

      setTimeout(function(){
      $('.social-lockup div').eq(i).addClass('is-showing');
    }, 150 * (i+1));
    });


}

  if(wScroll > $('.title').offset().top) {

  		$('.hiding').each(function() {
  			$('.hiding').removeClass('hiding');

  		});


}



if(wScroll < $('.title').offset().top) {

    $('#nav').each(function() {


      $('#nav').addClass('hiding');

    });


}

if(wScroll > $('.slide5').offset().top - $(window).height()){

  var offset = wScroll -  $('.slide5').offset().top +$(window).height()-200;

  $('.jumper').css({'transform': 'translate(200px, -'+ offset +'px)'});
}

});

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );
