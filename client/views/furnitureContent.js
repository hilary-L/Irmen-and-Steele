Template.furnitureContent.helpers({
	living: function() {
		return Pieces.find({category: 'Living'});
	},
	kitchen: function() {
		return Pieces.find({category: 'Kitchen'});
	},
	dining: function() {
		return Pieces.find({category: 'Dining'});
	},
	office: function() {
		return Pieces.find({category: 'Office'});
	}

});

Template.furnitureContent.rendered = function() {

	var h = ($(window).height() * 0.8);
	
	$('.md-panel').css('height', h);

	var w = ($('.center-panel').width());
	$('.featured').css('width', w);


}