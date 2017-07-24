$(function(){

    $('.tab').each(function(){
        var SELF = $(this);
        var tabItem = SELF.find('>.tab-list >li'),
            _index,
            tabContentItem = SELF.find('>.tab-content-box >.tab-content');
        tabItem.on('click' , function(){
            _index = $(this).index();
            //console.log(_index);
            $(this).stop(true).addClass('active').siblings().removeClass('active');
            tabContentItem.stop(true).removeClass('active').hide().eq(_index).fadeIn().addClass('active');
        })
    });

    /* 计算充值千币金额 */
    var PROP = 10,
        k_coin = 0,
        recharge_money = $('#recharge_money')
        k_coin = $('#k-coin');
    
    k_coin.text(parseInt(recharge_money.val()) * PROP);
    $('#recharge_money').on('keyup  change', function(){

        var r_money = (parseInt($(this).val()) ? parseInt($(this).val()) : 1) * PROP;
        k_coin.text(r_money);
    })

    /* 删除上传模型的列表 */
    var cacheData = null;
    $('.del-modTd').on('click',function(){
        if(window.confirm('确定要删除吗？')){
            cacheData = 
            $(this).parents('tr.upload-mod-tr').next('tr.upload-mod-tr2').remove();
            $(this).parents('tr.upload-mod-tr').remove();
        };
    })

    $('.btn-addone').on('click' , function(){
        console.log(12);
        $(this).siblings('table.up-mod').find('.upload-mod-tr').eq(0).clone(true).appendTo($('table.up-mod'));
        $(this).siblings('table.up-mod').find('.upload-mod-tr2').eq(0).clone(true).appendTo($('table.up-mod'));
    })
    
})