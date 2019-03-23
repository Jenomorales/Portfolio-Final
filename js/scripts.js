// Everything OK?

// Hide Lightbox
// $('#lightbox').hide();

// Show Lightbox
$('a').click( function( event ){

    // Hijack the Click
    event.preventDefault();
  
    console.log('OK');
    // Show Lightbox
    $('#lightbox').toggleClass('showLightbox');
  
});


$('#lightbox').click(function(){
  
   $('#lightbox').toggleClass('showLightbox');
      
});
