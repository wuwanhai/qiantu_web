$(function () {
    $('#add-cate').click(function () {
        $('#btn-dialogBox').dialogBox({
            hasClose: true,
            hasBtn: true,
            confirmValue: '确定',
            confirm: function () {
                alert('添加成功');
            },
            cancelValue: '取消',
            title: '添加分类',
            content: '<input class="new-cate-name" type="text" autofocus="true" placeholder="请输入新的分类名" />'
        });
    })

    $('#update-cate').click(function(){
        $('#btn-dialogBox').dialogBox({
            hasClose: true,
            hasBtn: true,
            confirmValue: '确定',
            confirm: function () {
                alert('修改成功');
            },
            cancelValue: '取消',
            title: '修改分类',
            content: '<input class="update-cate-name" type="text" autofocus="true" placeholder="请输入新的分类名" />'
        });
    })
    $('#delete-cate').click(function(){
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
})