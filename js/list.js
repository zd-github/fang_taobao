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

//logo 更多市场 
$('.logo_search .shop .shop_detail').mouseover(function(){
	$(this).children('ul').show();
}).mouseout(function(){
	$(this).children('ul').hide();
})

//二级导航
$("#first_li").mouseenter(function(){
	$('#first_li_cnt').show();
	$('#first_li_cnt>ul>li').mouseenter(function(){
		$(this).children('.li_th').children('.p1').css({'color':'#F56293'});
		$(this).children('.li_content').show();
	}).mouseleave(function(){
		$(this).children('.li_th').children('.p1').css({'color':''});
		$(this).children('.li_content').hide();
	})
}).mouseleave(function(){
	$('#first_li_cnt').hide();
});




})

