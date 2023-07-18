(function($){
    'use strict';

$('.waxon_menu_icon i.fa-bars').on('click', function(){
    $('.waxon_nav ul').animate({left: 0});
    $(this).hide();
    $('.waxon_menu_icon i.fa-xmark').show();
})
$('.waxon_menu_icon i.fa-xmark').on('click', function(){
    $('.waxon_nav ul').animate({left: -250});
    $(this).hide();
    $('.waxon_menu_icon i.fa-bars').show();
})

// isotope

$(document).ready(function ($) {
    setTimeout(function(){ 
              // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
    var $grid = $('.grid').isotope({
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use element for option
        columnWidth: '.grid-item'
      }
    });
         }, 1000);
    });

    $('.waxom_project_buttons button').on('click', function(){
        $('.waxom_project_buttons button').removeClass('active');
        $(this).addClass('active');
    })

    // venobox

    new VenoBox();


})(jQuery);