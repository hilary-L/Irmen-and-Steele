Template.furnitureContent_phone.helpers({
	living: function() {
		return PiecesMobile.find({category: 'Living'});
	},
	kitchen: function() {
		return PiecesMobile.find({category: 'Kitchen'});
	},
	dining: function() {
		return PiecesMobile.find({category: 'Dining'});
	},
	office: function() {
		return PiecesMobile.find({category: 'Office'});
	}

});


Template.furnitureContent_phone.rendered = function() {

	$('#furniture-menu').selectmenu({
		appendTo: null
		
	});
	$('#living').hide();
	$('#kitchen').hide();
	$('#office').hide();
}

Template.furnitureContent_phone.events({
	'click #ui-id-1': function() {
		
		var text = $('#ui-id-1').text();


		$('.furniture-cat').hide();
		$('#dining').show();
		$('.ui-selectmenu-text').text(text);
		
	},
	'click #ui-id-2': function() {
		
		var text = $('#ui-id-2').text();

		$('.furniture-cat').hide();
		$('#living').show();
		$('.ui-selectmenu-text').text(text);
	},
	'click #ui-id-3': function() {

		var text = $('#ui-id-3').text();
		
		$('.furniture-cat').hide();
		$('#kitchen').show();
		$('.ui-selectmenu-text').text(text);
	},
	'click #ui-id-4': function() {

		var text = $('#ui-id-4').text();
		
		$('.furniture-cat').hide();
		$('#office').show();
		$('.ui-selectmenu-text').text(text);
	}
})