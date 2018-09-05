$(function(){
	$('#login_btn').click(function(){

		var uname=$('#uname').val();
		var upsd=$('#upsd').val();
		$.ajax({
			url:'php/login.php',
			type:'post',
			data:$("#login_form").serialize(),
			async:true,
			success:function(msg){
				alert(msg);
				if (msg=="login success!!") {
					window.location.href="index.html";
				}
				
			}
		})

	});


})
