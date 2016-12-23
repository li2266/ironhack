$(function(){
	$('#button_submit').click(function(){
		if($("#user_id").val() == ""){
			alert("Please input your User ID");
			return;
		}
		if($("#password").val() == ""){
			alert("Please input your password");
			return;
		}
		// use SHA1 to encrypt password
		var sha1 = hex_sha1($("#password").val());
		$("#password").val(sha1);
		document.getElementById("form_login").submit()
	});
});