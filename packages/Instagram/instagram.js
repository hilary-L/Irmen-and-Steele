Instagram = {};

Instagram.getPhotos = function() {

	var tag = 'irmenandsteele';
	var accessToken = "55413140.25c2e3b.7dc65f2a7d6544468f2a7cde88c59504";

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

