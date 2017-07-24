$(function () {
	
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
	
})
