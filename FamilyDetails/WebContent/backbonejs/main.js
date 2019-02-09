
/*global require*/

require.config({
	 waitSeconds: 0,
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery',
				'bootstrap'
			],
			exports: 'Backbone'
		},
		bootstrap:{
			deps:['jquery'],
			exports : 'Bootstrap'
		},
		backboneLocalstorage: {
			deps: ['backbone'],
			exports: 'Store'
		},
			},
	paths: {
		underscore: '../node_modules/underscore/underscore',
		jquery: '../node_modules/jquery',
		underscore: '../node_modules/underscore/underscore',
		text: '../node_modules/requirejs-text/text',
		backbone: '../node_modules/backbone/backbone',
		bootstrap:'../node_modules/bootstrap/bootstrap.min',
		backboneLocalstorage: '../node_modules/backbone/backbone.localStorage',
	}
});

require([
	'backbone',
	'jquery',
	'router/router'
], function (Backbone,$, Workspace) {
	new Workspace();
	Backbone.history.start();
});
