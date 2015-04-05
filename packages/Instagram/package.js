Package.describe({
	summary: "Instagram package",
	version: "0.1.0",
	name: "instagram"
});

Package.onUse(function (api) {
	api.addFiles('instagram.js', 'server');
	api.export('Instagram');
});