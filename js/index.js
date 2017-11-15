$(function(){
	var num=0;
	var timer;
	
	//轮播图
	function aa(){
		clearInterval(timer);
		timer=setInterval(function(){
		num+=1;
		if(num>3){
			num=0;
		}
		$('#slider ul li').eq(num).stop().fadeIn(500).siblings('li').hide()
		$('#slider ol li').eq(num).addClass('active1').siblings('li').removeClass('active1')
	},2000)} 
	aa()
	$('#slider').mouseover(function(){
		clearInterval(timer);
		$(this).children("a").css("display","block")
		$('#slider').mouseout(function(){
			aa()
			$(this).children("a").css("display","none")
		})
	})
	
	
	$('#slider ol li').click(function(event){
		num=$(this).index()
		$('#slider ul li').eq(num).stop().fadeIn(500).siblings('li').hide()
		$(this).addClass('active1').siblings('li').removeClass('active1')
	});
	$('#item-1 .box>div').mouseenter(function(){
		$(this).children('div').css('display','block')
		$(this).siblings().children('div').css('display','none')
	})
	$('#item-2 ul li').hover(function(){
		$(this).css("opacity","0")
	},function(){
		$(this).css("opacity","1")
	})
	$("#item-4 ul li").mouseenter(function(){
		$(this).children("img").addClass('play')
		$("#item-4 ul li").mouseleave(function(){
			$(this).children("img").removeClass('play')
		})
	})
	$("#product ul li").mouseenter(function(){
		var str
		$(this).stop().animate({width:"352px"},100).siblings("li").stop().animate({width:"191px"},100)
		$(this).addClass('active2').siblings('li').removeClass('active2')
	})
})
