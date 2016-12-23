$(function(){
	$('#button_register').click(function(){
		if($("#user_id").val() == ""){
			alert("Please input your User ID");
			return;
		}
		if($("#password").val() == ""){
			alert("Please input your password");
			return;
		}
		// password confirmation
		if($("#password").val() != $("#password_again").val()){
			alert("Password you input are different");
			return;
		}
		
		var val=$('input:radio[name="user_type"]').is(":checked");
		if(!val){
			alert("Please choose your user type");
			return;
		}
		// use SHA1 to encrypt password
		var sha1 = hex_sha1($("#password").val());
		$("#password").val(sha1);
		document.getElementById("register_form").submit(); 
	});
});