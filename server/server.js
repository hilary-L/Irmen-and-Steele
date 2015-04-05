Meteor.methods({
	'getInsta': function() {
		return Instagram.getPhotos();
	}
});