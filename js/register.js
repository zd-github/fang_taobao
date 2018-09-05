$(function(){
	/*头部导航*/
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


/*遮罩层  注册信息*/
$('section .zhuce_cnt a').click(function(){
	$('#zhao').css({width:$(document).width(),height:$(document).height()});
	$('#zhao').show();
	$('#zhao .register_content').show();
});
$('#zhao .register_content .close_zhuce').click(function(){
	$('#zhao').hide();
	$('#zhao .register_content').hide();
});

//拖拽效果begin
	$('#zhao .register_content').mousedown(function(e){
		$(this).css('cursor','move');

		var x=e.pageX-$(this).offset().left;
		var y=e.pageY-$(this).offset().top;

		$(document).mousemove(function(ent){
			var ll=ent.pageX-x;
			var tt=ent.pageY-y;
			if(ll<0){
				ll=0;
			}else if(ll>$(document).width()-$('#zhao .register_content').width()){
				ll=$(document).width()-$('#zhao .register_content').width();
			}
			if(tt<0){
				tt=0;
			}else if(tt>$(document).height()-$('#zhao .register_content').height()){
				tt=$(document).height()-$('#zhao .register_content').height();
			}

			$('#zhao .register_content').css({left:ll,top:tt});

		});

	});
	$(document).mouseup(function(){
		$('#zhao .register_content').css('cursor','');
		$(this).off('mousemove');
	});
	
//拖拽效果end

/*注册 正则匹配验证*/
var pattern=/^1(([358]\d)|(47)|(66)|(7[013678]))\d{8}$/;
$('#username').blur(function(){
	var v=$(this).val();
	if(pattern.test(v)){ 
		$('#zhao .register_content .tishi').text('输入正确');
	}else{
		$('#zhao .register_content .tishi').text('手机号码不符合标准!');
	}


})



})