$(function(){
	$("#header-warp").load("common.html #header",function(){
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
		url:"data/common.json",
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
		
		$("#carList").show();
		$("#showList").hide();
		$("#carList li").hover(function(){
			$("#showList").show();
		},function(){
			
		})
		$("#showList").hover(function(){
			$(this).show();
		},function(){
			$(this).hide();
		})
		$("#carList").hover(function(){
			
		},function(){
			$("#showList").hide();
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
//			console.log(data);
//			console.log(data.data.tips.data);
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
	
	
	
	
	
	//轮播
	var $imgLi = $("#slides li");
	var index = 0;
	function lunbo(){
		index++;
		if(index == $imgLi.size()){
			index = 0;
		}
//		console.log(index)
		show();
		setNav();
	}
	var timer = setInterval(lunbo,3000);
	function show(){
		$imgLi.eq(index).fadeIn(100).siblings().fadeOut(100);
	}
	
	function setNav(){
		$(".small li").eq(index).find("a").addClass("act").end().siblings().find("a").removeClass("act");
	}
	//小li
	$(".small li").click(function(){
		
		clearInterval(timer);
		index = $(this).index();
		show();
		setNav();
		timer = setInterval(lunbo,3000);
	})
	
	
	$("#empor").mouseenter(function(){
		$(this).removeClass("actt");
		$(".emporium").show();
		$(".poster").hide();
		$("#post").addClass("actt");
	});
	
	$("#post").mouseenter(function(){
		$(this).removeClass("actt");
		$(".poster").show();
		$(".emporium").hide();
		$("#empor").addClass("actt");
	})
	
	//tab栏 wine
	var $Li = $("#wine .wineT").find("ul").find("li")
	$Li.each(function(index){
		$(this).hover(function(){
			$(".wineB div").eq($(this).index()).addClass("reveal").siblings().removeClass("reveal")
			$(".wineC").animate({"left":$(this).index()*100},160,function(){
				
			})
		})
	})
	
	$img = $(".wineB").find(".kind").find("ul").find("li").find("a").find("img");
//	console.log($img.size());
	$img.each(function(index){
		$(this).hover(function(){
			$(this).stop().animate({"margin-left":"-100px"},500)
		},function(){
			$(this).stop().animate({"margin-left":0},500)
		})
	})
	
	$(".contentC")
	var $Img = $(".contentC").find("li").find("a").find("img");
//	console.log($Img.size())
	$Img.each(function(index){
		$(this).hover(function(){
			$(this).animate({"top":"-12px"},200,function(){
				$(this).animate({"top":"-4px"},200,function(){
					$(this).animate({"top":0},200)
				})
			})
		})
	})
	
	/*$.ajax({
		type:"get",
		url:"data/main.json",
		success : function(res){
			var html = "";
			for(var i=0;i<=5;i++){
				console.log(res[i])
				html +=`<li>
								<a href="#">
									<img src="images/${res[i].img}">
									<p>${res[i].title}</p>
									<span>商城价:</span>
									<i>${res[i].price}</i>
								</a>
							</li>`
			}
			$(".tabs1").html(html);
			
		}
	});*/
	

	$mintLi = $("#mint li");
	$mintLi.each(function(index){
		$(this).mouseenter(function(){
			$("#winea").css("left",$(this).index()*200);
			$(".tabs1").eq($(this).index()).addClass("indication").siblings().removeClass("indication")
		})
		
	})
	
	
	//楼梯
	$.ajax({
		type:"get",
		url:"data/main.json",
		success : function(res){
			console.log(res);
			var html ="";
			for(var i=0;i<8;i++){
				html +=`<li>
							<div class="clear admin">
									<a href="list.html" class="clear">
										<img src="images/${res[i].img}">
										<p>${res[i].title}</p>
									</a>
									<span>${res[i].price}</span>
									<i>${res[i].mprice}</i>
									<b id="btn">
										<img src="images/smallcar.png" title="加入购物车">
									</b>
							</div>
						</li>`
			}
			$(".wares1").html(html);
			
			//tabs 2
			var html2 =""
			for(var i=8;i<16;i++){
				html2 +=`<li>
							<div class="clear admin">
									<a href="list.html" class="clear">
										<img src="images/${res[i].img}">
										<p>${res[i].title}</p>
									</a>
									<span>${res[i].price}</span>
									<i>${res[i].mprice}</i>
									<b id="btn">
										<img src="images/smallcar.png" title="加入购物车">
									</b>
							</div>
						</li>`
			}
			$(".wares2").html(html2);
			
			//tabs 3
			var html3 =""
			for(var i=16;i<24;i++){
				html3 +=`<li>
							<div class="clear admin">
									<a href="list.html" class="clear">
										<img src="images/${res[i].img}">
										<p>${res[i].title}</p>
									</a>
									<span>${res[i].price}</span>
									<i>${res[i].mprice}</i>
									<b id="btn">
										<img src="images/smallcar.png" title="加入购物车">
									</b>
							</div>
						</li>`
			}
			$(".wares3").html(html3);
			
			//tabs 4
			var html4 =""
			for(var i=24;i<32;i++){
				html4 +=`<li>
							<div class="clear admin">
									<a href="list.html" class="clear">
										<img src="images/${res[i].img}">
										<p>${res[i].title}</p>
									</a>
									<span>${res[i].price}</span>
									<i>${res[i].mprice}</i>
									<b id="btn">
										<img src="images/smallcar.png" title="加入购物车">
									</b>
							</div>
						</li>`
			}
			$(".wares4").html(html4);
		}
	});
	
	//tab切换
	$(".listStore li").hover(function(){
		var $ul = $(this).parent().parent().find("ul");
		$(this).addClass("select").siblings().removeClass("select");
		$ul.eq($(this).index()).addClass("reveal").siblings().removeClass("reveal");
	})
	
	$(".listaT a").hover(function(){
		$(this).css({"background":"rgba(0,0,0,0)","border":"1px solid #e7e7e7","color":"#fff"})
	},function(){
		$(this).css({"background":"","border":"","color":""})
	});
	
	
	//楼梯效果
	$("#LoutiNav li").hover(function(){
		$(this).css("border-bottom-color","#e31939");
		$(this).prev().css("border-bottom-color","#e31939");
	},function(){
		$(this).css("border-bottom-color","");
		$(this).prev().css("border-bottom-color","");
	}).click(function(){
		$(this).css("border-bottom-color","#e31939");
		$(this).prev().css("border-bottom-color","#e31939");
	})
	
	var flag = true;
	$("#LoutiNav li:not('.last')").click(function(){
		flag = false;
		$(this).find("span")
			   .addClass("active")
			   .end()
			   .siblings()
			   .find("span")
			   .removeClass("active");
			   
		var t = $(".louti").eq($(this).index()).offset().top;
		$("body,html").animate({"scrollTop":t},1000,function(){
			flag = true;
		});
	})
	

	$(window).scroll(function(){
		if(flag){
			var sTop = $(document).scrollTop();
			if(sTop>1880){
				$("#LoutiNav").fadeIn(300);
			}else{
				$("#LoutiNav").fadeOut(300);
			};
			var $floor = $(".louti").filter(function(){
				return Math.abs($(this).offset().top - sTop) < $(this).height()/2;
			})
			var index = $floor.index();
			$("#LoutiNav li").eq(index)
							 .find("span")
							 .addClass("active")
							 .end()
							 .siblings()
							 .find("span")
							 .removeClass("active");
		}
//		console.log($(document).scrollTop())
	})
	
	$(".last").click(function(){
		flag = false;
		$("body,html").animate({"scrollTop":1880},1000,function(){
			flag = true;
			$("#LoutiNav li:not('.last')").removeClass("active");	
		});
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
