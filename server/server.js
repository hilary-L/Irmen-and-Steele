Meteor.methods({
	'getInsta': function() {
		return Instagram.getPhotos();
	},
	'sendEmail': function(name, from, subject, custom, text) {
		check([name, from, subject, custom, text], [String]);
		this.unblock();

		var emailText = 'From: ' + name + '\n' + 'Custom order type: ' + custom + '\n' + text;

		Email.send({
			to: 'irmenandsteele@gmail.com',
			from: from,
			subject: subject,
			text: emailText
		});
	}
});
