$(function(){
	
	$li = $("#fir").find(".tabs").find("li:not(:last-child)");
	$div = $(".fir").find(".form");
	$li.click(function(){
		$(this).addClass("act").siblings().removeClass("act");
		$(this).find("span").show().end().siblings().find("span").hide();
		$div.eq($(this).index()).addClass("indication").siblings().removeClass("indication");
	})
	
	
	console.log($div.size());
	
	//正则
	var flag1 = false;
	var flag2 = false;
	var flag3 = false;
	var flag4 = false;
	$("#uname").blur(function(){
		var reg = /^1[34578]\d{9}$/;

		if($(this).val() == ""){
			flag1 = false;
			$(this).parent().find("span").text("- 手机号为空").show();
		}else if(!reg.test($(this).val())){
			flag1 = false;
			$(this).parent().find("span").text("- 手机号码格式不正确").show();
		}else{
			flag1 = true;
			$(this).parent().find("span").hide();
		}
		
		
		
	})
	
	$("#upwd").blur(function(){
		if($(this).val() == ""){
			flag2 = false;
			$(this).parent().find("span").text("- 密码为空").show();
		}else if($(this).val().length < 6 || $(this).val().length >20){
			flag2 = false;
			$(this).parent().find("span").text("- 密码格式错误").show();
		}else{
			flag2 = true;
			$(this).parent().find("span").hide();
		}
	})
	
	$("#upwde").blur(function(){
		if($(this).val() == $("#upwd").val()){
			flag3 = true;
			$(this).parent().find("span").hide();
		}else if($(this).val() == ""){
			flag3 = false;
			$(this).parent().find("span").text("-密码输入不一致 ").show();
		}else{
			flag3 = false;
			$(this).parent().find("span").text("-密码输入不一致 ").show();
		}
	})
	$("#submit").click(function(){
		if($("#sel").is(":checked") == true){
			flag4 = true;
		}else{
			flag4 = false;		}
		
	})
	
	
	//生成验证码
	function yzm(){
        var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
        var str = '';
        for(var i = 0 ; i < 4 ; i ++ )
            str += ''+arr[Math.floor(Math.random() * arr.length)];
        return str;
    }
	
	$("#code").click(function(){
		$(this).val(yzm());
		console.log(yzm())
	})
	
	
	$("#submit").click(function(){
		
		
//		alert()
		if(flag1 && flag2 && flag3 && flag4){
			$("form").submit();
			setCookie("phone",$("#uname").val());
			setCookie("password",$("#upwd").val());
			
		}else{
			return false;
		}
	})
	
	
	//邮箱正则

	var ok1 = false;
	var ok2 = false;
	var ok3 = false;
	var ok4 = false;
	$("#uname1").blur(function(){
		var regEmail = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;

		if($(this).val() == ""){
			ok1 = false;
			$(this).parent().find("span").show();
		}else if(!regEmail.test($(this).val())){
			ok1 = false;
			$(this).parent().find("span").show();
		}else{
			ok1 = true;
			$(this).parent().find("span").hide();
		}
		
		
		
	})
	
	$("#upwd1").blur(function(){
		if($(this).val() == ""){
			ok2 = false;
			$(this).parent().find("span").text("- 密码为空").show();
		}else if($(this).val().length < 6 || $(this).val().length >20){
			ok2 = false;
			$(this).parent().find("span").text("- 密码格式错误").show();
		}else{
			ok2 = true;
			$(this).parent().find("span").hide();
		}
	})
	
	$("#upwde1").blur(function(){
		if($(this).val() == $("#upwd1").val()){
			ok3 = true;
			$(this).parent().find("span").hide();
		}else if($(this).val() == ""){
			ok3 = false;
			$(this).parent().find("span").text("- 密码输入不一致 ").show();
		}else{
			ok3 = false;
			$(this).parent().find("span").text("- 密码输入不一致 ").show();
		}
	})
	$("#submit1").click(function(){
		if($("#sel1").is(":checked") == true){
			ok4 = true;
		}else{
			ok4 = false;		}
		
	})
	
	
	//生成验证码
	function yzm(){
        var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
        var str = '';
        for(var i = 0 ; i < 4 ; i ++ )
            str += ''+arr[Math.floor(Math.random() * arr.length)];
        return str;
    }
	
	$("#code1").click(function(){
		$(this).val(yzm());
//		console.log(yzm())
	})
	
	
	$("#submit1").click(function(){
		
		
//		alert()
		if(ok1 && ok2 && ok3 && ok4){
			$("form").submit();
			setCookie("email",$("#uname1").val());
			setCookie("password",$("#upwd1").val());
			
		}else{
			return false;
		}
	})
	
})
