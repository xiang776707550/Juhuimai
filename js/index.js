$(function(){
	
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
									<a href="details.html" class="clear">
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
									<a href="details.html" class="clear">
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
									<a href="details.html" class="clear">
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
									<a href="details.html" class="clear">
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
