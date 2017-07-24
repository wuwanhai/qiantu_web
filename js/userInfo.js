$(function(){

    /*点击签到*/
    $('.user-name span.sign').on('click' , function(){
        $(this).text('已签到');
    })

    

    /* 设置日历的头 */
    var d = new Date();
    var years = d.getFullYear(),
        month = d.getMonth()+1;
    $('.calendar-box .calendar-head').text(years+"年"+month);

    /* 模板选中与非选中 */
    $('.fa.fa-square-o').each(function(){
        var that = $(this);
        that.on('click' , function(){
            $(this).toggleClass('fa-square-o').toggleClass('fa-check-square-o');
        })
    })

    //设置日历的签到，状态
    var cur_date = d.getDate();
    $('#calendar .day').each(function(){
        var _this = $(this);
        _this.on('click' , function(){
            if($(this).hasClass('active') ||$(this).hasClass('noSign') ) return;
            if($(this).text().trim() =="") return;
            $(this).addClass('active');
        })
        if($(this).text().trim() != ""){
            if(!$(this).hasClass('active') && parseInt($(this).text().trim()) <cur_date) {
                $(this).addClass('noSign');
            }
        }
    })
    //
    $('a.open_file').on('click', function(){
        $(this).parent().next('input').trigger('click');
    })
    //日历未签到日期显示灰色

    $('.fa.fa-trash-o').click(function(){
        $('#btn-dialogBox').dialogBox({
            hasClose: true,
            hasBtn: true,
            confirmValue: '确定',
            confirm: function () {
                alert('已成功删除分类');
            },
            cancelValue: '取消',
            title: '删除分类',
            content: '确定要删除分类吗？'
        });
    })

    //分页
    $('.pagination .page-obj >a:not(.dot)').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

    //交易记录
    var keyWords = '';
    $('.filter-box .filter').on('click' , function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).hasClass('all')){
            $('#record-table tr').show();
        }else {
            keyWords = $(this).text().trim()+'';
            $("#record-table tr:not('#thead')").hide().filter(":contains('"+keyWords+"')").show();
        }
    })

    if($('#record-table td.status')){
        var td_status = $('#record-table td.status');
        var flag = '审核通过';

        td_status.each(function(){
            var sta_text = $(this).text().trim();
            if(sta_text.indexOf(flag)>-1){
                $(this).next('td.option').addClass('no-delete');
            }
        })
    }


    $('#update_nickname').click(function(){
        console.log(123);
        $('#btn-update').dialogBox({
            hasClose: true,
            hasBtn: true,
            confirmValue: '确定',
            confirm: function () {
                alert('修改成功');
            },
            cancelValue: '取消',
            title: '修改昵称',
            content: '<input class="update-cate-name" type="text" autofocus="true" placeholder="请输入新的昵称" />'
        });
    })
    $('#update_email').click(function(){
        $('#btn-update').dialogBox({
            title: '修改绑定邮箱',
            hasClose: true,
            hasBtn: true,
            confirmValue: '确定',
            confirm: function () {
                alert('修改成功');
            },
            cancelValue: '取消',
            content: '<input class="update-cate-name" type="text" autofocus="true" placeholder="请输入新的邮箱" />'
        });
    })
    $('#update_phone').click(function(){
        $('#btn-update').dialogBox({
            title: '修改安全手机',
            hasClose: true,
            hasBtn: true,
            confirmValue: '确定',
            confirm: function () {
                alert('修改成功');
            },
            cancelValue: '取消',
            content: '<input class="update-cate-name" type="text" autofocus="true" placeholder="请输入安全手机" />'
        });
    })
    $('#update_password').click(function(){
        $('#btn-update').dialogBox({
            title: '修改密码',
            hasClose: true,
            hasBtn: true,
            confirmValue: '确定',
            confirm: function () {
                alert('修改成功');
            },
            cancelValue: '取消',
            content: '<input class="update-old-password" type="text" autofocus="true" placeholder="请输入旧密码" style="margin-bottom: 8px;" /><input class="update-new-password" type="text" placeholder="请输入新密码" style="margin-bottom: 8px;" /><input class="update-new-password2" type="text" placeholder="请确认新密码" />'
        });
    })

})