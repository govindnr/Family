define([
   'jquery',
   'backbone',
   'views/loginvalidation'    
    ],function($,BackBone,LoginForm){
	'use strict';
	
	var router = Backbone.Router.extend({
		
		routes : {
		'':'welcomeuser',
		'familyDetails/newuser':'newuser',
		
		},
		initialize:function(){
			this.navigatedfrom();
		},
		navigatedfrom:function(){
			var history = [];
			this.listenTo(this, 'route', function (name, args) {
			  history.push({
				fragment : Backbone.history.fragment
			  });
			  if(history.length>1){
				  var previousvalue=history[history.length - 2].fragment.split("/")[0];
				  sessionStorage.setItem("previousurl",previousvalue);
			  }	  
			});	
		},
		welcomeuser:function(e){
			
			require(['views/welcomeuser'],function(WelcomeUser){
				new WelcomeUser();
			});
		},
		newuser:function(e){
			
			require(['views/newuser'],function(NewUser){
				new NewUser();
			});
		}
	});
	return router;
	
});




