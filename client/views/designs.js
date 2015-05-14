Template.designs.rendered = function() {
	$(document).foundation('reflow');
	$('.overlay').addClass('dim');
	$('.overlay-color').removeClass('green');
	$('.overlay-color').addClass('brown');
	$('.name').removeClass('active');
	$('.top-bar a').addClass('dimmed');
	$('.top-bar ul > li').addClass('dimmed');
	$('a').removeClass('active-lt');
	$("a[href='/designs']").addClass('active-lt');

	

};

