$(function(){
	
	var phone = getCookie("phone");
	var passw1 = getCookie("passw1");
	var passw2 = getCookie("passw2");
	
	if(phone.length != 0){
		$("#uname").val(phone);
	}else{
		$("#uname").val();
	}
	
	
	var flag1 = false;
	var flag2 = false;
	$("#btn").click(function(){
		if($("#uname").val() == "" && $("#upwd").val() == ""){
			flag2 = false;
			$(".tishi").find("span").text("请输入用户名密码 !").css("color","#E31938").show();
		}else{
			flag2 = true;
			$(".tishi").hide();
		}
	})
	
	$("#btn").click(function(){
		if($("#uname").val() == phone && $("#upwd").val() == passw1 && flag2){
			flag1 = true;
			$("form").submit();
			$(".tishi").hide();
		}else{
			flag1 = false;
			$(".tishi").show();
			return false;
		}
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
})
