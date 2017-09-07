$(function(){
	
	$("#header-warp").load("http://127.0.0.1/Juhuimai/common.html #header",function(){
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
		
		$("#allList li").hover(function(){
			/*$("#allList .p1").each(function(index){
				console.log(index);
				$("#allList .p1").eq(index).css("background","url(images/icohover.png) 0 -2px");
			})*/
			$(this).find(".mum").css("border-bottom","0")
			$(this).find("a").css("color","#fff");
			$(this).find(".p1").css("background","url(images/icohover.png) 0 -2px").end().css("background","rgba(227,25,57,1)");
			$(this).find(".p3").css("background","url(images/icohover.png) 0 -26px").end().css("background","rgba(227,25,57,1)");
			$(this).find(".p4").css("background","url(images/icohover.png) 0 -50px").end().css("background","rgba(227,25,57,1)");
			$(this).find(".p5").css("background","url(images/icohover.png) 0 -74px").end().css("background","rgba(227,25,57,1)");
			$(this).find(".p6").css("background","url(images/icohover.png) 0 -98px").end().css("background","rgba(227,25,57,1)");
			$(this).find(".p7").css("background","url(images/icohover.png) 0 -122px").end().css("background","rgba(227,25,57,1)");
			$(this).find(".p8").css("background","url(images/icohover.png) 0 -146px").end().css("background","rgba(227,25,57,1)");
			$(this).find(".p9").css("background","url(images/icohover.png) 0 -170px").end().css("background","rgba(227,25,57,1)");
		},function(){
			$(this).find(".p1").css("background","").end().css("background","");
			$(this).find(".p3").css("background","").end().css("background","");
			$(this).find(".p4").css("background","").end().css("background","");
			$(this).find(".p5").css("background","").end().css("background","");
			$(this).find(".p6").css("background","").end().css("background","");
			$(this).find(".p7").css("background","").end().css("background","");
			$(this).find(".p8").css("background","").end().css("background","");
			$(this).find(".p9").css("background","").end().css("background","");
			$(this).find("a").css("color","");
			$(this).find(".mum").css("border-bottom","")
		})
		
		$.ajax({
		type:"get",
		url:"http://127.0.0.1/Juhuimai/data/common.json",
		success:function(res){
			console.log(res)
			var html = "";
			for(var i in res){
				console.log(res[i].subNavList[0].subNavTit)
				var nav = res[i].subNavList[0];
				html += `<div class="showL">
									<div class="list1 clear">
										<div class="cat">
											<a href="#">${nav.subNavTit}:</a>
										</div>
										<div class="list">
											
										</div>
									</div>
									
								</div>`
			}
			$("#showList").html(html);
		}
		

		});
		
		$(".searchT li").click(function(){
			$(this).find("a").addClass("act").end().siblings().find("a").removeClass("act");
		})
		
		$("#carList").hide();
		$("#showList").hide();
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
