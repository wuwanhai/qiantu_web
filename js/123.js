'use strict';

//商品列表页控制器

app.controller('productlistCtrl', ['$scope', '$http', '$rootScope', '$routeParams','myCache', function ($scope, $http, $rootScope,$routeParams,myCache ) {

    $scope.huandabeijing('.pro_big_box'); //变换背景

    //更换横或竖栏目
    $scope.bianShu = function () {
        $('.change_hs .b_shu').addClass('action');
        $('.change_hs .b_heng').removeClass('action');
        $('#heng_pdl').hide();
        $('#shu_pdl').show();
        localStorage.setItem('hsnav', 1);

        //console.log($(window).width());
        if($(window).width()<1670){ //屏幕宽小于1690时
            $('.pro_list .pro_list_ul').css({
                float: 'right',width: '950px'
            });
            $('.pro_nav_pro .shu_pdl').css('left',0);
            $('.pro_list .pro_list_ul li').css({
                marginRight: '23px'
            });
            //$('.pro_nav_pro .change_hs').css({
            //    'left':'100px'
            //});
        }
    };
    $scope.bianHeng = function () {
        $('.change_hs .b_heng').addClass('action');
        $('.change_hs .b_shu').removeClass('action');
        $('#shu_pdl').hide();
        $('#heng_pdl').show();
        localStorage.setItem('hsnav', 0);

        if($(window).width()<1670){ //屏幕宽小于1690时
            $('.pro_list .pro_list_ul').css({
                float: 'none',width: '1230px'
            });
            $('.pro_nav_pro .shu_pdl').css('left','-235px');
            $('.pro_list .pro_list_ul li').css({
                marginRight: '13px'
            });
            //$('.pro_nav_pro .change_hs').css({
            //    'left':'100px'
            //});
        }

    };
    //判断用户需要横或竖展示栏目
    var hsnav = 1;
    if (localStorage.getItem('hsnav')) {
        hsnav = localStorage.getItem('hsnav');
    }
    if (hsnav == 1) {
        $scope.bianShu();
    } else {
        $scope.bianHeng();
    }

    //竖表展开或伸缩全部
    $scope.isshowallshu = function (e) {
        //console.log($(e.target).index());
        $(e.target).addClass('action').siblings('.action').removeClass('action');
        if ($(e.target).index() == 0) {
            $('.d_ul .x_ul').show();
            $('.d_ul>li>a').hide();
            $('.d_ul>li>span').addClass('Sclick').children().addClass('fa-sort-up').removeClass('fa-sort-desc');
        } else {
            $('.d_ul .x_ul').hide();
            $('.d_ul>li>a').show();
            $('.d_ul>li>span').removeClass('Sclick').children().addClass('fa-sort-desc').removeClass('fa-sort-up');
        }
    };

    //竖表展开更多细节
    var sL = function sL($event, url, child) {
        //console.log(url);
        //console.log(child);
        if (!child) {
            //如果没有下拉列表着按父级跳转
            location.href = url;
        }

        if ($event.target.nodeName == 'I') {
            var x = $($event.target).parent();
        } else {
            var x = $($event.target);
        }
        /*x.parent().siblings().children('span').removeClass('Sclick');
         x.parent().siblings().children('.a1').fadeIn();
         x.parent().siblings().children('.x_ul').slideUp();
         x.parent().siblings().children('span').children().addClass('fa-sort-desc').removeClass('fa-sort-up');*/

        x.toggleClass('Sclick');
        x.siblings('.a1').fadeToggle();
        x.siblings('.x_ul').slideToggle();
        x.children().toggleClass('fa-sort-desc').toggleClass('fa-sort-up');
    };
    $scope.showList1 = $scope.showList2 = $scope.showList3 = $scope.showList4 = $scope.showList5 = $scope.showList6 = sL;
    $scope.showList7 = $scope.showList8 = $scope.showList9 = $scope.showList10 = $scope.showList11 = $scope.showList12 = $scope.showList13 = sL;
    $scope.showList14 = $scope.showList15 = $scope.showList16 = $scope.showList17 = $scope.showList18 = $scope.showList19 = sL;



    //点击二级列表
    var num_i = 0;
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {

        ////图片延迟加载
        //function loadimg(obj) {
        //    obj.lazyload({
        //        placeholder: "images/shuiyin.png",
        //        skip_invisible: false,
        //        threshold: 200,
        //        effect: "fadeIn",
        //        failurelimit: 15
        //    });
        //}
        //$(document).ready(function () {
        //    loadimg($('img'));
        //    //console.log(111);
        //});

        $scope.towColumnAddAction = function () {
            //console.log($('.heng_u1 li')[parseInt(idArr[1])+1]);
            //console.log($('.heng_u1 li:eq('+(parseInt(idArr[1])+1)+')')[0]);
            //console.log(111);

            //给竖栏二级栏目加class
            if (idArr[1] - 1 >= 0 || idArr[2] - 1 >= 0) {
                $('.d_ul>li:eq(' + (idArr[1] - 1) + ') .x_ul>li:eq(' + (idArr[2] - 1) + ') a').addClass('action');
            }

            //给横栏目加class
            $('.heng_u1 li:eq(' + (parseInt(idArr[1]) + 1) + ') a').addClass('action');
            //console.log($scope.proTwoColumns[idArr[1]-1].children);
            if (idArr[1] == 0) {
                $('.heng_u2').hide();
            } else if (!$scope.proTwoColumns[idArr[1] - 1].children) {
                $('.heng_u2').hide();
            } else {
                $('.heng_u2').show();
                $scope.proThreeColumns = $scope.proTwoColumns[idArr[1] - 1].children;
                $('.heng_u2 li:eq(' + (parseInt(idArr[2]) + 1) + ') a').addClass('action');
            }

            /*//去掉商品列表第四个li的margin_right
             $scope.clearMR = function () {
             var n = $('.pro_list_ul>li').length / 4;
             for (var i = 1; i <= n; i++) {
             $('.pro_list_ul>li:eq(' + parseInt(i * 4 - 1) + ')').css('marginRight', '0px');
             }
             };
             $scope.clearMR();*/

            //高亮显示关键字
            num_i++;
            if (num_i < 2) {
                return;
            } //让下面函数只执行一次
            if ($rootScope.proIndexId[4] == 'k') {
                //var str = $(".title_list").html();
                //console.log($(".title_list"));
                idArr[6] = idArr[6].replace(/\s*/ig, "");
                var arr = idArr[6].split('');

                $(".title_list").each(function () {
                    //console.log($(this).html());
                    for (var i = 0; i < arr.length; i++) {
                        var str = $(this).html();
                        var keyword = arr[i];
                        //console.log(keyword);
                        var regexKeyword = new RegExp(keyword, "ig");
                        $(this).html(str.replace(regexKeyword, "<b>" + regexKeyword.source + "</b>"));
                        //console.log(regexKeyword.source);
                    }
                });
            }
        };
        $scope.towColumnAddAction();
    });

    //点击三级列表
    $scope.threeColumnAddAction = function ($event, $index) {
        //console.log($event.target);
        $($event.target).parent().siblings().children('.action').removeClass('action');
        $($event.target).addClass('action');
    };

    //传入栏目ID
    $scope.proUrldata = $routeParams.pid;
    //console.log($scope.proUrldata);
    var idArr = $routeParams.pid.split(/\-/);
    //console.log(idArr);
    $rootScope.proNavActionIndex = idArr[0];
    $rootScope.proTwoColumnsIndex = idArr[1];
    $rootScope.proIndexId = idArr;


    //模型三级各栏目 0-0-0-0 - 0-0-0-0
    var list_modelnav=myCache.get('list_modelnav');
    if(list_modelnav){      //栏目缓存
        setTimeout(function(){
            $scope.proTwoColumns = list_modelnav[idArr[0]].children;
            //console.log($scope.proTwoColumns);
            $('.heng_u1,.heng_u2,.shu_pdl').children('strong').remove();
        },1);
    }else{
        $http.get($scope.qianUrl + '/api/models/columns').success(function (list) {
            //console.log(list);
            myCache.put('list_modelnav',list);
            //console.log(list);
            $scope.proTwoColumns = list[idArr[0]].children;
            //console.log($scope.proTwoColumns);
            $('.heng_u1,.heng_u2,.shu_pdl').children('strong').remove();
        });
    }

    //获取排序（下载量、风格、模型）

    //$rootScope.gzmodel = 0;
    //console.log(idArr[8]);
    $rootScope.gzmodel = idArr[8];
    if($rootScope.gzmodel>2||$rootScope.gzmodel<0||!($rootScope.gzmodel)){
        $rootScope.gzmodel=0;
    }
    if(idArr[0]!=0){
        $rootScope.gzmodel=0;
        // console.log($rootScope.gzmodel);
    }
    /*$scope.navModelLi1 = function ($event, $index) {
        $($event.target).parent().next().children('.action').removeClass('action');
        $($event.target).addClass('action');
        $rootScope.gzmodel = 1;
        if (idArr[4] == 'k') {
            location.href = '/product/' + idArr[0] + '-' + idArr[1] + '-' + idArr[2] + '-' + idArr[3] + '-' + idArr[4] + '-1-' + idArr[6] + '-' + idArr[7] + '-1-1-' + idArr[10];
        } else {
            location.href = '/product/' + idArr[0] + '-' + idArr[1] + '-' + idArr[2] + '-' + idArr[3] + '-' + idArr[4] + '-' + idArr[5] + '-' + idArr[6] + '-' + idArr[7] + '-1-1-' + idArr[10];
        }
    };
    $scope.navModelLi2 = function ($event, $index) {
        $($event.target).parent().prev().children('.action').removeClass('action');
        $($event.target).addClass('action');
        $rootScope.gzmodel = 2;
        if (idArr[4] == 'k') {
            location.href = '/product/' + idArr[0] + '-' + idArr[1] + '-' + idArr[2] + '-' + idArr[3] + '-' + idArr[4] + '-2-' + idArr[6] + '-' + idArr[7] + '-2-2-' + idArr[10];
        } else {
            location.href = '/product/' + idArr[0] + '-' + idArr[1] + '-' + idArr[2] + '-' + idArr[3] + '-' + idArr[4] + '-' + idArr[5] + '-' + idArr[6] + '-' + idArr[7] + '-2-2-' + idArr[10];
        }
    };*/
    $rootScope.downloads = 1;
    if($rootScope.gzmodel == 2){  //如果是只看免费，那默认选择以下载量排序
        $rootScope.downloads = 2;
    }
    $rootScope.styles = 0;
    $scope.Slist1 = function ($event, $index) {
        if ($event.target.nodeName != 'LI') {
            return;
        }
        $('.last_a2 span').text($($event.target).html());
        $rootScope.downloads = $($event.target).index();
        //console.log($rootScope.downloads);
        //location.href = '/product/' + idArr[0] + '-' + idArr[1] + '-' + idArr[2] + '-' + idArr[3] + '-' + idArr[4] + '-' + idArr[5] + '-' + idArr[6] + '-0-' + idArr[8] + '-' + $($event.target).index() + '-' + idArr[10];
        $scope.jump('/product/' + idArr[0] + '-' + idArr[1] + '-' + idArr[2] + '-' + idArr[3] + '-' + idArr[4] + '-' + idArr[5] + '-' + idArr[6] + '-0-' + idArr[8] + '-' + $($event.target).index() + '-' + idArr[10]);
    };
    $scope.Slist2 = function ($event, $index) {
        if ($event.target.nodeName != 'LI') {
            return;
        }
        $('.last_ra span').text($($event.target).html());

        var index = $($event.target).attr('data-val') ;
        $rootScope.styles = index;
        //console.log($rootScope.styles);
        //location.href = '/product/' + idArr[0] + '-' + idArr[1] + '-' + idArr[2] + '-' + idArr[3] + '-' + idArr[4] + '-' + idArr[5] + '-' + idArr[6] + '-0-' + idArr[8] + '-' + idArr[9] + '-' + $($event.target).index();
        $scope.jump('/product/' + idArr[0] + '-' + idArr[1] + '-' + idArr[2] + '-' + idArr[3] + '-' + idArr[4] + '-' + idArr[5] + '-' + idArr[6] + '-0-' + idArr[8] + '-' + idArr[9] + '-' + index);
    };

    if (idArr[9] == 0) {
        //给排序栏加状态
        $('.last_a2 span').text('最新');
    } else if (idArr[9] == 1) {
        $('.last_a2 span').text('热点下载');
    } else {
        $('.last_a2 span').text('下载量');
    }

    if (idArr[10] == 0) {
        $('.last_ra span').text('全部风格');
    } else if (idArr[10] == 1) {
        $('.last_ra span').text('现代风格');
    } else if (idArr[10] == 2) {
        $('.last_ra span').text('欧式风格');
    } else if (idArr[10] == 3) {
        $('.last_ra span').text('中式风格');
    } else if (idArr[10] == 5) {
        $('.last_ra span').text('北欧风格');
    }else if (idArr[10] == 6) {
        $('.last_ra span').text('工业风格');
    }else if (idArr[10] == 7) {
        $('.last_ra span').text('美式风格');
    }else if (idArr[10] == 8) {
        $('.last_ra span').text('日韩风格');
    }else if (idArr[10] == 9) {
        $('.last_ra span').text('东南亚风格');
    }else if (idArr[10] == 10) {
        $('.last_ra span').text('地中海风格');
    }else if (idArr[10] == 4) {
        $('.last_ra span').text('其它风格');
    }

    if (idArr[0] != 0) {
        $('.nav_modelLi').hide();
        $('.nav_last_raLi').hide();
    }

    //判断k或L,整合,根据id获取商品列表详情
    //console.log(idArr);
    if (idArr[4] == 'k') {
        $rootScope.proNavActionID = 0;
        var getId = 'k';
        //k-1-沙发-0- 0-0-1 -40
        for (var i = 5; i < idArr.length; i++) {
            getId += '-' + idArr[i];
        }
        //console.log(idArr[9]);

        if (idArr[5] == 1) {
            //给排序栏加状态
            $('.nav_modelLi.l1 a').addClass('action');$('.nav_modelLi.l2 a').removeClass('action');
        } else if (idArr[5] == 2) {
            $('.nav_modelLi.l2 a').addClass('action');$('.nav_modelLi.l1 a').removeClass('action');
        }

        $('.xzl_list').hide().prev().hide();

    } else {
        $rootScope.proNavActionID = idArr[4];
        var getId = 'l';
        for (var i = 4; i < idArr.length; i++) {
            getId += '-' + idArr[i];
        }

        if (idArr[8] == 1) {
            $('.nav_modelLi.l1 a').addClass('action');$('.nav_modelLi.l2 a').removeClass('action');
        } else if (idArr[8] == 2) {
            $('.nav_modelLi.l2 a').addClass('action');$('.nav_modelLi.l1 a').removeClass('action');
        }
    }
    var getIdn = getId;
    getIdn += '-' + 40;
    //console.log(getIdn);
    $http.get($scope.qianUrl + '/api/models/search/' + getIdn).success(function (list) {
        console.log(list);
        //console.log(list.choose);
        $('.pro_list_ul').children('strong').remove();
        if (!list.choose.left) {
            $('.nav_modelLi').hide();
        }
        if (!list.choose.right) {
            $('.nav_last_raLi').hide();$('.nav_last_a2Li').hide();
        }
        if (list.choose.right) {
            if (!list.choose.right[1]) {
                !list.choose.right[0].style && $('.nav_last_raLi').hide();
                !list.choose.right[0].order && $('.nav_last_a2Li').hide();
            }
        }

        $('.pro_list_ul').css('backgroundImage', 'none'); //去掉等待加载背景
        if (list.data.length == 0) {
            $('.pro_list_ul').html("<li class='seachKong'>抱歉，未找到您需要的结果。请重新搜索。</li>");
            $('.pro_num').hide();
            return;
        }

        $scope.productList = list;
        if ($scope.productList.current_page == 0) {
            $scope.productList.current_page = 1;
        }
        //console.log($scope.productList.data);
        //console.log($.parseJSON(list.data[0].preview));
        $scope.numPage = Math.ceil($scope.productList.total / $scope.productList.per_page);

        //分页条
        $scope.goNPage = $scope.productList.current_page; //给页数输入框赋值

        list.current_page - 2 < 1 && $('.pro_num li:eq(4)').hide();
        list.current_page - 1 < 1 && $('.pro_num li:eq(0),.pro_num li:eq(1),.pro_num li:eq(5)').hide();
        list.current_page == 0 && $('.pro_num li:eq(9),.pro_num li:eq(10)').show();
        list.current_page == 1 && $('.pro_num li:eq(9)').show();
        //console.log(list.current_page*1+2);
        list.current_page * 1 + 2 > list.last_page && $('.pro_num li:eq(8)').hide();
        list.current_page * 1 + 1 > list.last_page && $('.pro_num li:eq(7),.pro_num li:eq(13),.pro_num li:eq(14)').hide();
        list.current_page == list.last_page && $('.pro_num li:eq(2),.pro_num li:eq(3)').show();
        list.current_page == list.last_page - 1 && $('.pro_num li:eq(3)').show();

        list.last_page == 2 && $('.pro_num').children(':eq(2),:eq(3),:eq(8),:eq(9),:eq(10)').hide();
        list.last_page == 3 && $('.pro_num').children(':eq(2),:eq(3),:eq(9),:eq(10)').hide();
        list.last_page == 4 && $('.pro_num').children(':eq(2)').hide();
        (list.last_page == 4 && list.current_page==3) && $('.pro_num').children(':eq(3)').hide();
        
        //总页数大于10时显示 ...
        if (list.last_page < 10 || list.current_page + 3 > list.last_page) {
            $('.pro_num li:eq(11),.pro_num li:eq(12)').hide();
        }

        if (list.prev_page_url == '') {
            $('.pro_num').children(':eq(0),:eq(1),:eq(2),:eq(3),:eq(4),:eq(5)').hide();
        }
        if (list.next_page_url == '') {
            $('.pro_num').children(':eq(7),:eq(8),:eq(9),:eq(10),:eq(11),:eq(12),:eq(13),:eq(14)').hide();
        }
    }).error(function (e) {
        $('.pro_list_ul').children('strong').remove(); //移除背景等待加载图
        // console.log(e);
        if (e.error.errors.correct) {
            $('.pro_list_ul').html('\n                <li class=\'seachKong\'>\n                <img src="images/noting.png"/>' + e.error.errors.message[0] + '\n                <span>\n                    <a href="/product/0-0-0-0-k-1-' + e.error.errors.correct[0] + '-0-0-0-1">' + e.error.errors.correct[0] + '</a>\n                    <a href="/product/0-0-0-0-k-1-' + e.error.errors.correct[1] + '-0-0-0-1">' + e.error.errors.correct[1] + '</a>\n                <a href="/product/0-0-0-0-k-1-' + e.error.errors.correct[2] + '-0-0-0-1">' + e.error.errors.correct[2] + '</a>\n                <a href="/product/0-0-0-0-k-1-' + e.error.errors.correct[3] + '-0-0-0-1">' + e.error.errors.correct[3] + '</a>\n                <a href="/product/0-0-0-0-k-1-' + e.error.errors.correct[4] + '-0-0-0-1">' + e.error.errors.correct[4] + '</a>\n                </span>\n                </li>\n            ');
        } else {
            $('.pro_list_ul').html('\n                <li class=\'seachKong\'>\n                <img src="images/noting.png"/>' + e.error.errors.message[0] + '\n                </li>\n            ');
        }
        $('.pro_num').hide();
        $('.pro_list_ul').css('backgroundImage', 'none'); //去掉等待加载背景
    });
    ////点击加载更多
    //var i=0;
    //$scope.jiazaigengduo=function(){
    //    var getIdm=getId;
    //    i++;
    //    getIdm+='-'+(16*i+40);
    //    $http.get($scope.qianUrl+'/api/models/search/'+getIdm).success(function(list){
    //        console.log(list);
    //        $scope.productList=list;
    //        $scope.numPage=Math.ceil($scope.productList.total/$scope.productList.per_page);
    //    });
    //};

    //载入对应大图，鼠标移入弹大图
    $scope.showBigImg = function (e) {

        //判断用户是否需要弹出大图
        var sbimg = 0;
        if (localStorage.getItem('sbimg')) {
            sbimg = localStorage.getItem('sbimg');
        }
        if (sbimg == 1) {
            return;
        }

        if ($(e.target)[0].nodeName == 'IMG') {
            var i = $(e.target).parent().parent().parent().index();
        } else {
            var i = $(e.target).parent().parent().index();
        }
        //console.log($(e.target).parent().parent()[0]);
        $scope.bigImgTitle = $scope.productList.data[i];
        $scope.bigbigImg = ($.parseJSON($scope.productList.data[i].preview))[0];
        // $scope.bigbigImg = $scope.productList.data[i].thumb;
        //console.log($.parseJSON($scope.productList.data[i].preview).cover_image);

        $('#show_Bigimg').stop(true).fadeIn().css({ top: e.screenY, left: e.screenX });
        $scope.imgXY = function (e) {
            //console.log(e.screenX);
            $('#show_Bigimg').css({ top: e.clientY + 20, left: e.clientX + 30 });
            if ($(window).height() < $('#show_Bigimg').height() + parseInt(e.clientY)) {
                var y = e.clientY - $('#show_Bigimg').height()-20;
                $('#show_Bigimg').css('top', y);
            }
            if ($(window).width() < $('#show_Bigimg').width() + parseInt(e.clientX)+50) {
                var x = e.clientX - $('#show_Bigimg').width()-40;
                $('#show_Bigimg').css('left', x);
            }
        };
    };
    $scope.closeBigImg = function () {
        $('#show_Bigimg').stop(true).fadeOut();
    };

    //去详情页
    $scope.gotodetail = function (url) {
        open(url);
    };

    //关闭模态框
    $scope.closeBox = function () {
        $('.modal_dialog').fadeOut();
    };

    //打开确认下载框
    $scope.opendownloadbox = function (e, mid) {
        e.stopPropagation(); //停止冒泡
        if (!localStorage.getItem('uMsg')) {
            layer.tips("<p style='color: #112233'>登录后才可下载，<a style='color: red' href='/login'>点击此处</a>前往登录...</p>", $(e.target), {
                tips: [1, '#eee'],
                time: 4000
            });
            // location.href = '/login';
            return;
        }
        layer.tips("下载请求中，请稍后...", $(e.target), {
            tips: [1, '#000'],
            time: 4000
        });
        var uMsg = localStorage.getItem('uMsg');
        $http.get($scope.qianUrl + '/api/models/details/' + mid).success(function (list) {
            //console.log(list);
            $scope.Adetail = list;
            /*if ($rootScope.userdata.assets < $scope.Adetail.money) {
                //var tipshtml = "您的欧币不足以下载此模型，可<a href='/mepay' style='color:#e80000'>点击这里</a>前往个人中心充值";
                //$scope.globalTips(tipshtml, 5000);

                layer.tips("您的欧币余额不足以下载此模型，可<a href='/mepay' style='color:#e80000'>点击这里</a>前往个人中心充值", $(e.target), {
                    tips: [1, '#000'],
                    time: 4000
                });

                return;
            } else {*/
                var obj = {
                    model_id: $scope.Adetail.id
                };
                var uMsg = localStorage.getItem('uMsg');
                $http.post($scope.qianUrl + '/api/member/download?token=' + uMsg, $.param(obj), { languageColumn: 'name_eu' }, { 'Content-Type': 'application/x-www-form-urlencoded' }).success(function (p) {
                    //console.log(p);
                    if (p.file) {
                        //if (p.target == "_self") {
                        location.href = p.file;
                        //} else {
                        //    open(p.file);
                        //}
                        ////$scope.globalTips('操作成功'); //全局提示框
                        layer.tips("操作成功", $(e.target), {
                            tips: [1, '#000'],
                            time: 4000
                        });
                    }
                }).error(function (err) {
                    // console.log(err);

                    if ($rootScope.userdata.assets < $scope.Adetail.money) {
                        layer.tips("您的欧币余额不足以下载此模型，可<a href='/mepay' style='color:#e80000'>点击这里</a>前往个人中心充值", $(e.target), {
                            tips: [1, '#000'],
                            time: 4000
                        });
                        return;
                    }

                    if(err.error.errors.error[0]=='请支付后进行下载'){
                        $('.modal_dialog').fadeIn().children().hide();
                        $('.download_box').show();
                    }else{
                        layer.tips(err.error.errors.error[0], $(e.target), {
                            tips: [1, '#ff3333'],
                            time: 4000
                        });
                        $('.download_box').hide();
                    }

                });
            // }
        });
        //确认下载
        $scope.modeldownload = function () {
            var obj = {
                build: 'ob',
                model_id: $scope.Adetail.id
            };
            //console.log(obj);
            var uMsg = localStorage.getItem('uMsg');
            $http.post($scope.qianUrl + '/api/member/download?token=' + uMsg, $.param(obj), { languageColumn: 'name_eu' }, { 'Content-Type': 'application/x-www-form-urlencoded' }).success(function (p) {
                //console.log(p);
                if (p.file) {
                    location.href = p.file;
                    $('.modal_dialog').fadeOut();
                    //$scope.globalTips('支付成功'); //全局提示框
                    layer.msg('支付成功');
                    $rootScope.getuserdataheader(); //重新加载头部，更新已有欧币
                } else {
                    layer.msg('支付失败');
                }
            }).error(function (e) {
                //console.log(e);
                layer.msg('支付失败');
            });
        };
    };

    //点击收藏
    $scope.dianjishoucang = function (e, mid) {
        if (!localStorage.getItem('uMsg')) {

            layer.tips("<p style='color: #112233'>登录后才可收藏，<a style='color: red' href='/login'>点击此处</a>前往登录...</p>", $(e.target), {
                tips: [1, '#eee'],
                time: 4000
            });

            // location.href = '/login';
        }
        e.stopPropagation(); //停止冒泡

        var uMsg = localStorage.getItem('uMsg');
        $http.get($scope.qianUrl + '/api/member/collect/category?token=' + uMsg).success(function (p) {
            //console.log(p);
            $scope.zhenshouchang();
        }).error(function (e) {
            //console.log(e);
            var obj = { type: 1, title: '我的模型' };
            var uMsg = localStorage.getItem('uMsg');
            $http.post($scope.qianUrl + '/api/models/classified?token=' + uMsg, $.param(obj), { languageColumn: 'name_eu' }, { 'Content-Type': 'application/x-www-form-urlencoded' }).success(function (p) {
                //console.log(p);
                $scope.zhenshouchang();
            }).error(function (e) {
                //console.log(e);
            });
        });
        $scope.zhenshouchang = function () {
            var obj = {
                model_id: mid,
                type: 1,
                categorys: 0
            };
            var uMsg = localStorage.getItem('uMsg');
            $http.post($scope.qianUrl + '/api/models/collect?token=' + uMsg, $.param(obj), { languageColumn: 'name_eu' }, { 'Content-Type': 'application/x-www-form-urlencoded' }).success(function (p) {
                //console.log(p);
                //$scope.globalTips(p.message);
                layer.tips("操作成功", $(e.target).parents('a'), {
                    tips: [3, '#000'],
                    time: 4000
                    //tipsMore:true
                });
                $(e.target).unbind('click');
            }).error(function (err) {
                //console.log(e);
                if (err.error.errors.errors) {
                    //$scope.globalTips(err.error.errors.errors.message);
                    console.log($(e.target)[0]);
                    layer.tips("您已经收藏过该模型了",  $(e.target).parents('a'), {
                        tips: [3, '#000'],
                        time: 4000
                        //tipsMore:true
                    });
                } else {
                    layer.tips("操作失败", $(e.target).parents('a'), {
                        tips: [3, '#000'],
                        time: 4000
                        //tipsMore:true
                    });
                }
            });
        };
    };
}]);