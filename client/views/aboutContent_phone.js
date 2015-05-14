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
		$('.about-cat').hide();
		$('#bio').show();
		
	},
	'click #ui-id-2': function() {
		$('.about-cat').hide();
		$('#name').show();
	},
	'click #ui-id-3': function() {
		$('.about-cat').hide();
		$('#inspiration').show();
	},
	'click #ui-id-4': function() {
		$('.about-cat').hide();
		$('#construction').show();
	},
	'click #ui-id-5': function() {
		$('.about-cat').hide();
		$('#philosophy').show();
	}
})