(function( $ ) {

  $.fn.PieMenu = function(options) {
    return $(this).each(function () {
      //// Initialization
      // Default Settings
      var settings = $.extend( {
          starting_angel: '0',
          angel_difference: '90',
          radius: '200',
          menu_elements: $(this).children('.menu_option').children(),
          menu_button : $(this).children('.menu_button'),
        }, options);

      // Local Arguments
      var angle_between_elements = parseInt(settings.angel_difference)/(settings.menu_elements.length-1),
        menu_element_angle = [],
        x_pos = [],
        y_pos = [];

      // Initial Values
      settings.menu_elements.each(function(i, raw_element) {
        var menu_element = $(raw_element);

        // Calculate the button positions
        menu_element_angle[i] = (parseInt(settings.starting_angel) + angle_between_elements * i) * Math.PI/180;
        x_pos[i] = (parseInt(settings.radius) * Math.sin(menu_element_angle[i]));
        y_pos[i] = (parseInt(settings.radius) * Math.cos(menu_element_angle[i]));
         
        // Calculatate 
        var rotate_transform = 'rotate('+(90-menu_element_angle[i]*180/Math.PI)+'deg)';
        menu_element.css({
          '-webkit-transform': rotate_transform,
          '-moz-transform': rotate_transform,
          '-ms-transform': rotate_transform,
          '-o-transform': rotate_transform,
          'transform': rotate_transform
        });
      });

      //// Helper Functions
      // Sets the menu position to either the origin, or the calculated position
      function setPosition(origin){
        $(settings.menu_elements).each(function(i, raw_element){
          var menu_element = $(raw_element);

          // Show the menu elements before opening them
          if(!origin)
            $(menu_element).css({display: 'block'});

          // Animate the menu elements
          menu_element.css({
            left: (origin) ? 0 : y_pos[i],
            top: (origin) ? 0 : -x_pos[i],
            opacity: (origin) ? 0.0 : 1.0,
          }).one('transitionEnd', function () {
            // Hide the menu elementrs after closing them
            if(origin) 
              $(menu_element).css({display: 'none'});
          });
        });
      }
      
      //// Menu Operation
      var clickHandler = function() {
        var button = $(this),
            button_container = button.parent();


        if(button_container.hasClass('active')) {
          // Close the menu
          setPosition(true);
          button_container.removeClass('active').addClass('inactive');;
        } else {
          // Open the menu
          setPosition(false);
          button_container.removeClass('inactive').addClass('active');
        }

        // Rotate the button
        $(this).toggleClass("btn-rotate");
      };

      // Ensure click handler is configured
      $(settings.menu_button).unbind('click', clickHandler);  // I don't think this will work
      $(settings.menu_button).bind('click', clickHandler);
    });
  };
})( jQuery );