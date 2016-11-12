$(function(){
	var $tvclose=$(".tvclose"),
		$tvclose_up=$(".tvclose_up"),
		$tvclose_down=$(".tvclose_down"),
		$tv_point=$("#tv_point"),
		$yaoKong_point=$("#yaoKong_point"),
		$geren=$(".geren"),
		$skill=$(".skill"),
		$shixi=$(".shixi"),
		$expirence=$(".expirence"),
		$mianshi_online=$(".mianshi_online"),
		$onlineQuiz=$("#onlineQuiz"),
		$mianshi_close=$(".mianshi_close"),
		$hover_me=$(".hover_me"),
		$iconBx=$(".iconBx"),
		$tap_1=$(".tap_1"),
		$tap_2=$(".tap_2"),
		$tap_3=$(".tap_3"),
		$tap_4=$(".tap_4"),
		$me_pic=$(".me_pic"),
		$myName=$(".myName"),
		$label=$(".label"),
		$skills=$(".skills"),
		$line_div=$(".line>div"),
		$practice=$(".practice"),
		$otherExp=$(".otherExp"),
		$school=$(".school"),
		$society=$(".society"),
		$zhengshu=$(".zhengshu"),
		$afterClose=$(".afterClose"),
		$work=$("#yaoKong .work"),
		$firstPage=$("#firstPage"),
		$backToTv=$(".backToTv"),
		$body=$("body"),
		$secondPage=$("#secondPage"),
		$personInfo=$("#personInfo"),
		$secondPageWrapper=$("#secondPageWrapper")
		;
		console.log("bodyHeight:"+$('body').height());
		console.log("htmlHeight:"+$('html').height());
		$()
	// 电视开关控制    （打开电视的时候如何做到缓慢退出）？
	function tv_on_off(){
		// $afterClose.css("display","none")
		$afterClose.fadeOut();
		var tvStatus=$tvclose.css("display");
		if (tvStatus=="none") {
			$tvclose.css("display","block");
			// $tvclose.show(1000);
			// $tvclose.fadeIn(1000);
			setTimeout(function(){
				$tvclose.addClass("tvclose.change");
				$tvclose_up.addClass("tvclose_up_change");
				$tvclose_down.addClass("tvclose_down_change");
				
			},100)
		}
		else if (tvStatus=="block") {
			$tvclose.css("display","none");
			// $tvclose.fadeOut(1000);
			// $tvclose.hide(1000);
			setTimeout(function(){
				$tvclose.removeClass("tvclose.change");
				$tvclose_up.removeClass("tvclose_up_change");
				$tvclose_down.removeClass("tvclose_down_change");
			},500)
			
		}
		// alert(tvStatus);
	}
	// 电视开关控制
	$yaoKong_point.click(function(){
		tv_on_off();
	})

	// 点击电视上的开关
	$tv_point.click(function(){
		tv_on_off();
	});

	// hover me消失
	function removeHoverMe(){
		$hover_me.hide();
		setTimeout(function(){
			$hover_me.removeClass('hover_me_move');
		},100);
	}

	// 把个人资料移到左侧
	function fileLeft(){
		removeHoverMe();
		$iconBx.hide();
		setTimeout(function(){
			$me_pic.addClass("me_pic_change");
			$myName.addClass("myName_change");
			$label.addClass("label_change");
			$tap_1.addClass("tap_1_change");
			$tap_2.addClass("tap_2_change");
			$tap_3.addClass("tap_3_change");
			$tap_4.addClass("tap_4_change");
		})
	}

	// 遥控器上点击不同资料按钮，电视内容切换
	$geren.click(function(){
		if ($tvclose.css("display")=="block") {
			$afterClose.fadeIn(1000);
		}
		else{
			
			$(this).siblings().removeClass("yk_active");
			$(this).addClass("yk_active");
			$skills.css("display","none");
			$practice.css("display","none");
			$otherExp.css("display","none");

			$me_pic.removeClass("me_pic_change");
			$myName.removeClass("myName_change");
			$label.removeClass("label_change");
			$tap_1.removeClass("tap_1_change");
			$tap_2.removeClass("tap_2_change");
			$tap_3.removeClass("tap_3_change");
			$tap_4.removeClass("tap_4_change");
			setTimeout(function(){
				
				$hover_me.show();
				$iconBx.show();
				$hover_me.addClass('hover_me_move');
			},1000)
		}
	})
	 
	$skill.click(function(){
		if ($tvclose.css("display")=="block") {
			$afterClose.fadeIn(1000);
		}
		else{
			$(this).siblings().removeClass("yk_active");
			$(this).addClass("yk_active");
			fileLeft();
			var skillsStatus=$skills.css("display");
			if (skillsStatus=="none") {
				$practice.css("display","none");
				$otherExp.css("display","none");
				$line_div.removeClass("line_change");
				$skills.show();
				setTimeout(function(){
					$line_div.addClass("line_change");
				},200);
			}	
		}
	})
	
	$shixi.click(function(){
		if ($tvclose.css("display")=="block") {
			$afterClose.fadeIn(1000);
		}
		else{
			$(this).siblings().removeClass("yk_active");
			$(this).addClass("yk_active");

			fileLeft();
			var practiceStatus=$practice.css("display");
			if(practiceStatus=="none"){
				$skills.css("display","none");
				$otherExp.css("display","none");
				setTimeout(function(){
					$practice.fadeIn();
				},500)

			}	
		}
	})

	$expirence.click(function(){
		if ($tvclose.css("display")=="block") {
			$afterClose.fadeIn(1000);
		}
		else{
			$expirence.siblings().removeClass("yk_active");
			$expirence.addClass("yk_active");
			fileLeft();
			var expirenceStatus=$otherExp.css("display");
			if (expirenceStatus=="none") {
				$skills.css("display","none");
				$practice.css("display","none");
				$school.css("opacity","0");
				$society.css("opacity","0");
				$zhengshu.css("opacity","0");
				setTimeout(function(){
					$otherExp.show();
					// $school.addClass("school_change");
					// $society.addClass("society_change");
					// $zhengshu.addClass("zhengshu_change");
					$school.css("opacity","1");
					$society.css("opacity","1");
					$zhengshu.css("opacity","1");
				},500)
			}
		}	
	})

	//更多作品展示
	$work.click(function(){
		if ($tvclose.css("display")=="none") {
			tv_on_off();
		}	
		setTimeout(function () {
			$secondPageWrapper.fadeIn('slow', function() {
				$firstPage.addClass('firstPage_move');
				$personInfo.fadeIn().addClass('personInfo_move');
			});
		},500);//min:300
		// setTimeout(function(){
		// 	$personInfo.removeClass('personInfo_move');
		// },1300);
	})

	$backToTv.click(function(){
		$('body,html').animate({ scrollTop: 0,  }, 1000);
		setTimeout(function(){
			$firstPage.removeClass('firstPage_move');
			$personInfo.removeClass('personInfo_move');
		},1000)
		// setTimeout(function(){

		// },2000)
		setTimeout(function(){
			$secondPageWrapper.fadeOut('fast');
			$personInfo.fadeOut();
			//$secondPage.hide();//FF
			if ($tvclose.css("display")=="block") {
				$tvclose.hide();
			}
		},2000)	
	})

	//一键在线面试功能
	$whiteboard=$(".whiteboard");
	$author=$(".author");
	$mianshi_online.click(function() {
		if ($tvclose.css("display")=="none") {
			tv_on_off();
		}
		$firstPage.fadeOut('slow',function(){
			$onlineQuiz.fadeIn('fast');
		});
		setTimeout(function(){
			$(".greeting p").animate({width:282}, '400');
		},600);
		setTimeout(function(){
			$(".greeting p").hide();
			$author.addClass('author_move');
			$whiteboard.addClass('whiteboard_move');
			

		},1500);
		setTimeout(function(){
			$(".wb_start").css("display","block");
			$(".author ul li").css('opacity', '1');
		},2000);
		// setTimeout(function(){
		// 	// $(".author ul").css('display', 'block');
		// 	$(".author ul li").css('opacity', '0');
		// },4000);
		
		// $firstPage.addClass("firstPage_move");
		// setTimeout(function(){
		// 	$onlineQuiz.show();
		// 	$onlineQuiz.addClass('onlineQuiz_move');
		// },100)

		// setTimeout(function(){
		// 	$onlineQuiz.show();
		// },1100)
		// $firstPage.addClass("firstPage_move");
		// setTimeout(function(){
		// 	$firstPage.addClass("firstPage_move");
		// 	$onlineQuiz.show();
		// },1000)
		// setTimeout(function(){
		// 	$onlineQuiz.show();
		// 	$onlineQuiz.removeClass('onlineQuiz_move');
		// 	$firstPage.hide();
		// },1150)
	});

	$mianshi_close.click(function() {

		$onlineQuiz.fadeOut('fast','swing',function(){
			$firstPage.fadeIn('slow');
			$(".greeting p").show();
			$(".greeting p").animate({width:32}, '400');
			$author.removeClass('author_move');
			$whiteboard.removeClass('whiteboard_move');
			$(".author ul li").css('opacity', '0');
			$(".answer").find('p').css('opacity', '0');
			$(".answer").each(function() {
				$(this).css('display', 'none');
			});
			// $(".wb_start").css("display","none");
		});

		// setTimeout(function(){
		// 	$author.removeClass('author_move');
		// 	$whiteboard.removeClass('whiteboard_move');
		// 	// alert($(".autor ul li"));
		// },1000);
		// setTimeout(function(){
		// 	$(".author ul").css('display', 'none');
		// 	$(".author ul li").css('opacity', '0');
		// },2000);

		// $onlineQuiz.removeClass('onlineQuiz_move');
		// $firstPage.removeClass("firstPage_move");
		// setTimeout(function(){
		// 	$onlineQuiz.hide();
		// },1000)


	// 	setTimeout(function(){
	// 		$firstPage.removeClass("firstPage_move");
	// 		$onlineQuiz.hide();
	// 	},1000)
	// 	setTimeout(function(){
	// 		$onlineQuiz.addClass('onlineQuiz_move');
	// 		$firstPage.show();
	// 	},1000)//ff:1200;other:820
		
		setTimeout(function(){
			//$secondPage.hide();//FF
			if ($tvclose.css("display")=="block") {
				$tvclose.hide();
			}
		},600)
	});

	//面试提问与回答板块
	$(".qustion>li").each(function(index, el) {
		$(this).click(function() {
			$(".answer").each(function() {
				$(this).css('display', 'none');
			});
			$(".answer"+(index+1)).css('display', 'block');
			setTimeout(function () {
				$(".answer"+(index+1)).find('p').css('opacity', '1');
				$(".answer"+(index+1)).siblings().find('p').css('opacity', '0');
			},200);
		});
	});
	
	// 面试时间判断
	function greetTime(){
		var now=new Date();
		var nowTime=now.getHours();
		if (nowTime<8 && nowTime>0) {
			$(".greeting_time").html("凌晨");
		}else if(nowTime>=8 && nowTime<12){
			$(".greeting_time").html("早上");
		}else if(nowTime>=12 && nowTime<14){
 			$(".greeting_time").html("中午");
		}else if(nowTime>=14 && nowTime<18){
			$(".greeting_time").html("下午");
		}else{
			$(".greeting_time").html("晚上");
		}
	}
	greetTime();

	// 回到顶部
	// function addEvent(element,type,handler){
	// 	if (addEventListener) {
	// 		element.addEventListener(type,handler,false);
	// 	}else if (attchEvent) {
	// 		element.attachEvent("on"+type,false);
	// 	}else{
	// 		element["on"+type]=handler;
	// 	}
	// }
	// addEvent($(document),"scroll",testScroll);
	
	$("#backToTop").hover(function() {
		$(".btp_p").text('不如回到顶部再看一遍');
	},function(){
		$(".btp_p").text('好嗨森！你看到了这里');
	});

	function testScroll(){
		var st=$(window).scrollTop();
		if (st<=300) {
			$("#backToTop").css('opacity', '0');
		}else if(st<=500 && st>300){
			$("#backToTop").css('opacity', '1');
			$(".btp_p").text('好嗨森！你看到了这里');
		}else{
			$("#backToTop").css('opacity', '1');
			$(".btp_p").text('你一定很爱我/害羞');
		}
	}
	addEventListener("scroll",testScroll,false);

	$("#backToTop").click(function() {
		$(".pow_pic2").animate({top: -300},200).addClass('pow_pic2_move');
		$("body,html").animate({scrollTop: 0}, 1000);
		setTimeout(function(){
			$("#backToTop").css('opacity', '0');
			$(".pow_pic2").animate({top: 48}, 10).removeClass('pow_pic2_move');
		},1000);
	});
	
	//from original author

	// $(window).scroll(function() {
	// 	var st=$(window).scrollTop();
	// 	if (st<=300) {
	// 		$("#backToTop").fadeIn();
	// 	}else if (st<=500 && st>300) {
	// 		$("#backToTop").fadeOut();
	// 		$(".btp_p").text('好嗨森！你看到了这里');
	// 	}
	// 	else{
	// 		$("#backToTop").fadeOut();
	// 		$(".btp_p").text('你一定很爱我/害羞');
	// 	}
	// });

})