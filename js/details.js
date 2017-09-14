$(function(){
	$("#small_img li").bind("click",function(){
		var index = $(this).index();
		$(".big").eq(index).show().siblings("img").hide();
		$(".small img").eq(index).show().siblings("img").hide();
	})
	
	$(".small").on({
		mouseenter : function(){
			$(".big").show();
			$("#mask").show();
		},
		mouseleave : function(){
			$(".big").hide();
			$("#mask").hide();
		},
		mousemove : function(e){
			var e = e || event;
			
			var x = e.pageX - $(".box").offset().left - $("#mask").width()/2 -10;
			var y = e.pageY - $(".box").offset().top - $("#mask").height()/2 -10;
			var maxL = $(".box").width() - $("#mask").width();
			var maxT = $(".box").height() - $("#mask").height();
			console.log($(".small").offset().top)
			x = Math.min( maxL , Math.max( 0 ,x ));
			y = Math.min( maxT , Math.max( 0 ,y ));
			$("#mask").css({
				left : x,
				top : y
			})
			
			var bigImgX = x*$(".big").eq(0).width()/$(".box").width();
			var bigImgY = y*$(".big").eq(0).height()/$(".box").height();
			
			$(".bigImg").css({
				left : -bigImgX,
				top : -bigImgY
			})
		}
	})
	
	$(".li2 div").click(function(){
		$(this).css({"border":"1px solid #f56a00","background":"url(images/bg_attr_sel_zyh.png)no-repeat right bottom"})
	})
	
	$(".li3 a").click(function(){
		$(this).css({"border":"1px solid #f56a00","background":"url(images/bg_attr_sel_zyh.png)no-repeat right bottom"}).siblings().css({"border":"","background":""})

	})
	
	
	
	$("#elab_l").click(function(){
		$(".list_elab").stop().animate({"left":"-=160"});
		
		var flag = false;
		if($(".list_elab").offset().left<0){
			flag = true;
		}
		if(flag){
			$("#elab_r").click(function(){
				$(".list_elab").stop().animate({"left":"+=160"});
				if($(".list_elab").offset().left>0){
					flag = false;
				}
			})
		}

	})
	
	var i = 1;
	$("#add").click(function(){
		i++;
		$("#num").val(i);
	})
	$("#cut").click(function(){
		i--;
		if(i<=1){
			i=1
		}
		$("#num").val(i);
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
