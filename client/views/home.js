Template.home.rendered = function() {
	$('.overlay').removeClass('dim');
	$('.overlay-color').removeClass('brown');
	$('.overlay-color').removeClass('green');
	$('.top-bar a').removeClass('dimmed');
	$('.top-bar ul > li').removeClass('dimmed');
	$('a').removeClass('active-lt');
	$('.name').addClass('active');
};