
jQuery(function($){
	$(function(){
		$(".list").on('mouseenter',function(){
			$(this).find('dd').show().find('li').addClass('active1');
		}).on('mouseleave',function(){
			$(this).find('dd').hide()
		})
	})
})
/*设置搜索框的移入移出事件*/
	jQuery(function($){
		$(function(){
			$(".home-list").on('mouseenter',function(){
				clearTimeout(timer)
			$(".goods-list").show();
		}).on('mouseleave',function(){
			hide1();
		});
		$(".goods-list").on("mouseenter",'li',function(){
			$(this).addClass("active")
		}).on('mouseleave','li',function(){
			$(this).removeClass("active")
		})
		$(".goods-list").on('mouseenter',function(){
			clearTimeout(timer)
		}).on('mouseleave',function(){
			hide1()
		});
		var timer = null;
		function hide1(){
			timer=setTimeout(function(){
				$(".goods-list").hide()
			},100)
		}
	})
/*jQuery(function(){
	$(function(){
		$(".home-list").on('mouseenter',function(){
		$(".goods-list").show();
	}).on('mouseleave',function(){
		$(".goods-list").hide();
	})
	$(".goods-list").on("mouseenter",'li',function(){
		$(this).addClass("active");
		$(this).show();
	}).on('mouseleave','li',function(){
		$(this).removeClass("active");
		$(this).hide();
	})
})
*/
	/*$(".home-list").on('mouseenter',function(){
		$(".goods-list").find("li").show()
	});
	$(".goods-list").on("mouseover",'li',function(){
		$(this).addClass("active")
	}).on('mouseleave','li',function(){
		$(this).removeClass("active")
	})
	$(".goods-list").on('mouseleave',function(){
		$(".goods-list").find("li").hide();
	})*/
	/*轮播图左边的菜单事件*/
	$('.banner-left').on('mouseover','li',function(e){
		//alert(1)
		$(this).find('a').css({color:"orange"})
		e.stopPropagation()
	}).on('mouseleave','li',function(e){
		$(this).find('a').css({color:"white"})
		e.stopPropagation()
	});
})
	/*轮播图*/
	$(function(){
            // 2）用jquery选择器获取页面元素
            var $focus = $('#banner-photos');
            var $bigpic = $('.photos');
            var $smallpic = $('.doc');

            var index = 0;//显示图片索引
            var len = $bigpic.children('li').length;

            // 初始化
            show();

            // 3）使用jquery事件与动画
            var timer = setInterval(animation,3000);

            // 鼠标移入停止，移除继续
            $focus.on('mouseenter',function(){
                clearInterval(timer);
            }).on('mouseleave',function(){
                timer = setInterval(animation,3000);
            });

            // 点击小图切换效果
            $smallpic.on('click','span',function(){
                index = $(this).index();
                show();
            });

            //前后按钮
            /*$focus.on('click','a.prev',function(){
                index--;
                show();
            }).on('click','a.next',function(){
                index++;
                show();
            });*/

            // 图片切换
            function animation(){
                index++;
                show();
            }

            // 显示图片
            // 当前大图透明度为1，其他为0
            // 当前小兔透明度为1，其他为0.5
            function show(){
                if(index==len){
                    index=0;
                }else if(index < 0){
                    index = len - 1;
                }
                $bigpic.children('li').eq(index).animate({opacity:1}).siblings().animate({opacity:0});
                $smallpic.children('span').eq(index).css({"background":"orange"}).siblings().css({"background":"#717171"});
            }
        });
	/*购物车入口*/
	jQuery(function($){
		$(function(){
			$('.header-right').on('mouseenter',function(){
				$('.hide-carlist').show().prev('div').css({"background":"white","border-bottom":"none"})
			}).on('mouseleave',function(){
				hide2();
			})
			var timer = null;
			function hide2(){
					timer=setTimeout(function(){
						$(".hide-carlist").hide()
					},1)
			$('.header-right').css({"background":"#fafafa","border-bottom":"1px solid #AAAAAA"})
			}
		$(".hide-carlist").on('mouseenter',function(){
			$('.hide-carlist').show().prev('div').css({"background":"white","border-bottom":"none"})
			clearTimeout(timer)
			}).on('mouseleave',function(){
				hide2()
			})
		})
	})
	
	/*轮播图上面的导航菜单*/
	jQuery(function($){
		$(function(){
			$('.main-top-middle').on('mouseenter','.show1',function(){
				$('.jiancai').show()
			}).on('mouseleave','.show1',function(){
				hide3();
			})
		})
		var timer = null;
		function hide3(){
				timer=setTimeout(function(){
					$('.jiancai').hide()
				},100)
		}
		$(".jiancai").on('mouseenter',function(){
			clearTimeout(timer)
			$()
		}).on('mouseleave',function(){
			hide3();
		})
	})
	jQuery(function($){
		$(function(){
			$('.main-top-middle').on('mouseenter','.show2',function(){
				$('.jiaju').show()
			}).on('mouseleave','.show2',function(){
				hide4();
			})
		})
		var timer = null;
		function hide4(){
			timer=setTimeout(function(){
				$('.jiaju').hide()
			},100)
		}
		$(".jiaju").on('mouseenter',function(){
			clearTimeout(timer)
			$()
		}).on('mouseleave',function(){
			hide4();
		})
	})
	/*商品栏选项卡插件*/
	jQuery(function($){
		$(function(){
		/*初始化*/
			$('.ul-top').children().eq(0).addClass('ads-box');
			$('.ul-bottom').eq(0).show().siblings().hide();
		/*开始进入点击事件*/
		$('.ul-top').on('mouseenter','li',function(){
			var index=$(this).index();
			//console.log(index)
			$('.ul-top').find('li').removeClass('ads-box');
			$(this).addClass('ads-box');
			$('.add-bottom').find('.ul-bottom').eq(index).show().siblings().hide();
			})
		})
	})
	
	/*楼层定时器，图片轮播*/
	jQuery(function($){
		var $box=$('.family-middle-top');
		var $ul=$box.children('ul');
		var timer=null;
		var now=0;
			$(function(){
				
				timer=setInterval(fn,5000)
				$box.on('mouseenter',function(){
					clearInterval(timer)
				});
				$box.on('mouseout',function(){
					timer=setInterval(fn,5000)
				});	
			});
			function fn(){
				now++;
				//console.log(now)
				if(now>=0){
					$ul.animate({left:"-500px"},1000)
				}
				if(now>1)
				{
					$ul.animate({left:"0px"},1000)
					now=0;
				}	
				
			}
	});
	/*返回顶部信息仓*/
	jQuery(function($){
		$(".retrunTop-top").on('mouseenter',function(){
		$(".p1").show()
		}).on('mouseleave',function(){
			hide1();
		})
		var timer = null;
		function hide1(){
				timer=setTimeout(function(){
					$(".p1").hide()
				},100)
		}
		$(".p1").on('mouseenter',function(){
			clearTimeout(timer)
		}).on('mouseleave',function(){
			hide1()
		})
	})
	/*返回顶部显示隐藏的图片*/
	jQuery(function($){	
		$(".retrunTop-bottom").on('mouseenter',function(){
		$(".p2").show()
		}).on('mouseleave',function(){
			hide1();
		})
		var timer = null;
		function hide1(){
				timer=setTimeout(function(){
					$(".p2").hide()
				},100)
		}
		$(".p2").on('mouseenter',function(){
			clearTimeout(timer)
		}).on('mouseleave',function(){
			hide1()
		})
	})
	/*点击返回顶部*/
	window.onload=function(){
		var go=document.getElementById('gogo');
		go.onclick=function(){
			//alert(1)
			var timer = setInterval(function(){
				window.scrollBy(0, -100);
				var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
				if(scrollT <= 0){
					clearInterval(timer);
				}
			}, 1);
		}
	}
	/*登录验证*/
	jQuery(function($){
		var $denglu=$('.denglu');
		$denglu.on('click',function(){
			var $zhanghao=$('.zhanghao').val();
			var $zhanghao1=$zhanghao.replace(/ /g,"");
			var $mima=$('.mima').val();
			var $zhanghao=$('.zhanghao').val();
			var $yanzheng=$('.shuruma').val();
			console.log($zhanghao)
			if($zhanghao1.charCodeAt(0)>=48 && $zhanghao1.charCodeAt(0)<=57){
				$('.notice1').html("*不能以数字开头");
			}else if($zhanghao1.length==0){
				$('.notice1').html("*用户名不能为空");
			}else if($zhanghao1.length<6 || $zhanghao1.length>20){
				$('.notice1').html("*用户名6到20之间");
			}else if(true){
				$('.notice1').html("用户名正确").css({"color":"blue"});
			}
			if($mima.length == 0){
				$('.notice2').html("*密码不能为空")
			}else if($mima.length<6 || $mima.length>20){
				$('.notice2').html("*密码6到20之间")
			}else{
				$('.notice2').html("密码正确").css({"color":"blue"});
			}
			if($yanzheng.length == 4){
				$('.notice3').html("验证码正确").css({"color":"blue"});
			}else if($yanzheng.length == 0){
				$('.notice3').html("*请输入验证码")
			}else{
				$('.notice3').html("*验证码不正确")
			}
			if($('.notice1').html() == "用户名正确" && $('.notice2').html() == "密码正确" && $('.notice3').html() == "验证码正确"){
				alert("恭喜你,登录成功")
			}
		})
	})
	/*注册验证*/
	jQuery(function($){
		$(function(){
			var $next=$('.nextone');
			$next.on('click',function(){
				var $phonenumber=$('.phone1').val();
				var $yanzheng2=$('.yangzheng2').val();
				var reg=/^(13[0-9]|14[0-9]|15[0-9]|18[0-9]|17[0-9])[0-9]{8}$/;
				var reg1=/^[0-9]{6}$/
				console.log($phonenumber)
				console.log(reg.test($phonenumber))
				if(reg.test($phonenumber)){
					$('.checknumber').html('手机验证正确，可以注册').css({"color":"blue"});
				}else{
					$('.checknumber').html('*请输入正确的手机号码');
				}if(reg1.test($yanzheng2)){
					$('.checkyanzheng').html('验证正确，注册').css({"color":"blue"});
				}else{
					$('.checkyanzheng').html('*请输入正确的验证码').css({"color":"red"})
				}
			})
		})
	});
	/*选项卡*/
	jQuery(function(){
		$(function(){
			var $list=$('.main-top-left1');
			var $productlist=$('#product-list');
			var $all=$('.product-listall')
			$list.on('mouseenter',function(){
				$productlist.show();
			}).on('mouseleave',function(){
				$productlist.hide();
			});
			$productlist.on('mouseenter',function(){
				$productlist.show();
			}).on('mouseleave',function(){
				$productlist.hide();
			})
		});
	});
	/*产品选项*/
	jQuery(function($){
		var $paihang=$('.paihang');
		var $rank=$('.goods_rank');
		var $feilei=$('.fenlei')
		//初始化
		$paihang.find('span').eq(0).css({"background":"#cfcfcf"});
		$rank.eq(0).show().siblings().hide();
		$paihang.on('mouseenter','span',function(){
			var index=$(this).index();
			//alert($feilei.children($rank))
			$paihang.children('span').eq(index).css({"background":"#cfcfcf"}).siblings().css({"background":"white"})
			$feilei.children($rank).eq(index).show().siblings().hide();
		});
		
		$rank.find('li').on('mouseenter','.l1',function(){
			var index=$(this).closest('li').index();
			$('.hide_img img').eq(index).show().siblings().hide();//console.log(index)
		}).on('mouseleave','.l1',function(){
			var index=$(this).closest('li').index();
			$('.hide_img img').eq(index).hide();
			
		})
	});
	//购买数量
	jQuery(function(){
		$('.sub').click(function(){
			var $num=$('.shuliang').val();
			var snum=0;
			snum=parseInt($('.storage_total_price').html())-parseInt($('.storage_price').html());
			if($num>0){
				$('.shuliang').val($num-=1);
				if($num==0){
					$('.storage_total_price').html('0');
				}else{
					$('.storage_total_price').html(snum);
				}				
			}
		});
		$('.add').click(function(){
			var $num=parseInt($('.shuliang').val());
			var anum=0;
			anum+=parseInt($('.storage_total_price').html())+parseInt($('.storage_price').html());
			$('.shuliang').val($num+=1);
			$('.storage_total_price').html(anum);	
		});
	});
	//商品详情栏里的评论，销量
	jQuery(function(){
		//初始化；
		$('.danhaolan li').eq(0).css({"background":"orange","color":"white"})
		$('.danhaolan').on('click','li',function(){
			$(this).css({"background":"orange","color":"white"}).siblings().css({"background":"#959FA9","color":"black"})
		})
	});
	//主页的楼梯效果
	jQuery(function($){
		$(function(){
				/*
					思路：
						1、给window绑定scroll事件
							1）当滚动到一定距离时，显示导航条
							2）当滚动到楼层对应位置时，高亮显示导航条对应楼层
						2、点击导航条，滚动到相应的楼层
						3、返回顶部
				 */
				var $nav = $('#loutinav1');
				var $floor = $('.louti');
				
				// 1、给window绑定scroll事件
				$(window).on('scroll',function(){
					// 获取滚动过的距离
					var scrollTop = $(window).scrollTop();

					// 1）当滚动到一定距离时，显示导航条
					if(scrollTop >= 1300){
						$nav.fadeIn();
					}else{
						$nav.fadeOut();
					}

					// 2）当滚动到楼层对应位置时，高亮显示导航条对应楼层
					// 目的：获得index值
					$floor.each(function(idx,ele){
						if(scrollTop >= $(ele).offset().top && scrollTop <= $(ele).offset().top + $(ele).outerHeight()/2){
							$nav.find('li').removeClass('active').eq(idx).addClass('active');
							return false;
						}
					});
				});

				// 2、点击导航条，滚动到相应的楼层
				$nav.on('click','li',function(){
					// 3、返回顶部
					if($(this).hasClass('last')){
						// $(window).scrollTop(0);
						$('html,body').animate({scrollTop:0});
						return;
					}
					var index = $(this).index();
					var scrollTop = $floor.eq(index).offset().top;
					// $(window).scrollTop(scrollTop);
					$('html,body').animate({scrollTop:scrollTop});
				});
			});
	});
	jQuery(function(){
		var $oul=$('.bed-right-list');
		$oul.on('mouseenter','li',function(){
			$(this).css({"border":"1px solid orange"});
		}).on('mouseleave','li',function(){
			$(this).css({"border":"1px solid gray"});
		})
		
	});
	/*购物车的左右运动的效果*/
	jQuery(function($){
		$(function(){
			$car=$('.list-car')
			$gouwuche=$('.retrunTop-middle');
			$gouwuche.on('click',function(){
				//alert(1)
				var Right=parseInt($car.css("right"));
				//alert(Right)
				if(Right<0){
					$car.stop().animate({right:33});
				}else{
					$car.stop().animate({right:-235});
				}
			})
		})
	});
	/*放大镜的效果*/
	jQuery(function($){
		$(function(){
			$("#product-main").on('mouseenter',".zhongtu",function(){
				$('.fangdajing,.mirror').show();
				$(document).on('mousemove',function(e){
					
					var w=e.clientX-$('.zhongtu').offset().left-100;
					var h=e.clientY-$('.zhongtu').offset().top-50+$(window).scrollTop();
					if(w<=0){
						w=0;
						}else if(w>=200){
							w=200;
							}
					if(h<=0){
						h=0
						}else if(h>=200){
							h=200;
							}
					$('.mirror').css({left:w,top:h})
					$('.fangdajing').css({backgroundPosition:(-w*2)+"px "+(-h*2)+"px"})
					e.stopPropagation();
				})
				
			}).on('mouseleave',".product-main-left",function(e){
				$('.fangdajing,.mirror').hide();
				
			});
			
			
		})
		
	})
	/*购物车飞入的效果*/
	jQuery(function(){
		$(function(){
			var $carlist=$('.list-car');
			var $btn=$('.b2');
			var $currentLi = $('.product-photo');
			var $currentImg = $currentLi.find('img');
			// 1>复制当前商品图片(用于实现动画效果)
			var $copyImg = $currentImg.clone('img');
			// 先获取原图片的位置（为了设置复制图片的初始位置）
			var startPos = $currentImg.offset();
			// 获取原图片的宽度
			var startWidth = $currentImg.width();
			// 把复制的图片写入页面，并设置样式
			 // 1）给按钮绑定点击事件
			$btn.on('click',function(){
					$copyImg.css({
	            		position:'absolute',
	            		left:startPos.left,
	            		top:startPos.top,
	            		width:startWidth
	            	});
	            	$copyImg.appendTo('body');
	            	// 先获取购物车的位置
            	var cartPos = $carlist.offset();
            	$copyImg.animate({left:cartPos.left,top:cartPos.top + $carlist.outerHeight(),width:0,opacity:0},function(){
            		// 删除用于动画的图片
            		$copyImg.remove();

            		// 2>复制当前商品所有信息(用于往购物车添加)
	            	var $copyLi = $currentLi.clone();
	            	var $copy=$('<li/>');
	            	var $text=$('<p/>');
	            	$text.html('林昌地板 L9051 圆盘豆   x1')
	            	$copyLi.appendTo($copy);
	            	$text.appendTo($copy);
	            	$copy.appendTo('.fuzhi');
	            	// 3)在购物车列表中添加移除按钮
	            	$('<span/>').addClass('btn-close').html('&times;').appendTo($copyLi);
            	});
			});
			 $carlist.click(function(e){
            	// e.target，事件源对象：点击事件是从哪个元素触发
            	if($(e.target).hasClass('btn-close')){
            		$(e.target).closest('li').remove();
            	}	
            });
		})
		
	});
	jQuery(function(){
		$(function(){
			//购物车localStorage
			var storage=window.localStorage;
			$('.tijiao .b2').click(function(){
				var img=$('.gopicture img').attr('src');
				var num=$('.product-num-top .shuliang').val();
				var price=parseInt($('.details_price').text());
				var infor=$('.details_infor').html();
				storage.clear();
				if(!storage.getItem('图像'))storage.setItem('图像',img);
				if(!storage.getItem('数量'))storage.setItem('数量',num);
				if(!storage.getItem('价格'))storage.setItem('价格',price);
				if(!storage.getItem('信息'))storage.setItem('信息',infor);		
			});
			$('.table3 img').attr('src',storage.getItem('图像'));
			$('.table3 .count').val(storage.getItem('数量'));
			$('.storage_price').html(storage.getItem('价格'));
			$('.storage_total_price').html(parseInt(storage.getItem('价格'))*parseInt(storage.getItem('数量')));
			$('.storage_infor').html(storage.getItem('信息'));
		});
	});
