Template.aboutContent_phone.rendered = function() {

	$('#about-menu').selectmenu({
		appendTo: null
		
	});

	$('#name').hide();
	$('#inspiration').hide();
	$('#construction').hide();
	$('#philosophy').hide();

}

Template.aboutContent_phone.events({
	'click #ui-id-1': function() {
		var text = $('#ui-id-1').text();
		$('.about-cat').hide();
		$('#bio').show();
		$('.ui-selectmenu-text').text(text);
		
	},
	'click #ui-id-2': function() {
		var text = $('#ui-id-2').text();
		$('.about-cat').hide();
		$('#name').show();
		$('.ui-selectmenu-text').text(text);
	},
	'click #ui-id-3': function() {
		var text = $('#ui-id-3').text();
		$('.about-cat').hide();
		$('#inspiration').show();
		$('.ui-selectmenu-text').text(text);
	},
	'click #ui-id-4': function() {
		var text = $('#ui-id-4').text();
		$('.about-cat').hide();
		$('#construction').show();
		$('.ui-selectmenu-text').text(text);
	},
	'click #ui-id-5': function() {
		var text = $('#ui-id-5').text();
		$('.about-cat').hide();
		$('#philosophy').show();
		$('.ui-selectmenu-text').text(text);
	}
})