Instagram = {};

Instagram.getPhotos = function() {

	var tag = 'irmenandsteele';
	var accessToken = Meteor.settings.instagram;

	var url = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent';

	var instagramResponse = Meteor.http.get(
		url,
		{
			timeout: 10000,
			params: {
					access_token: accessToken,
			}

		}
	);

	return instagramResponse;
	

}

