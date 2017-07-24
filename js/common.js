$(function(){
    /* 切换左侧菜单active 状态 */
    /*$('.left-menu .menu-box ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
    })*/

    $('#header').load('header.html?data='+Math.random());

    $('#menu-box').load('menu.html?date='+Math.random(), function(){

        $('#menu-box >ul li').each(function(){
            var that = $(this);
            var dataHref = that.data('href');
            /*console.log(dataHref);
            console.log(window.location.href.indexOf(dataHref))*/
            if(window.location.href.indexOf(dataHref) > -1){
                that.addClass('active').siblings().removeClass('active');
            };
        })
    })

    $('#footer').load('footer.html?date='+Math.random());
})