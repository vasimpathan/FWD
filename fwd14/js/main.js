jQuery(function($) {'use strict',

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});


	// accordian
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
		$(this).find('>.panel-heading').removeClass('active');
		 });

	 	$(this).closest('.panel-heading').toggleClass('active');
	});

	//Initiat WOW JS
	new WOW().init();

	// portfolio filter
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});
		
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),

			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
		});
	});

	
	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	
});

//Account Drop Down
	$(document).ready(function(e){
    $('#acc_drop .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
		$('#acc_drop span#search_concept').text(concept);
	
	});
});


// travel plan

// PANELS


  $('.fwdpanel-minimize').click(function(e){
    e.preventDefault();
    var $target = $(this).parent().parent().parent().next('.fwdpanel-body');
    if($target.is(':visible')) {

     $('i',$(this)).removeClass('fa-minus').addClass('fa-plus'); 

    }
    else {

        $('i',$(this)).removeClass('fa-plus').addClass('fa-minus');
      }

    $target.slideToggle();
  });


/*on focus input Placeholder hide*/

$('input[placeholder]').on('focus',function(){
    var $this = $(this);
    $this.data('placeholder',$this.prop('placeholder'));
    $this.removeAttr('placeholder')
}).on('blur',function(){
    var $this = $(this);
    $this.prop('placeholder',$this.data('placeholder'));
});


//Scroll top  Get more link 
$(document).ready(function(){
  
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  
  //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},400);
    return false;
  });
  
});
/// Auto fill inputbox on  travel plan details
$("#inputFullName").keyup(function() {
   document.getElementById("inputFullName1").value = this.value;
});
$("#txtAppHkid").keyup(function() {
   document.getElementById("txtInsuHkid").value = this.value;
});



