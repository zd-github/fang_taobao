	$(function(){
	/*头部导航*/
	//左侧  地址定位
	$('header .h_main_div .address').mouseover(function(){
		$('header .h_main_div .address p').css('background-color','#FFFFFF');
		$('header .h_main_div .address .addredd_content').show();
	}).mouseout(function(){
		$('header .h_main_div .address p').css('background-color','');
		$('header .h_main_div .address .addredd_content').hide();
	});
	$('header .h_main_div .address .addredd_content li').mouseover(function(){
		$(this).css('background-color','#F5F5F5');
	}).mouseout(function(){
		$(this).css('background-color','');
	});

	//右侧  二级导航
	$('header .h_main_div .h_main_ul>li').mouseenter(function(){
		$(this).children('.show_div').show();
		$(this).children('span').css('color','#FF4400');
		$(this).children('.act_span').addClass('active_span');
		$(this).css('cursor','pointer');
	}).mouseleave(function(){
		$(this).children('.show_div').hide();
		$(this).children('span').css('color','');
		$(this).children('.act_span').removeClass('active_span');
	});

	$('header .h_main_div .h_main_ul>li>.show_div li').mouseover(function(){
		$(this).css('background','#F5F5F5');
	}).mouseout(function(){
		$(this).css('background','');
	});

	$('header #nav_style ul li').mouseover(function(){
		$(this).css('background','');
	});

	$('header #nav_style ul li.zhu').siblings('li').children('span').mouseover(function(){
		$(this).css('background-color','#F01205');
		$(this).css('color',"#FFFFFF");
	}).mouseout(function(){
		$(this).css('background','');
		$(this).css('color',"");
	});
	$('header #nav_style ul li.te').siblings('li').children('span').mouseover(function(){
		$(this).css('background-color','#B0E24B');
		$(this).css('color',"#FFFFFF");
	}).mouseout(function(){
		$(this).css('background','');
		$(this).css('color',"");
	});
	$('header #nav_style ul li.dang').siblings('li').children('span').mouseover(function(){
		$(this).css('background-color','#C17CBC');
		$(this).css('color',"#FFFFFF");
	}).mouseout(function(){
		$(this).css('background','');
		$(this).css('color',"");
	});
	$('header #nav_style ul li.geng').siblings('li').children('span').mouseover(function(){
		$(this).css('background-color','#2177C7');
		$(this).css('color',"#FFFFFF");
	}).mouseout(function(){
		$(this).css('background','');
		$(this).css('color',"");
	});

/* 分类搜索 */
$('#type_search').mouseenter(function(){
	$('#type_search>div').show();
	$('#type_search>div').mouseenter(function(){
		$('#type_search>div>ul').show();
	}).mouseleave(function(){
		$('#type_search>div>ul').hide();
	});
}).mouseleave(function(){
	$('#type_search>div').hide();
});

/*--商品介绍  放大镜--*/
$('#small').mousemove(function(e){
	$('#move,#big').show();
	//move的坐标=鼠标位置-small的偏移值-move的宽高一半
	var x=e.pageX-$(this).offset().left-($('#move').width()/2);
	var y=e.pageY-$(this).offset().top-($('#move').height()/2);
	if(x<=0){
		x=0
	}else if(x>=$('#small').width()-$('#move').width()){
		x=$('#small').width()-$('#move').width();
	}
	if(y<=0){
		y=0;
	}else if(y>=$('#small').height()-$('#move').height()){
		y=$('#small').height()-$('#move').height();
	}
	$('#move').css({left:x,top:y});
	var scale=$('#big>img').width()/$('#small>img').width();
	$('#big').scrollLeft(x*scale);
	$('#big').scrollTop(y*scale);
	$('#big>img').attr('src',$('#small>img').attr('src'));
}).mouseout(function(){
	$('#move,#big').hide();
});
$('#toggle>li>img').click(function(){
	$('#small>img').attr('src',$(this).attr('src'));
});

/*立即购买  加入购物车*/
//购买的数量 加减
if (parseInt($('#counts').val())<=1){
	$('#jian').attr('disabled','disabled');
}else{
	$('#jian').removeAttr("disabled");
}
$('#jian').click(function(){
	if (parseInt($('#counts').val())<=1){
		$('#jian').attr('disabled','disabled');
	}
	var m=(parseInt($('#counts').val())<=1)?1:parseInt($('#counts').val())-1;
	$('#counts').val(m);
});
$('#jia').click(function(){
	var n=parseInt($('#counts').val())+1;
	$('#counts').val(n);
	$('#jian').removeAttr("disabled");
});

//手机购买
$('.sch_and_tab>.phone_buy>p:nth-child(1)').mouseover(function(){
	$(this).css('background-color','#E5E5E5');
	$(this).next('p').show();
}).mouseout(function(){
	$(this).css('background-color','');
	$(this).next('p').hide();
})

//宝贝排行榜
$('.left_c .baby_nth>ul>li').mouseenter(function(){
	$(this).addClass('li_act').siblings().removeClass('li_act');
	$('.left_c .baby_nth>.ul_div>.divs').eq($(this).index()).show().siblings().hide();
});
$('.left_c .baby_nth>.ul_div>.divs>ul>li>img').mouseover(function(){
	$(this).css({'width':'65px','height':'54px','border':'10px solid #ccc','margin':'0'});
}).mouseout(function(){
	$(this).css({'width':'','height':'','border':'','margin':''});
});

//宝贝详情 评论 专享服务  tab页
$('.sch_and_tab>ul>li').click(function(){
	$(this).addClass('li_active').siblings().removeClass('li_active');
	$('.main_content .tab_c>ul>li').eq($(this).index()).show().siblings().hide();
});

//瀑布流
var uls=document.getElementsByClassName('pubu_imgs')[0].getElementsByTagName('ul');
console.log(uls);console.log(uls[1].offsetHeight);
function createLi(ul){
	var li=document.createElement('li');
	li.style.height=rand()+'px';
	li.style.backgroundImage='url(pubu_imgs/'+bg()+'.jpg)';
	li.style.backgroundSize='100% 100%';
	ul.appendChild(li);
}
function rand(){
	return Math.floor(Math.random()*300)+100;
}
function bg(){
	return Math.floor(Math.random()*9)+1;
}
function state(){
	for(var i=0;i<10;i++){
		var ArrHeight=[uls[0].offsetHeight,uls[1].offsetHeight];
		var index=mini(ArrHeight);

		createLi(uls[index]);
	}
}
state();

function mini(arr){
	var mh=arr[0]; 
	for(var i=0;i<arr.length;i++){
		if(arr[i]<mh){
			mh=arr[i];
		}
	}
	return  arr.indexOf(mh);  //根据数组中的元素值获取该元素值的下标
}

window.onscroll=function(){
	var dh=document.documentElement.offsetHeight;
	var ch=document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;
	var st=document.documentElement.scrollTop||document.body.scrollTop;

	if(dh-ch==st){
		state();
	}
}
//点击加载
$('.pubu>.dian').mouseover(function(){
	$(this).css('cursor','pointer');
}).click(function(){
	state();
})



});


