define(['jquery',
        'underscore',
        'backbone',
        'text!templates/welcomeusertemplate.html'
        ],function($,_,Backbone,WelcomeUserTemplate){
	
	var welcomeUserView = Backbone.View.extend({
		
		el:'body',
		
		events : {
			"click #welcomeuser" : "welcomeuser",
			"click #newuser" : "newuser"
		},
		
		initialize : function(options){
			this.options = options;
			this.template = _.template(WelcomeUserTemplate);
		},
		welcomeuser : function(e){
			var $this = e.currentTarget;
			e.preventDefault();
			var href = $($this).attr("href");
			var path = Backbone.history.location.href;
			Backbone.history.navigate(href,true);
			$('#welcomeuser').hide();
			this.$el.append(this.template());
			
		},
		newuser:function(e){
			var $this = e.currentTarget;
			e.preventDefault();
			var href = "newuser";
			Backbone.history.navigate("familyDetails/"+href,true);
			$('#loginpage').hide()
		}
		
	});
	return welcomeUserView;
	
});