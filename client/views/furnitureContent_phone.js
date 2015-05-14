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
		
		$('.furniture-cat').hide();
		$('#dining').show();
		
	},
	'click #ui-id-2': function() {
		
		$('.furniture-cat').hide();
		$('#living').show();
	},
	'click #ui-id-3': function() {
		
		$('.furniture-cat').hide();
		$('#kitchen').show();
	},
	'click #ui-id-4': function() {
		
		$('.furniture-cat').hide();
		$('#office').show();
	}
})