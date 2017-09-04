$(function(){
	$(".nav-r #me").hover(function(){
		$(".info").fadeIn(10);
		$(".info").css("border-top-color","#fff");

	},function(){
		$(".info").fadeOut(10);
	})
	
	$(".info a").hover(function(){
		$(this).css({"color":"#f00","text-decoration":"underline"})
		
	},function(){
		$(this).css({"color":"#666","text-decoration":"none"})
	})
	
	$(".nav-r #up").hover(function(){
		$(".store").fadeIn(10);
		$(".store").css("border-top-color","#fff");

	},function(){
		$(".store").fadeOut(10);
	})
	
	$(".store a").hover(function(){
		$(this).css({"color":"#f00","text-decoration":"underline"})
		
	},function(){
		$(this).css({"color":"#666","text-decoration":"none"})
	})
	
	$(".nav-r #ph").hover(function(){
		$(".weixin").fadeIn(10);
		$(".weixin").css("border-top-color","#fff");

	},function(){
		$(".weixin").fadeOut(10);
	})
	
	$(".nav-r #duc").hover(function(){
		$(".support").fadeIn(10);
		$(".support").css("border-top-color","#fff");
	},function(){
		$(".support").fadeOut(10);
	})
	
	$(".support a").hover(function(){
		$(this).css({"color":"#f00","text-decoration":"underline"});
	},function(){
		$(this).css({"color":"#666","text-decoration":"none"});
	})
	
	$("#web").hover(function(){
//		$(this).css("background","#fff");
		$(".site").fadeIn(10);
	},function(){
		$(".site").fadeOut(10);
	})
	
	
	$.ajax({
		type:"get",
		url:"http://127.0.0.1/Juhuimai/data/common.json",
		success:function(res){
			console.log(res)
			
		}
		
		
		
	});
	
	
	
	
	
	
	
	
	
	
})
