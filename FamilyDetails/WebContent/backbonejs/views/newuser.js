define(['jquery',
        'underscore',
        'backbone',
        'text!templates/newusertemplate.html'
        ],function($,_,BackBone,NewUserTemplate){
	
	var newUserView = Backbone.View.extend({
		
		el:'#newuserpage',
		
		events : {
			"click #addnewuser"  : "adduser"
		},
		initialize : function(options){
			this.options = options;
			this.template = _.template(NewUserTemplate);
			this.render();
		},
		render : function(){
			$('#newuserpage').attr("style", "display: show;");
			this.$el.append(this.template);
		},
		adduser : function(e){
			obj={};
			obj['fname'] = $("#fname").val();
			obj['lname'] = $("#lname").val();
			obj['username'] = $("#username").val();
			obj['password'] = $("#password").val();
			obj['emailid'] = $("#emailid").val();
			obj['familyname'] = $("#familyname").val();
			obj['mno'] = $("#mno").val();
			var $this = e.currentTarget;
			e.preventDefault();
			require(['collections/addusercollection'],function(AddUserCollection){
				var  addUserCollection = new AddUserCollection();
				addUserCollection.saveUser(obj);
			});
		}
		
	});
	return newUserView;
	
});