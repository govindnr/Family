$(document).ready(function(){
	
	$('#existingusers').click(function(e){
		var username = $('#username').val();
		var password = $('#password').val();
		var obj={};
		obj["userName"] = username;
		obj["password"] = password;
		
		/*
		var url =  "login?username="+username+"&password="+password;
		var request;
		if(window.XMLHttpRequest){
			request = new XMLHttpRequest();
		}else if(window.ActiveXObject){
			request = new ActiveXObject();
		}
		try{
			
			request.onreadystatechange=function (){
				if(request.readyState == 4){
					var res = request.responseText;
				}
			}
			rquest.open("POST","login",true);
			request.send();
		}catch(e){
			console.log("error");
		}*/
		$.ajax({
			type: 'post',
			url: "login",
			data: obj,
			success: function (data) {
				// Update "src" attribute with received image URL
				console.log(data);
			}
		});
		
	})
})