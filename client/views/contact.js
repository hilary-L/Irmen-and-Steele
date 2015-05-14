Session.setDefault("sentEmail", 0);

Template.contact.rendered = function() {
	$(document).foundation('reflow');
	$('.overlay').addClass('dim');
	$('.overlay-color').removeClass('green');
	$('.overlay-color').addClass('brown');
	$('.name').removeClass('active');
	$('.top-bar a').addClass('dimmed');
	$('.top-bar ul > li').addClass('dimmed');
	$('a').removeClass('active-lt');
	$("a[href='/contact']").addClass('active-lt');

	var h = ($(window).height() * 0.83);
	
	$('.md-panel').css('height', h);


}

Template.contact.events({
	'click input#contact_submit': function(event){
		event.preventDefault();
		
		Session.set("sentEmail", Session.get("sentEmail") + 1);

		if(Session.get("sentEmail") <= 3) {

			var name = $('input[id="Name"]').val();
			var from = $('input[id="Email"]').val();
			var subject = $('input[id="Subject"]').val();
			var custom = $('input[id="Custom"]').val();
			var text = $('textarea').val();

			Meteor.call('sendEmail', name, from, subject, custom, text, function(error, result) {

				if(error) {

					$('.no-hover').append("<p class='success-text' style='text-align: center'>Error! " + error + "</p>");
					$('.no-hover input[type="submit"]').css("background-color", "#f9caca");

					setTimeout(function() {
						$('.success-text').hide();
						$('.no-hover input[type="submit"]').css("background-color", "transparent");
					}, 1000);
				}
				else {

					$('.no-hover').append("<p class='success-text' style='text-align: center'>Email sent!</p>");
					$('.no-hover input[type="submit"]').css("background-color", "#d3f9ca");

					setTimeout(function() {

						$('.success-text').hide();
						$('.no-hover input[type="submit"]').css("background-color", "transparent");

					}, 1000);

				}
		

			});

		}
		else {

			$('.no-hover').append("<p class='success-text' style='text-align: center'>Send failed. Too many emails sent.</p>");
			$('.no-hover input[type="submit"]').css("background-color", "#f9caca");

			setTimeout(function() {

				$('.success-text').hide();
				$('.no-hover input[type="submit"]').css("background-color", "transparent");
			}, 1000);
		}
		
		
	}
})