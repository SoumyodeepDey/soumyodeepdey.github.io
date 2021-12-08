/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', './src/particles.json', function() {
    //console.log('callback - particles.js config loaded');
  });


  /* Responsive nav bar */
  $(document).ready(function(){
    $('#res-nav').click(function(){
      $('#res-nav-container').css('width','100%');
      setTimeout(function(){
        $('.res-nav-bar a').css('opacity','1');
      }, 500)
    });
    $('#close').click(function(){
      $('.res-nav-bar a').css('opacity','0');
      setTimeout(function(){
        $('#res-nav-container').css('width','0px');
      }, 500)
    });
    $('.res-nav-bar a').click(function(){
      $('.res-nav-bar a').css('opacity','0');
      $('.nav-bar').css('margin-top','-50px');
      setTimeout(function(){
        $('#res-nav-container').css('width','0px');
      }, 500)
    });

    /* Always nav bar */
    $(document).on('scroll',function(){
      $('.nav-bar').css('margin-top','0px');
      setTimeout(function(){
        $('.nav-bar').css('margin-top','-50px');
      },5000);
    });

    /* Smooth scroll to div */
    $('.nav-container a').on('click', function(e){
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000)
      $('.nav-container a').removeClass('active');
      $(this).addClass('active');
    })
  })