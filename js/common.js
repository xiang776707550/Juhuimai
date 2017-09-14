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
		
		/*$.ajax({
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
		

		});*/
		$.ajax({
		type:"get",
		url:"http://127.0.0.1/Juhuimai/data/common.json",
		success:function(res){
			console.log(res)
			var html = "";
			var html1 = "";
			for(var i in res){
				console.log(res[i].subNavList[0].subNavTit)
				var nav = res[i].subNavList[0];
				html = `
								<div class="showL">
									<div class="list1 clear">
										<div class="cat">
											<a href="#">保健食品:</a>
										</div>
										<div class="list">
											
										</div>
									</div>
									<div class="list1 clear">
										<div class="cat">
											<a href="#">保健食品:</a>
										</div>
										<div class="list">
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											
										</div>
									</div>
									<div class="list1 clear">
										<div class="cat">
											<a href="#">保健食品:</a>
										</div>
										<div class="list">
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
										</div>
									</div>
									<div class="list1 clear">
										<div class="cat">
											<a href="#">保健食品:</a>
										</div>
										<div class="list">
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
										</div>
									</div>
									<div class="list1 clear">
										<div class="cat">
											<a href="#">保健食品:</a>
										</div>
										<div class="list">
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
										</div>
									</div>
									<div class="list1 clear">
										<div class="cat">
											<a href="#">保健食品:</a>
										</div>
										<div class="list">
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
											<a href="#">苹果</a>
										</div>
									</div>
								</div>
								<div class="showR">
									<h3 class="groom">推荐品牌</h3>
									<ul class="store clear">
										<li><a href="#">三只松鼠</a></li>
										<li><a href="#">三只松鼠</a></li>
										<li><a href="#">三只松鼠</a></li>
										<li><a href="#">三只松鼠</a></li>
										<li><a href="#">三只松鼠</a></li>
										<li><a href="#">三只松鼠</a></li>
										<li><a href="#">三只松鼠</a></li>
										<li><a href="#">三只松鼠</a></li>
										<li><a href="#">三只松鼠</a></li>
									</ul>
								</div>`
				
			}
			$("#showList").html(html);
		}
		

		});
		
		
		
		$(".searchT li").click(function(){
			$(this).find("a").addClass("act").end().siblings().find("a").removeClass("act");
		})
		
		$("#carList").hide();
		$("#showList").show();
		
		
		
		
		
		
		$(".list a").hover(function(){
			$("#carList").show();
		},function(){
			
		})
		$("#carList").hover(function(){
			$(this).show();
		},function(){
			$(this).hide();
		})
		
		$(".turn").hover(function(){
			$(this).find(".survey").stop().animate({"height":0,"top":22},300,function(){
				$(this).hide();
				
				$(this).next().show().stop().animate({"height":45,"top":0},300)
			});
		},function(){
			$(this).find(".online").stop().animate({"height":0,"top":22},300,function(){
				$(this).hide();
				
				$(this).prev().show().stop().animate({"height":45,"top":0},300)
			})
		})
		
		$(".reserve").hover(function(){
			$(this).css("background","#E12545");
		},function(){
			$(this).css("background","");
		})
		
		var arr = getCookie("shoplist");
		console.log(arr);
		var count = "";
		for(var i in arr){
			var shopinfo = arr[i];
//			console.log(parseInt(`${shopinfo.count}`))
			count = parseInt(`${arr[0].count}`)+parseInt(`${arr[i].count}`)
		}
		$("#numm").html(count);
		
		$(window).scroll(function(){
			var Top = $(window).scrollTop();
			if(Top>200){
				$(".topen").fadeIn(100);
			}else{
				$(".topen").fadeOut(100);
			}
			$(".topen").click(function(){
				$("body,html").stop().animate({"scrollTop":0},1000);
			})
		})
		
		
		
	//search
	$(".ts_txt").focus(function(){
		$(".ts_txt")[0].value = "";
		$("#list").css("display","block");
//		alert("aa");
	});
	$(".ts_txt").blur(function(){
		$(".ts_txt")[0].value = "宽松显瘦纯色短裤";
		$("#list").css("display","none");
	});
	
	//搜索库
	var oInput = document.getElementsByClassName("ts_txt")[0];
	var oList = document.getElementById("list");
	
	oInput.oninput=function(){

		var val = $(this).val();
		$.getJSON("http://list.mogujie.com/module/mget?code=tips&keyWord="+val+"&callback=?",function(data){
			console.log(data);
			console.log(data.data.tips.data);
			data = data.data.tips.data;
			var html = "";
	//		console.log(data[0].query);
			for(var i in data){
				html += "<li><a href=''>"+data[i].query+"</a></li>";
			}
			oList.innerHTML = html;
		})
			
	}
		
	

	
	
	
		
	});
	$("#footer-warp").load("http://127.0.0.1/Juhuimai/common.html #footer");
	
	
	
})
