Template.shop.rendered = function() {
	$(document).foundation('reflow');
	$('.overlay').addClass('dim');
	$('.overlay-color').removeClass('brown');
	$('.overlay-color').addClass('green');
	$('.name').removeClass('active');
	$('.top-bar a').addClass('dimmed');
	$('.top-bar ul > li').addClass('dimmed');
	$('a').removeClass('active-lt');
	$("a[href='/shop']").addClass('active-lt');

	var h = ($(window).height() * 0.8);
	
	$('.md-panel').css('height', h);
}