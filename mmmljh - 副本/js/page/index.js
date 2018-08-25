$(function () {
    //用来判断到底下面四个是显示还是隐藏的
    var flag = true;
    var dataId = 0;
    //从route中拿到这个函数，把要做的事通过回调传进去
    route.getmoneyctrl(dataId, function (data) {

        var data = data.result;
        var obj = {
            list: data,
        }
        $(".goods").html(template("tpl", obj));
    })

    $(".gengduo").click(function () {
        // if(flag==true){
        //     $(".yc").show();
        //     flag=false;
        // }else{
        //     $(".yc").hide();
        //     flag=true;
        // }

        if (flag == true) {
            $(".yc").show();
            flag = false;
        } else {
            $(".yc").hide();
            flag = true;
        }

    })

})