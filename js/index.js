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


/*搜索*/
$('.search_list span').click(function(){
	$(this).addClass('span_ac').siblings('span').removeClass('span_ac');
});

/*侧边导航*/
$('.nav_lun_others .y_nav .nav_lis li').mouseenter(function(){ 
	var id=$(this).index();
	$(this).css({'background-color':'#F7DBE3','color':'#FF5000'}).siblings().css({'background-color':'','color':''});
	$('.nav_lun_others .y_nav .contents').show();
	$('.nav_lun_others .y_nav .contents .li_cnt').eq(id).show().siblings('.li_cnt').hide();
});
$('.nav_lun_others .y_nav').mouseleave(function(){
	$('.nav_lun_others .y_nav .contents').hide();
	$('.nav_lun_others .y_nav .nav_lis li').css({'background-color':'','color':''});
})

/*轮播图1 */
var n=0;
var num=$('.lun1 .lun_img li').length-1;
function autoRun(){
	timer=setInterval(function(){
		n++;
		if(n>num){
			n=0;
		}
		$('.lun1 .lun_img li').eq(n).addClass('lun_show').siblings('li').removeClass('lun_show');
		$('.lun1 .lun_num li').eq(n).addClass('on').siblings('li').removeClass('on');

	},2000);
}
autoRun();

$('.lun1').mouseenter(function(){
	clearInterval(timer);
	$('.lun1 .lr').show();

	$('.lun1 .lun_num li').mouseenter(function(){
		n=$(this).index();
		$('.lun1 .lun_img li').eq(n).addClass('lun_show').siblings('li').removeClass('lun_show');
		$('.lun1 .lun_num li').eq(n).addClass('on').siblings('li').removeClass('on');
	});

}).mouseleave(function(){
		$('.lun1 .lr').hide();
		autoRun();
});

$('.lun1 .lr .left').click(function(){
	n--;
	if(n<0){
		n=num;
	}
	$('.lun1 .lun_img li').eq(n).addClass('lun_show').siblings('li').removeClass('lun_show');
	$('.lun1 .lun_num li').eq(n).addClass('on').siblings('li').removeClass('on');
});
$('.lun1 .lr .right').click(function(){
	n++;
	if(n>num){
		n=0;
	}
	$('.lun1 .lun_img li').eq(n).addClass('lun_show').siblings('li').removeClass('lun_show');
	$('.lun1 .lun_num li').eq(n).addClass('on').siblings('li').removeClass('on');
});

/*轮播图2 */
var m=0;
var nums=$('.lun2 .lun_img li').length-1;
var l=0;
function autoRun2(){
	timer2=setInterval(function(){
		m++;
		if(m>nums){
			m=0;
		}
		l+=86.5;
		if(l>500){
			l=0;
		}
		$('.lun2 .lun_img li').eq(m).addClass('lun_show').siblings('li').removeClass('lun_show');
		$('.lun2 .lun_num .nth_number').html((m+1)+'/6');
		$('.lun_num .lun_num_after').css('left',l+'px');

	},1000);
}
autoRun2();

$('.lun2').mouseenter(function(){
	clearInterval(timer2);
	$('.lun2 .lr').show();
}).mouseleave(function(){
		$('.lun2 .lr').hide();
		autoRun2();
});

$('.lun2 .lr .left').click(function(){
	m--;
	if(m<0){
		m=nums;
	}
	l-=86.5;
		if(l<0){
			l=432.5;
		}
	$('.lun2 .lun_img li').eq(m).addClass('lun_show').siblings('li').removeClass('lun_show');
	$('.lun2 .lun_num .nth_number').html((m+1)+'/6');
	$('.lun_num .lun_num_after').css('left',l+'px');
});
$('.lun2 .lr .right').click(function(){
	m++;
	if(m>nums){
		m=0;
	}
	l+=86.5;
	if(l>500){
		l=0;
	}
	$('.lun2 .lun_img li').eq(m).addClass('lun_show').siblings('li').removeClass('lun_show');
	$('.lun2 .lun_num .nth_number').html((m+1)+'/6');
	$('.lun_num .lun_num_after').css('left',l+'px');
});


/*others--- 登录 公告  话费等业务 */
//公告
$('.others .gong_gao .gao_lis>li').mouseenter(function(){
	$(this).addClass('gao_act').siblings().removeClass('gao_act');
	var index=$(this).index();
	$('.others .gong_gao .gao_cnt>div').eq(index).addClass('gao_show').siblings().removeClass('gao_show');
})
/* 话费等业务 */
$('.others .yewu>div.tabs').mouseenter(function(){
	//清除其他tab效果
	$(this).siblings('.tabs').children('.tab_cont').hide();
	$(this).siblings('.tabs').css({'border-left':'','border-top':'','border-right':'','border-bottom':'1px solid #FF4400'});
	//设置当前tab
	$(this).children('.tab_cont').show();
	$(this).css({'border-left':'1px solid #FF4400','border-top':'1px solid #FF4400','border-right':'1px solid #FF4400'}); 
	$('.tabs_game').css('border-bottom','1px solid #FF4400');
	//设置当前tab中的内部的tab
	$('.tab_th>li').mouseenter(function(){
		$('.tab_page>li').eq($(this).index()).show().siblings().hide();
	})
});
//关闭内部tab
$(".close_tab").click(function(){
	$(this).parent('.tab_cont').hide();
	$(this).parent('.tab_cont').parent('.tabs').css({'border':''}).siblings('.tabs').css('border-bottom','');
	$('.tabs_game').css('border-bottom','');
});

/* 阿里app */
$('.tou_ali .ali_app ul li .fa').mouseenter(function(){
	$(this).children('.son').show();
}).mouseleave(function(){
	$(this).children('.son').hide();
})

/*生活研究所*/
$('.life_yanjiusuo ul>li').mouseover(function(){
	$(this).children('img').css('border-color','#FF8715');
	$(this).children('p:nth-child(2)').css('color','#FF8715');
}).mouseout(function(){
	$(this).children('img').css('border-color','');
	$(this).children('p:nth-child(2)').css('color','');
})

/*淘抢购 倒计时*/
setInterval(function(){
	var d1=new Date();
	var d2=new Date('2018/6/26 23:00:00');
	var cha=d2.getTime()-d1.getTime();

	//天
	var day=Math.floor(cha/(1000*60*60*24));
	cha%=1000*60*60*24;
	//时
	var hour=Math.floor(cha/(1000*60*60))
	cha%=1000*60*60;
	//分
	var minute=Math.floor(cha/(1000*60))
	cha%=1000*60;
	//秒
	var second=Math.floor(cha/(1000))

	var h=document.getElementById('hours');
	h.innerHTML=(hour<10?'0'+hour:hour);
	var m=document.getElementById('minutes');
	m.innerHTML=(minute<10?'0'+minute:minute);
	var s=document.getElementById('seconds');
	s.innerHTML=(second<10?'0'+second:second);
},1000);

/*猜你喜欢*/
$('.cai_like .re_content>li').mouseover(function(){
	$(this).children('.hover_text').show();
}).mouseout(function(){
	$(this).children('.hover_text').hide();
});

/*楼层效果*/
	//点击滚动到指定楼层
	$('#floors>ul>li').click(function(){
		//获取当前li下标
		var index=$(this).index();
		//声明变量
		var top=$('.floor').eq(index).offset().top;
		
		//设置滚动指定的位置
		//$('html').scrollTop(top);
		//加动画
		$('html').animate({scrollTop:top},500);
	});
	//声明数组获取所有floor的高度  push尾部追加
	var  heights=[];
	$('.floor').each(function(){
		heights.push($(this).offset().top);
	});
	//判断高度找到对应的楼层 滚动事件
	$(window).scroll(function(){
		//获取当前的滚动距离
		var top=$(window).scrollTop();
		//声明变量
		var index;
		//遍历
		for(var i=0;i<heights.length;i++){
			//判断top的值
			if(top>=heights[i] && top<heights[i+1]){
				index=i;
				//找到对应的F楼层
				$('#floors>ul>li').eq(index).css('background','#FF8414').siblings().css('background','');
			}else if(top>=heights[heights.length-1]){
				index=heights.length-1;
				$('#floors>ul>li').eq(index).css('background','#FF8414').siblings().css('background','');
			}
		}
	});

//滚动监听 
window.onscroll=function(){
	var y=document.documentElement.scrollTop || window.pageYOffset;
	var floors=document.getElementById('floors');

	if(y>500){
		floors.style.top='0px';
	}else if(y<500){
		floors.style.top='480px';
	}
}




})