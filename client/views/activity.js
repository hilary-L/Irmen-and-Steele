Template.activity.rendered = function(){
	$('.overlay').addClass('dim');
	$('.overlay-color').removeClass('brown');
	$('.overlay-color').addClass('green');
	$('.name').removeClass('active');
	$('.top-bar a').addClass('dimmed');
	$('.top-bar ul > li').addClass('dimmed');
	$('a').removeClass('active-lt');
	$("a[href='/activity']").addClass('active-lt');

	var h = ($(window).height() * 0.8);
	
	$('.md-panel').css('height', h);

	Meteor.call('getInsta', function(error, result) {
		console.log('returned from method');
		console.log(error);
		console.log(result);

		for(i=0; i<result.data.data.length; i++) {
			var src = result.data.data[i].images.standard_resolution.url;
			var caption = (result.data.data[i].caption.text).replace('#irmenandsteele', '');
			var likes = result.data.data[i].likes.count;
			
			$('.activity-list').append('<li><img src=' + src + '><p><i class="fi-heart"></i> ' + likes +'<p>'+ caption + '</p></li>');
		}
	});

};