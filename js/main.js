    $(document).ready( function() {
    	$('.subMenu').smint({
    		'scrollSpeed' : 1000
    	});
    });

    $(window).scroll(function(){
    	$(".fade").css("opacity", 1 - $(window).scrollTop() / 350);
    	$(".show").css("opacity", $(window).scrollTop() / 250 - 1);
    });


