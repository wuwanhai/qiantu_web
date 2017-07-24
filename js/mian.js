$(function () {
	
	add_works($('.content.content-classify'));  //初始化加载   (模型分类加载)
	function add_works(add_space) {
		var works_data = [	//	img(作品图片)   author_img（作者头像）   name(作者名字)  fav(查看量)  download（下载量）  coin(价格)
	   		{ "img" : "img/01.jpg" , "author_img" : "img/author.01.png" , "name" : "fdsafdsaf" , "fav" : "12" , "download" : "12" , "coin" : "12" },
	    	{ "img" : "img/01.jpg" , "author_img" : "img/author.01.png" , "name" : "fdsafdsaf" , "fav" : "12" , "download" : "123" , "coin" : "12" },
	    	{ "img" : "img/01.jpg" , "author_img" : "img/author.01.png" , "name" : "fdsafdsaf" , "fav" : "12" , "download" : "126" , "coin" : "12" },
	    	{ "img" : "img/01.jpg" , "author_img" : "img/author.01.png" , "name" : "fdsafdsaf" , "fav" : "12" , "download" : "124" , "coin" : "12" },
	    	{ "img" : "img/01.jpg" , "author_img" : "img/author.01.png" , "name" : "fdsafdsaf" , "fav" : "12" , "download" : "125" , "coin" : "12" }
	    ];
	    
	    var works_html = null;  // 定义加载的作品名
	    for(var i in works_data){  //循环获取的数据，然后根据有条数据来加载多个
	    	// 加载的数据
	    	works_html = ' <div class="works works-idnex fl ml8"> <a href="javascript:void(0);"> <div class="works-img"> <img src=' + works_data[i].img + 
		    	' /> </div> <div class="works-cont"> <div class="cont-show clear"> <a class="author clear" href="javascript:void(0);"> <span> <img src=' + works_data[i].author_img +
		    	'/> </span> <h3>'+ works_data[i].name + 
		    	'</h3> </a> <div class="details"> <ol> <li> <i class="fa fa-eye" aria-hidden="true"></i> <p> '+ works_data[i].fav +
		    	' </p> </li> <li> <i class="fa fa-cloud-download" aria-hidden="true"></i> <p>' + works_data[i].download +
		    	'</p> </li> </ol> </div> </div> <div class="cont-hide clear"> <ol> <li class="collection"> <a href="javascript:void(0);"> <i class="fa fa-star-o" aria-hidden="true"></i> <p>收藏</p> </a> </li> <li class=""> <a href="javascript:void(0);"> <i class="fa fa-download" aria-hidden="true"></i> <p>下载</p> </a> </li> <li class="price"> <p>千币：<em>'
		    	+ works_data[i].coin +'</em></p> </li> </ol> </div> </div> </a> </div> '
		    	
	    	add_space.append(works_html);  // 加载
	    }
	    var aWorks = add_space.find('.works');
    	aWorks.css('margin-left', 7.5).eq(0).css("margin-left" , 0);
	}
	
	
	
	add_works_show();	//  自动加载内容 （首页加载）
	function add_works_show() {
		add_works($('.content.content-index'));
		function add_works(add_space) {
			var works_data = [	//	img(作品图片)   author_img（作者头像）   name(作者名字)  fav(查看量)  download（下载量）  coin(价格)
		   		{ "img" : "img/01.jpg" , "author_img" : "img/author.01.png" , "name" : "fdsafdsaf" , "fav" : "12" , "download" : "12" , "coin" : "12" },
		    	{ "img" : "img/01.jpg" , "author_img" : "img/author.01.png" , "name" : "fdsafdsaf" , "fav" : "12" , "download" : "123" , "coin" : "12" },
		    	{ "img" : "img/01.jpg" , "author_img" : "img/author.01.png" , "name" : "fdsafdsaf" , "fav" : "12" , "download" : "124" , "coin" : "12" },
		    	{ "img" : "img/01.jpg" , "author_img" : "img/author.01.png" , "name" : "fdsafdsaf" , "fav" : "12" , "download" : "125" , "coin" : "12" },
		    	{ "img" : "img/01.jpg" , "author_img" : "img/author.01.png" , "name" : "fdsafdsaf" , "fav" : "12" , "download" : "126" , "coin" : "12" },
		    	{ "img" : "img/01.jpg" , "author_img" : "img/author.01.png" , "name" : "fdsafdsaf" , "fav" : "12" , "download" : "124" , "coin" : "12" },
		    	{ "img" : "img/01.jpg" , "author_img" : "img/author.01.png" , "name" : "fdsafdsaf" , "fav" : "12" , "download" : "125" , "coin" : "12" }
		    ];
		    
		    var works_html = null;  // 定义加载的作品名
		    for(var i in works_data){  //循环获取的数据，然后根据有条数据来加载多个
		    	// 加载的数据
		    	works_html = ' <div class="works works-idnex fl ml8"> <a href="javascript:void(0);"> <div class="works-img"> <img src=' + works_data[i].img + 
			    	' /> </div> <div class="works-cont"> <div class="cont-show clear"> <a class="author clear" href="javascript:void(0);"> <span> <img src=' + works_data[i].author_img +
			    	'/> </span> <h3>'+ works_data[i].name + 
			    	'</h3> </a> <div class="details"> <ol> <li> <i class="fa fa-eye" aria-hidden="true"></i> <p> '+ works_data[i].fav +
			    	' </p> </li> <li> <i class="fa fa-cloud-download" aria-hidden="true"></i> <p>' + works_data[i].download +
			    	'</p> </li> </ol> </div> </div> <div class="cont-hide clear"> <ol> <li class="collection"> <a href="javascript:void(0);"> <i class="fa fa-star-o" aria-hidden="true"></i> <p>收藏</p> </a> </li> <li class=""> <a href="javascript:void(0);"> <i class="fa fa-download" aria-hidden="true"></i> <p>下载</p> </a> </li> <li class="price"> <p>千币：<em>'
			    	+ works_data[i].coin +'</em></p> </li> </ol> </div> </div> </a> </div> '
			    	
		    	add_space.append(works_html);  // 加载
		    }
		}
	    
		works_marginLeft(); // 计算作品之间的间距
		function  works_marginLeft(add_num) {
			var speed = 0,
				speed2 = 4;
				
		    $('.content.content-index .works').each(function () {
		    	speed ++;
		    	if ( (speed-3)%5 == 0 ) {
			    	$('.content.content-index .works').eq(speed).css('margin-left', 0);
			    }
		    	$('.content.content-index .works').eq(speed2).css('margin-left', 6);
		    	speed2 += 5;
		    });
		}
		
		
		$(window).scroll(function() {  //滚动到底部时加载作品
			var $this = $(this),
				viewH = $(this).height(), //可见高度  
				contentH = $('body').get(0).scrollHeight, //内容高度  
				scrollTop = $(this).scrollTop(); //滚动高度  
			if(contentH - viewH - scrollTop <= 100  && $('.works').length <= 23 ) { //到达底部100px时,加载新内容  
				var add_num = 5;
		        add_works($('.content.content-index'));
		        works_marginLeft();
			}
		});
	}
	
	// end 自动加载内容
		
    
	/*		carousel		*/
	carousel_show();
	function carousel_show() {
		var ad_len = $("#carousel .b_img > li").length,
			b_img = $("#carousel .b_img"),
			liWidth = b_img.find('li').width();
			bnt_li = $("#carousel .bnt-list > li");
		
		var ad_index = 0;
		var adTimer = null;
		$('#carousel .b_img').width(liWidth*ad_len); //计算轮播图里面B_img的宽度
		
		function ad_img_show(){
			if( ad_index == ad_len ){
				ad_index = 0;
			} else if ( ad_index == -1 ) {
				ad_index = ad_len-1;
			}
			
			b_img.stop(true).animate({ 'left': -ad_index*liWidth })
			bnt_li.eq(ad_index).addClass('active').siblings().removeClass('active');
		};
		
		adTimer = setInterval(function () {
			ad_index++;
			ad_img_show();
		},3000);
		
		$('#carousel').hover(
			function () {
				clearInterval(adTimer);
			}, function () {
				adTimer = setInterval(function () {
					ad_index++;
					ad_img_show();
				},3000);
			}
		);	// end  鼠标移入移出时候停止/播放
		
		$('#b-left').click(function () {
			ad_index--;
			ad_img_show();
		}); // end  上一张
		
		$('#b-right').click(function () {
			ad_index++;
			ad_img_show();
		});	// end  下一张
		
		bnt_li.click(function() {
			ad_index = $(this).index();
			ad_img_show();
	    });	// end  点击切换
	};

	search_show(); //搜索点击显示和隐藏
	function search_show() {
		$('#search-show').width(0);
		$('#search-show .search-select').width(0);
		$('#search-show .search-filter').width(0);
		var onOff = true;
				$('#search-show .search-filter').css('overflow', 'hidden');
		
		$('#search-btn').click(function () {
			if ( onOff == true ) {
				$('#search-show .search-filter').css('overflow', 'inherit');
				$('#search-show').animate({ 'width' : 290 });
				$('#search-show .search-filter').animate({ 'width' : 100 });
				$('#search-show .search-select').animate({ 'width' : 172 });
				onOff = false;
			} else{
				$('#search-show').animate({ 'width' : 0 });
				$('#search-show .search-filter').css('overflow', 'hidden');
				$('#search-show .search-filter').animate({ 'width' : 0 });
				$('#search-show .search-select').animate({ 'width' : 0 });
				onOff = true
			}
			
		})
	};
	
	bigImg();
	$(window).scroll(function() {
		bigImg();
	});
	function bigImg(e) {
		var num = 0,
			a_left = 0,
    		a_top = 0;
        
		$('.works').each(function (e) {
			var _this = $(this);
			_this.mousemove(function(e){
				$('#show-bigimg').show();
				
				$('#show-bigimg img').attr('src', _this.find('.works-img > img').attr('src'));
				$('#show-bigimg ul li').eq(1).html(_this.find('.works-cont .price').html());
				
				a_top = e.clientY - $('#show-bigimg').height()-20;
                a_left = e.clientX - $('#show-bigimg').width()-40;
				$('#show-bigimg').css({
					'top': a_top,
					'left': a_left
				});
				if ($(window).height() > $('#show-bigimg').height() + parseInt(e.clientY)) {
	                a_top = e.clientY + 20;
	                $('#show-bigimg').css('top', a_top);
	            }
	            if ($(window).width() > $('#show-bigimg').width() + parseInt(e.clientX)+50) {
	                a_left = e.clientX + 40;
	                $('#show-bigimg').css('left', a_left);
	            }
			});
			_this.mouseleave(function(){  
				$('#show-bigimg').hide();
			});
			
		})
	};
	
	
	login_popup();
	function login_popup() {
		$('#login-bnt').click(function () {
			$('#login-popup').show();
		});
		$('#login-popup .close-bnt').click(function () {
			$('#login-popup').hide();
		});
		$('#login-popup .top-register-bnt').click(function () {
			$('#login-popup .box').hide();
			$('#login-popup .box').eq(1).show();
		})
		$('#login-popup .to-login-bnt').click(function () {
			$('#login-popup .box').hide();
			$('#login-popup .box').eq(0).show();
		});
		$('#login-popup .top-retrieval-bnt').click(function () {
			$('#login-popup .box').hide();
			$('#login-popup .box').eq(2).show();
		});
		
		$('#to-top').click(function () {
			var speed=200;//滑动的速度
	        $('body,html').animate({ scrollTop: 0 }, speed);
	        return false;
		})
		
		$('.apply-off-bnt').click(function () {  // 点击打开收录
			$('#apply-show').show();
		});
		
		$('.close-apply').click(function () {	// 点击关闭收录
			$('#apply-show').hide();
		})
	};
	
	tab_show();
	function tab_show() {
		
		$('.tab-nav li').removeClass('active');
		$('.tab-nav li').eq(0).addClass('active');
		$('.tab-cont .cont-page').hide();
		$('.tab-cont .cont-page').eq(0).show();
		$('.tab-cont .cont-page').eq(0).addClass('active');
		tab_addWorks();
		
		$('.tab-nav li').click(function () {
			var _index = $(this).index();
			$('.tab-nav li').removeClass('active').siblings().eq(_index).addClass('active');
			$('.tab-cont .cont-page').hide().siblings().eq(_index).show();
			$('.tab-cont .cont-page').removeClass('active').siblings().eq(_index).addClass('active');
			tab_addWorks();
		})
		
		
		add_works();  //	初始加载
		function add_works() {
			var works_data = [	//	img(作品图片)   author_img（作者头像）   name(作者名字)  fav(查看量)  download（下载量）  coin(价格)
		   		{ "img" : "img/index.01.jpg" , "author_img" : "img/author.01.png" , "name" : "fdsafdsaf" , "fav" : "12" , "download" : "12" , "coin" : "12" },
		    	{ "img" : "img/index.01.jpg" , "author_img" : "img/author.01.png" , "name" : "fdsafdsaf" , "fav" : "12" , "download" : "123" , "coin" : "12" },
		    	{ "img" : "img/index.01.jpg" , "author_img" : "img/author.01.png" , "name" : "fdsafdsaf" , "fav" : "12" , "download" : "124" , "coin" : "12" },
		    	{ "img" : "img/index.01.jpg" , "author_img" : "img/author.01.png" , "name" : "fdsafdsaf" , "fav" : "12" , "download" : "125" , "coin" : "12" }
		    ];
		    
		    var works_html = null;  // 定义加载的作品名
	    	//aWorks1.css('margin-left', 0);
	    	$('.tab-cont .cont-page').each(function () {
	    		var _this = $(this);
	    		for(var i in works_data){  //循环获取的数据，然后根据有条数据来加载多个
			    	// 加载的数据
			    	works_html = ' <div class="works works-idnex fl ml8"> <a href="javascript:void(0);"> <div class="works-img"> <img src=' + works_data[i].img + 
				    	' /> </div> <div class="works-cont"> <div class="cont-show clear"> <a class="author clear" href="javascript:void(0);"> <span> <img src=' + works_data[i].author_img +
				    	'/> </span> <h3>'+ works_data[i].name + 
				    	'</h3> </a> <div class="details"> <ol> <li> <i class="fa fa-eye" aria-hidden="true"></i> <p> '+ works_data[i].fav +
				    	' </p> </li> <li> <i class="fa fa-cloud-download" aria-hidden="true"></i> <p>' + works_data[i].download +
				    	'</p> </li> </ol> </div> </div> <div class="cont-hide clear"> <ol> <li class="collection"> <a href="javascript:void(0);"> <i class="fa fa-star-o" aria-hidden="true"></i> <p>收藏</p> </a> </li> <li class=""> <a href="javascript:void(0);"> <i class="fa fa-download" aria-hidden="true"></i> <p>下载</p> </a> </li> <li class="price"> <p>千币：<em>'
				    	+ works_data[i].coin +'</em></p> </li> </ol> </div> </div> </a> </div> '
				    	
			    	_this.append(works_html); // 加载
			    }
	        })
			    
		    var aWorks = $('.tab-cont .cont-page:eq(0) > .works');
	    	var aWorks1 = aWorks.eq(0);
	    	aWorks.css('margin-left', 7.5).eq(0).css("margin-left" , 0);
		};
		
		
		
		function tab_addWorks() {
			
			function addActive_works() { 
				var works_data = [	//	img(作品图片)   author_img（作者头像）   name(作者名字)  fav(查看量)  download（下载量）  coin(价格)
			   		{ "img" : "img/index.01.jpg" , "author_img" : "img/author.01.png" , "name" : "fdsafdsaf" , "fav" : "12" , "download" : "122" , "coin" : "12" },
			    	{ "img" : "img/index.01.jpg" , "author_img" : "img/author.01.png" , "name" : "fdsafdsaf" , "fav" : "12" , "download" : "123" , "coin" : "12" },
			    	{ "img" : "img/index.01.jpg" , "author_img" : "img/author.01.png" , "name" : "fdsafdsaf" , "fav" : "12" , "download" : "125" , "coin" : "12" },
			    	{ "img" : "img/index.01.jpg" , "author_img" : "img/author.01.png" , "name" : "fdsafdsaf" , "fav" : "12" , "download" : "126" , "coin" : "12" },
			    	{ "img" : "img/index.01.jpg" , "author_img" : "img/author.01.png" , "name" : "fdsafdsaf" , "fav" : "12" , "download" : "125" , "coin" : "12" }
			    ];
			    
			    var works_html = null;  // 定义加载的作品名
			    for(var i in works_data){  //循环获取的数据，然后根据有条数据来加载多个
			    	// 加载的数据
			    	works_html = ' <div class="works works-idnex fl ml8"> <a href="javascript:void(0);"> <div class="works-img"> <img src=' + works_data[i].img + 
				    	' /> </div> <div class="works-cont"> <div class="cont-show clear"> <a class="author clear" href="javascript:void(0);"> <span> <img src=' + works_data[i].author_img +
				    	'/> </span> <h3>'+ works_data[i].name + 
				    	'</h3> </a> <div class="details"> <ol> <li> <i class="fa fa-eye" aria-hidden="true"></i> <p> '+ works_data[i].fav +
				    	' </p> </li> <li> <i class="fa fa-cloud-download" aria-hidden="true"></i> <p>' + works_data[i].download +
				    	'</p> </li> </ol> </div> </div> <div class="cont-hide clear"> <ol> <li class="collection"> <a href="javascript:void(0);"> <i class="fa fa-star-o" aria-hidden="true"></i> <p>收藏</p> </a> </li> <li class=""> <a href="javascript:void(0);"> <i class="fa fa-download" aria-hidden="true"></i> <p>下载</p> </a> </li> <li class="price"> <p>千币：<em>'
				    	+ works_data[i].coin +'</em></p> </li> </ol> </div> </div> </a> </div> '
				    	
			    	$('.tab-cont .cont-page.active').append(works_html);  // 加载
			    }
			    $('.tab-cont .cont-page.active').find('.works').eq(0).css('margin-left', 0);
			}
			
		    
			works_marginLeft(); //	作品模块的间距
			function  works_marginLeft(add_num) {
				var speed = 0,
					speed2 = 0;
				$('.tab-cont .cont-page.active').find('.works').css('margin-left', 7.5);
	        	$('.tab-cont .cont-page.active').find('.works').eq(0).css('margin-left', 0);
				$('.tab-cont .cont-page.active').find('.works').each(function () {
			    	speed ++;
			    	if ( speed%5 == 0 ) {
				    	$('.tab-cont .cont-page.active').find('.works').eq(speed).css('margin-left', 0);
				    }
			    });
			}
				
			$(window).scroll(function() {
				var $this = $(this),
					viewH = $(this).height(), //可见高度  
					contentH = $('body').get(0).scrollHeight, //内容高度  
					scrollTop = $(this).scrollTop(); //滚动高度  
				if(contentH - viewH - scrollTop <= 100  && $('.tab-cont .cont-page.active').find('.works').length <= 40 ) { //到达底部100px时,加载新内容  
					var add_num = 5;
			        addActive_works(add_num);
			        works_marginLeft();
				}
			});
		}
			
		
	}
	
	
	choice();	// 选择
	function choice() {
		var choice_list_html = null,
			off_num =  0,
			list_cont = $('#classify-list .list-cont'),
			list_cont_Off = null;


		var timer = setInterval(function () {
			if ( $('#classify-list').attr('data-num') == 0 ) {
				list_cont_show($('#classify-list').attr('data-num'));
			} else if ( $('#classify-list').attr('data-num') == 1 ) {
				list_cont_show($('#classify-list').attr('data-num'));
			} else if ( $('#classify-list').attr('data-num') == 2 ) {
				list_cont_show($('#classify-list').attr('data-num'));
			} else if ( $('#classify-list').attr('data-num') == 3 ) {
				list_cont_show($('#classify-list').attr('data-num'));
			}
		},200)
		
		function list_cont_show(num) {
			list_cont.eq(num).find('li').click(function () {
				list_cont_Off = $(this).parent().parent().attr('data-off');
				
				if ( list_cont_Off == 'true' ) {
					var small_title = $(this).text();
					var big_title = $(this).parent().parent().find('.title').text();
					
					choice_list_html = '<li class="clear"> <div class="big-title">'+ big_title + '</div> <div class="small-title">'+ small_title +
					'</div> <div class="del" data-num="'+ $(this).parent().parent().index() +
					'" data-off="true">&times;</div> </li>'
					
					list_cont.eq(num).find('li').removeClass('active');
					$(this).addClass('active');
					$('#choice-list').append(choice_list_html);
					$(this).parent().parent().attr('data-off', 'false');
					
					off_num = $(this).parent().parent().index()+1;
					$('#classify-list').attr('data-num', off_num);
					
					console.log($('#classify-list').attr('data-num'));
					
					$('#choice-list .del').click(function () {
						off_num = $(this).attr('data-num');
						$('#classify-list').attr('data-num', off_num);
						list_cont.eq(off_num).find('li').removeClass('active');
						list_cont.eq(off_num).attr('data-off', $(this).attr('data-off'));
						$(this).parent().remove();
						console.log($('#classify-list').attr('data-num'));
					});
				}
				
			});
		}
			
	}
	
	vip_how();
	function vip_how() {
		$('.purchase-time li').click(function () {
			$('.purchase-time li').removeClass('active');
			$(this).addClass('active');
			var price = $(this).attr('data-price');
			$('.price em').html(price);
		})
	}
	
	
	
	
});
