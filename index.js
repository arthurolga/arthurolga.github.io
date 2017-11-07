$(document).ready(function() {

    $(".button-collapse").sideNav({
        closeOnClick: true,
    });
    
    var slider = $('.slider').slider(
        {interval:5000,
        }
    );
    $('.parallax').parallax(); 
    
    var scroll= $('.scrollspy').scrollSpy(); 
});

