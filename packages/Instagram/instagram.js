Instagram = {};

Instagram.getPhotos = function() {

	var tag = 'irmenandsteele';
	var accessToken = Meteor.settings.instagram;

	var url = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent';

	var instagramResponse = Meteor.http.get(
		url,
		{
			timeout: 5000,
			params: {
					access_token: accessToken,
			}

		}
	);

	console.log('about to return');
	console.log(instagramResponse);
	console.log('logged response.');
	return instagramResponse;
	

}

