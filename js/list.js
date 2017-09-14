$(function(){
	
	
	
	
	
	
	$(".item").each(function(){
		$(this).find("h3").click(function(){
			$(this).next("ul").slideToggle(10);
			$(this).find("b").toggleClass("current")
		})
	})
	
	var $li = $(".filter_t ul").find("li");
	$li.click(function(){
		$(this).addClass("special").siblings().removeClass("special");
	})
	
	var $a = $(".filter_t ul").find("li").find("a");
	$a.hover(function(){
		$(this).css("color","#E22A40");
	},function(){
		$(this).not().css("color","");
	})
	
	
	
	
	$.ajax({
		type:"get",
		url:"data/list.json",
		success:function(res){
			console.log(res);
			var html1 = "";
			for(var i=0;i<3;i++){
				html1 +=`<dl class="clear">
							<dt>
								<a href="details.html">
									<img src="images/${res[i].img}">
								</a>
							</dt>
							<dd>
								<div class="title">
									<a href="details.html">
										${res[i].title}
									</a>
								</div>
								<div class="price">
									<i>特价 :</i>
									<b>${res[i].price}</b>
								</div>
								<div class="detail">
									<a href="details.html">查看详情</a>
								</div>
							</dd>
						</dl>`
			}
			$(".groom").html(html1);

			var html2 = "";
			for(var i=3;i<res.length;i++){
				html2 += `<li>
									
							<div class="img imgg">
								<span data-id=${res[i].id}  data-img=${res[i].img} data-title=${res[i].title} data-price=${res[i].price} data-mprice=${res[i].mprice}  style="display:none"></span>	
							
								<a class="links" href="details.html?pid=${res[i].id}">
									<img src="images/${res[i].img}"/>
								</a>
							</div>
							<div class="info">
								<a href="details.html?pid=${res[i].id}">
									${res[i].title}
								</a>
							</div>
							<div class="price">
								<i>${res[i].price}</i>
								<s>${res[i].mprice}</s>
							</div>
							<dl class="clear">
								<dt>
									<b>0</b>
									<span>商品销量</span>
								</dt>
								<dt>
									<b>88</b>
									<span>用户评论</span>
								</dt>
								<dt>
									<b>1888</b>
									<span>关注人气</span>
								</dt>
							</dl>
							<div class="love">
								<a href="javascript:;">
									
								</a>
								<a href="javascript:;"></a>
							</div>
							<div class="car">
								<span data-id=${res[i].id}  data-img=${res[i].img} data-title=${res[i].title} data-price=${res[i].price} data-mprice=${res[i].mprice}  style="display:none"></span>	
								<button class="btnn">加入购物车</button>
							</div>
						</li>`
			}
			$(".list_pic").html(html2);
			
			
			//li
			$(".list_pic li").each(function(){
				$(this).hover(function(){
					$(this).find(".car").fadeIn(100);
				},function(){
					$(this).find(".car").fadeOut(100);
				})
			})
			
			$(".love a:first-child").click(function(){
				$(this).css({"background-position-x":0,"background-position-y":-99});
			});
			
			$(".love a:last-child").click(function(){
				$(this).css({"background-position-x":0,"background-position-y":-225});
			})
	
			var html3 = "";
			for(var i=0;i<8;i++){
				html3 +=`<li>
								<p class="img">
									<a href="details.html" class="img">
										<img src="images/${res[i].img}"/>
									</a>
								</p>
								<p class="title">
									<a href="details.html">
										${res[i].title}
									</a>
								</p>
								<p class="price">
									<i>${res[i].price}</i>
									<b>${res[i].mprice}</b>
								</p>
							</li>`
			}
			$(".new").html(html3);
			
			
			
			
			
			$(".btnn").click(function(){
				var arr = [];
				var flag = true;
				var _json = {
					id:$(this).prev().data("id"),
					img:$(this).prev().data("img"),
					title:$(this).prev().data("title"),
					price:$(this).prev().data("price"),
					mprice:$(this).prev().data("mprice"),
					count:1
				}
				var cookieInfo = getCookie("shoplist");
				if( cookieInfo.length !=0){
					arr = cookieInfo;
					for(var i in arr){
						if(_json.id == arr[i].id){
							arr[i].count++;
							flag = false;
							break;
						}
					}
				}
				
		
				if(flag){
					arr.push(_json);
				}
				console.log(arr);
				setCookie("shoplist",JSON.stringify(arr));
				var f = confirm("是否继续购买?确定--继续购买，取消---去购物车结算");
				if( !f ){
					location.href = "shopCar.html"
				}
//				console.log(document.cookie);
			})
			
			
			$(".links").click(function(){
				var arr = [];
				var flag = true;
				var _json = {
					id:$(this).prev().data("id"),
					img:$(this).prev().data("img"),
					title:$(this).prev().data("title"),
					price:$(this).prev().data("price"),
					mprice:$(this).prev().data("mprice"),
					count:1
				}
				var cookieInfo = getCookie("shoplist");
				if( cookieInfo.length !=0){
					arr = cookieInfo;
					for(var i in arr){
						if(_json.id == arr[i].id){
							arr[i].count++;
							flag = false;
							break;
						}
					}
				}
				
		
				if(flag){
					arr.push(_json);
				}
				console.log(arr);
				setCookie("shoplist",JSON.stringify(arr));
			})
		}
		
		
		
	});
	


	
	
	
	
})
