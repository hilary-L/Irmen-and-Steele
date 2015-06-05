Template.layout.events({
	'click li.toggle-topbar': function() {
		$('.top-bar-section').toggleClass('expanded');
	},
	'click .right > li.dimmed': function() {
		$('.top-bar').removeClass('expanded');
		$('.top-bar-section').removeClass('expanded');
	}
})

Template.layout.rendered = function() {

	Meteor.Device.setTabletSuffix('_phone');
}

