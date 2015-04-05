Template.furniture.rendered = function(){
	$('.overlay').addClass('dim');
	$('.overlay-color').removeClass('green');
	$('.overlay-color').addClass('brown');
	$('.name').removeClass('active');
	$('.top-bar a').addClass('dimmed');
	$('.top-bar ul > li').addClass('dimmed');
	$('a').removeClass('active-lt');
	$("a[href='/furniture']").addClass('active-lt');

	var h = ($(window).height() * 0.8);
	
	$('.md-panel').css('height', h);

	var w = ($('.center-panel').width());
	$('.featured').css('width', w);

	$('#accordion').accordion();
};

Template.furniture.helpers({
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

Template.furniture.events({
	'click img': function(event) {
		$('.featured').css('top', 0);
		$('.featured').css('left', 0);
		$('img.featured').attr("src", this.large);
		$('p.name').text(this.name);
		$('p.dimensions').text(this.dimensions);
		$('p.stock').text(this.stock);
		$('p.description').text(this.description);

		var w = ($('.center-panel').width());
		$('.featured').css('width', w);
	}
});