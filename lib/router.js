Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('home', {path: '/'});
	this.route('furniture', {path: '/furniture'});
	this.route('about', {path: '/about'});
	this.route('activity', {path: '/activity'});
	this.route('designs', {path: '/designs'});
	this.route('shop', {path: '/shop'});
	this.route('contact', {path: '/contact'});
});