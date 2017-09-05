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
	console.log($img.size());
	$img.each(function(index){
		$(this).hover(function(){
			$(this).stop().animate({"margin-left":"-100px"},500)
		},function(){
			$(this).stop().animate({"margin-left":0},500)
		})
	})
	
	$(".contentC")
	var $Img = $(".contentC").find("li").find("a").find("img");
	console.log($Img.size())
	$Img.each(function(index){
		$(this).hover(function(){
			$(this).animate({"top":"-12px"},200,function(){
				$(this).animate({"top":"-4px"},200,function(){
					$(this).animate({"top":0},200)
				})
			})
		})
	})
	
	
	
	
	
	
	
})
