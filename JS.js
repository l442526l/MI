	// 购物车
$(function(){
	 var $cart_hide = $(".topbar .container .topbar-cart .cart-hide");
	  var $cart = $(".topbar .container .topbar-cart");
		$cart.hover(function(){
			$cart_hide .slideDown();
		},function(){
			$cart_hide .stop(true).slideUp();
			});

		// 和获取search和input的焦点
		var $search=$(".h-search");
		var $search_text=$(".search-text");
		var $btn=$(".search-btn");
		var $search_hide=$(".search .search-xiala");
		$search_text.focus(function() {
			$search.addClass("focus");
			$search_text.addClass("focus-left");
			$search_hide.fadeIn(80);
		}).blur(function(){
			$search_text.removeClass("focus-left");
			$search.removeClass("focus");
			$search_hide.fadeOut(80);
		});


		// 主导航的二级菜单
	var $h_navli=$(".header .container .header-nav .h-navli-jq>.h-navli");
	var $nav_too_ul=$(".header .header-nav-too .container ul");
	var $header_nav_too=$(".header .header-nav-too");
	var $header_nav=$(".header .container .header-nav .h-navli-jq");
	$header_nav.hover(function() {
		set = setTimeout(function(){

		$header_nav_too.stop(true,true).slideDown(200);
			},300);
	}, function() {
		$header_nav_too.stop().slideUp(200); 
	});
	$h_navli.hover(function() {
		var _index=$(this).index();
		$nav_too_ul.eq(_index).stop().show().siblings().hide(); 
	}, function() {
		// // clearTimeout(set);
		$header_nav_too.hover(function() {
		
		$header_nav_too.slideDown(200).stop(true);
	}, function() {
	
			$header_nav_too.slideUp(200); 

		
	});

		
		

		
	});

// 侧边栏
	var $side_li=$(".side-nav .side-ul .side-li");
	var $side_nav_too=$(".side-nav .side-ul .side-li .side-nav-too");
	$side_li.hover(function() {
		var _index=$(this).index();
		$side_nav_too.eq(_index).show(true); 
	}, function() {
		$side_nav_too.hide(true);
	});
                     


								// 幻灯片

	var $item=$(".carousel .item");
	var $btn=$(".carousel-btn .btn");
	var $next=$(".carousel .next");
	var $prev=$(".carousel .prev");
	i =0;
	function slide(num){
		$item.eq(num).fadeIn(1000);
		$item.not($item.eq(num)).stop(true,true).fadeOut("1000");
		$btn.eq(num).addClass('active');
		$btn.not($btn.eq(num)).removeClass('active');
	}
	$btn.on("click", function(event) {
		i=$(this).index();
		slide(i);
	})
	$next.on("click", function () {
		i >= 6 ? i = 0 : i++;
		slide(i);
		
	})
		$prev.on("click",function(){
		i <= -6 ? i = 0 : i = i - 1;
		slide(i);
	})
function car(){
		cartime = setInterval(function(){
			i >= 6 ? i = 0 : i++;
			slide(i);
		},3000);
	}
	car();
	$(".carousel").hover(function(){
		clearInterval(cartime);
	},car)

	// 明星区
	function goods(btn,unti,list){
			list.css({
				"margin-left":-unti+"px",
				"transition":"margin-left 0.5s ease"

			});
			btn.addClass("btn-default");
		$(".mx-title-btn a").not(btn).removeClass("btn-default");
		
	}
	$mx_con_ui=$(".mx-con .mx-con-ul");
	$title_r=$(".mx-title-btn .title-r");
	$title_l=$(".mx-title-btn .title-l");

	$title_r.on('click', function(event) {
		goods($(this),1240,$mx_con_ui);
		// $mx_con_ui.css({
		// 			"margin-left":"-1240px",
		// 			'transition':"margin-left 0.5s ease"
		// 				});
		// 		$title_l.addClass('btn-default');
	});
	$title_l.on('click', function(event) {
		goods($(this),0,$mx_con_ui);
		// $mx_con_ui.css({
		// 	"margin-left":"1110px",
		// 	'transition':"margin-left 0.5s ease"
		// 		});
		// $title_l.addClass('btn-default');
		
	});

	// center的
	$c1_con=$(".c1-con .center-con-r-ul");
	$c1_t=$(".c1-t .center-nav-a");
	$c2_con=$(".c2-con .center-con-r-ul");
	$c2_t=$(".c2-t .center-nav-a");
	$c3_con=$(".c3-con .center-con-r-ul");
	$c3_t=$(".c3-t .center-nav-a");
	

	function fade(t,list){
		$(t).addClass('active').siblings().removeClass('active');
		$index=$(t).index();
		list.eq($index).css({
		display: 'block',
		});
		list.not(list.eq($index)).css({
			display: 'none',
		});
		
	}
	$c1_t.mouseover(function(event) {
		fade(this,$c1_con);
	});
	$c2_t.mouseover(function(event) {
		fade(this,$c2_con);
	});
	$c3_t.mouseover(function(event) {
		fade(this,$c3_con);
	});

	// $center_nav_a.mouseenter(function(event) {
	// 	$(this).addClass('active').siblings().removeClass('active');
	// 	$index=$(this).index();
	// 	$center_con_r_ul.eq($index).css({
	// 		display: 'block',
	// 	});
	// 	$center_con_r_ul.not($center_con_r_ul.eq($index)).css({
	// 		display: 'none',
	// 	});
	// });

	// 内容区

	var $neirong_11=$(".neirong-11 .neirong-lunbo");
	var $naxt=$(".neirong-11 .neirong-lr .naxt");
	var $prev=$(".neirong-11 .prev");
	var $neirong_btn=$(".neirong-11 .other-btn .btn");

	var $neirong_22=$(".neirong-22 .neirong-lunbo");
	var $naxt2=$(".neirong-22 .neirong-lr .naxt");
	var $prev2=$(".neirong-22 .prev");
	var $neirong_btn2=$(".neirong-22 .other-btn .btn");

	var $neirong_33=$(".neirong-33 .neirong-lunbo");
	var $naxt3=$(".neirong-33 .neirong-lr .naxt");
	var $prev3=$(".neirong-33 .prev");
	var $neirong_btn3=$(".neirong-33 .other-btn .btn");

	var $neirong_44=$(".neirong-44 .neirong-lunbo");
	var $naxt4=$(".neirong-44 .neirong-lr .naxt");
	var $prev4=$(".neirong-44 .prev");
	var $neirong_btn4=$(".neirong-44 .other-btn .btn");

	function cbtn(text,index){
		text.find('.btn').eq(index).addClass('active');
		text.find('.btn').not(text.find('.btn').eq(index)).removeClass('active');
		b = text.find(".active").data("num")-1;
		n = "-"+b*100+"%";
		text.css({"margin-left":n, "transition":"margin-left 0.5s ease"});
	}

	function cnaxt(text){
		o = text.find(".active").data("num");
		if (o==3) {
			return false;

		}else{
			text.find('.btn').eq(o).addClass('active');
			text.find('.btn').not(text.find('.btn').eq(o)).removeClass('active');
			n = "-"+o*100+"%";
			text.css({"margin-left":n, "transition":"margin-left 0.5s ease"});
			
		}
	}
	function cprev(text){
		// alert(123);
		o = text.find(".active").data("num")-1;
		if (o==0) {
			return false;

		}else{
			o--;
			text.find('.btn').eq(o).addClass('active');
			text.find('.btn').not(text.find('.btn').eq(o)).removeClass('active');
			n = "-"+o*100+"%";
			text.css({"margin-left":n, "transition":"margin-left 0.5s ease"});
			
		}
		

	}


		// if(o==3){
		// 	return false;
		// }else{
		// 	// text.find('.dot').eq(o).addClass('active');
		// 	text.find(".btn").eq(o).addClass("active");
		// 	text.find(".btn").not(text.find(".dot").eq(o)).removeClass("active");

		// 	} 
	$neirong_btn.on('click', function(event) {
		index=$(this).index();
		cbtn($neirong_11,index);
	});
		$neirong_btn2.on('click', function(event) {
		index=$(this).index();
		cbtn($neirong_22,index);
	});
		$neirong_btn3.on('click', function(event) {
		index=$(this).index();
		cbtn($neirong_33,index);
	});
		$neirong_btn4.on('click', function(event) {
		index=$(this).index();
		cbtn($neirong_44,index);
	});

	$naxt.on('click', function(event) {
		// alert(123);
		cnaxt($neirong_11);	
	});
	$prev.on('click', function(event) {
		cprev($neirong_11);
	});

	$naxt2.on('click', function(event) {
		// alert(123);
		cnaxt($neirong_22);	
	});
	$prev2.on('click', function(event) {
		cprev($neirong_22);
	});

	$naxt3.on('click', function(event) {
		// alert(123);
		cnaxt($neirong_33);	
	});
	$prev3.on('click', function(event) {
		cprev($neirong_33);
	});

	$naxt4.on('click', function(event) {
		// alert(123);
		cnaxt($neirong_44);	
	});
	$prev4.on('click', function(event) {
		cprev($neirong_44);
	});
	// 视屏	
	var $video_li=$(".video-con .video-li");
	var $play_btn=$(".play-btn");
	$video_li.hover(function() {
		$(this).addClass('play-btn-hover');
	}, function() {
		$(this).removeClass("play-btn-hover");

	});

	});


