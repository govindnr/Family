define(['jquery',
        'backbone',
        'models/addusermodel'],function($,BackBone,UserModel){
	
	var userCollection = BackBone.Collection.extend({
		model : UserModel,
		url : 'userdetails?action=addnewuser',
		
		saveUser : function(obj){
			
			var userModel = new UserModel();
			userModel.set(obj);
			this.reset();
			this.add(UserModel);
			this.each(function(model,index,all){
				model.save({},{
					
					success  : function(model,res){
						console.log(res);
					},
					error : function(model,res){
						console.log(res);
					},
					data  : $.param({
						fname : obj.fname,
						lname :obj.lname, 
						username :obj.username, 
						password :obj.password, 
						mno :obj.mno, 
						emailid :obj.emailid, 
						familyname :obj.familyname, 
					})
					
				});
			});
		}
		
		
	});
	
	return userCollection; 
});