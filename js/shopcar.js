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
        $(".site").fadeIn(10);
    },function(){
        $(".site").fadeOut(10);
    });
        
        
    $(".star li").find("a").hover(function(){
        $(this).css({"color":"#f52648","text-decoration":"underline"})
    },function(){
        $(this).css({"color":"","text-decoration":""})
    })    
     
     
    $(".HotBoxTit li").hover(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(this).parent().find("b").css("left",$(this).index()*115);
    })    
    
    
    $.ajax({
        type:"get",
        url:"data/list.json",
        success:function(res){
//          console.log(res);
            var html1 = "";
            for(var i=0;i<res.length-1;i++){
                html1 +=`<li>
                            <a href="list.html"><img src="images/${res[i].img}"></a>
                            <a href="details.html">${res[i].title}</a>
                            <i>${res[i].mprice}</i>
                            <b>${res[i].price}</b>
                            <span></span>
                        </li>`
            }
            $(".star").html(html1);
    
            $(".star li").find("a").hover(function(){
                $(this).css({"color":"#f52648","text-decoration":"underline"})
            },function(){
                $(this).css({"color":"","text-decoration":""})
            }) 
            
            
        }
    })
    
    var arr = getCookie("shoplist");
    var html2 = "";
    for(var i in arr){
        var shopinfo = arr[i];
        console.log(shopinfo);
        html2 +=`<h4 class="dian">店铺: MISSTT</h4>
                <table width="100%">
                    <tr>
                        <td width="4%" align="center" class="sell">
                            <input type="checkbox" class="ck" />
                        </td>
                        <td width="40%" align="center" class="info-text">
                            <dl class="clear">
                                <dt>
                                    <a href="javascript:;">
                                        <img src="images/${shopinfo.img}"/>
                                    </a>
                                </dt>
                                <dd>
                                    <a>${shopinfo.title}</a>
                                    <i>颜色：银色</i>
                                    <b>尺码：XL</b>
                                </dd>
                                
                            </dl>
                        </td>
                        <td width="15%" align="center" class="addCut clear">
                            <span class="cut" onselectstart="return false" style="-moz-user-select:none;">
                                -
                            </span>
                            <input type="text" class="number" value="${shopinfo.count}" />
                            <span class="add" onselectstart="return false" style="-moz-user-select:none;">
                                +
                            </span>
                        </td>
                        <td width="15%" align="center" class="price">
                            <span class="pricee">
                                ${shopinfo.price}
                            </span>
                        </td>
                        <td width="15%" align="center" class="allPricee">
                            <span class="allPrice">
                                ${shopinfo.price}
                            </span>
                        </td>
                            
                        <td width="10%" align="center" class="dele">
                            <span class="del">删除</span>
							<span data-id=${shopinfo.id}  data-img=${shopinfo.img} data-title=${shopinfo.title} data-price=${shopinfo.price} data-mprice=${shopinfo.mprice}  style="display:none"></span>	
                            
                        </td>
                    </tr>
                </table>`
    }
    $(".store").html(html2);
    //全选
    $("#chkAll").click(function(){
        $(".ck").prop("checked",$(this).prop("checked"));
        jiesuan();
    })
    console.log(arr);
    //删除
    $(".dele").on("click","span",function(){
        console.log("aaaa");
        var id = $(this).next().data("id");
        console.log(id);
        for(var i in arr){
            if( id == arr[i].id){
                arr.splice(i,1);
                setCookie("shoplist",JSON.stringify(arr));
                $(this).parent().parent().parent().parent().remove();
//              $(this).parent().parent().parent().prev("h4").remove();
            }
        }
    })
    
    //加减
//  $(".addacut").click(function(){
//      var sign = $(this).html();
//      console.log(sign);
//      var id = $(this).parent().parent().find(".dele").find("span").next().data("id");
//      console.log(id);
//      
//      //
//      var num = $(this).parent().find(".number").val();
//      console.log(num)
//      if( sign == "-" && num == 1 ){
//          return;
//      }
//      for( var i in arr ){
//          if( id == arr[i].id){
//              sign == "+" ? arr[i].count++ : arr[i].count--;
//              setCookie("shoplist",JSON.stringify(arr));
//              $(this).parent().find(".number").val( arr[i].count );
//              $(this).parent().parent().find("allPricee").find("allPrice").html( ( arr[i].count * arr[i].price ));
//          }
//          console.log(arr[i].count * arr[i].price);
//      }
//  })
    
    $(".cut").click(function(){
        var id = $(this).parent().parent().find(".dele").find("span").next().data("id");
        console.log(id);
        var num = $(this).parent().find(".number").val();
        
        for(var i in arr){
            if( id == arr[i].id ){
                if( num == 1 ){
                    return;
                }
                arr[i].count--;
                setCookie("shoplist",JSON.stringify(arr));
                $(this).parent().find(".number").val( arr[i].count );
                $(this).parent().next().next().find(".allPrice").html( (arr[i].count * arr[i].price) +".0");
            }
        }
    })
    
    $(".add").click(function(){
        var id = $(this).parent().parent().find(".dele").find("span").next().data("id");
        console.log(id);
        var num = $(this).parent().find(".number").val();
        
        for(var i in arr){
            if( id == arr[i].id ){
                arr[i].count++;
                setCookie("shoplist",JSON.stringify(arr));
                $(this).parent().find(".number").val( arr[i].count );
                $(this).parent().next().next().find(".allPrice").html( (arr[i].count * arr[i].price) +".0");
            }
        }
    })

    
    
    $(".ck").click(function(){
        jiesuan();
    })
    
    
    //清空购物车
    $("#delete").click(function(){
        $(".store").remove();
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
    
    
    
    
    
    
})
    
 //结算
    function jiesuan(){
        var money = 0;
        var count = 0;
        $(".ck:checked").each(function(){
            count += parseInt( $(this).parent().parent().find(".number").val());
            money += parseInt( $(this).parent().parent().find(".allPrice").html());
        })
        $("#sum").html( money+".0");
        $("#market").html( money+money*0.2 );
        $("#save").html(money*0.2);
        $("#dial").html("("+money*0.2/money*100+"%)");
    }