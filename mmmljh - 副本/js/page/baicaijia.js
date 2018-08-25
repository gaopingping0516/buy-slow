    //白菜价顶部导航
    //从route中拿到这个函数，把要做的事通过回调传进去
    var ulwidth = 0;
    //route.baicaijiatitle(function (data) {
    //
    //    $(".nav-ul>ul").html(template("tpl", data));
    //
    //    //拿到数据渲染上去后动态获取到ul的宽
    //    //遍历每个li的宽加起来就是ul的宽
    //    $(".nav-ul>ul>li").each(function (index, ele) {
    //        ulwidth += $(ele).outerWidth(true)
    //    })
    //    $(".nav-ul>ul").css("width", ulwidth + "px");
    //
    //    new IScroll(".nav-ul", {
    //        scrollX:true
    //    });
    //
    //    $(".nav-ul>ul>li>a").on("click", function () {
    //        //哪个标签点了哪个下面加2px的边框
    //        $(".nav-ul>ul>li>a").removeClass("boxborderbottom");
    //        $(this).addClass("boxborderbottom");
    //
    //
    //        //拿到titleid,以后就可以直接往后台传了
    //        var titleid = $(this).attr("data-id");
    //        route.getbaicaijiaproduct(titleid, function (data) {
    //
    //            $(".bcj-center").html(template("tmp", data))
    //        })
    //    })
    //
    //    //首屏加载 相当于点击了第一个a标签
    //    $(".nav-ul>ul>li>a").eq(0).trigger('click');
    //})
    //
    route.baicaijiatitle(function (data) {
        //console.log(data)
        $(".nav-ul>ul").html(template("tpl", data));
        $(".nav-ul>ul>li").each(function (i, e) {

            ulwidth += $(this).outerWidth(true);
        });
        $(".nav-ul>ul").css("width", ulwidth + 3 + "px");

        new IScroll(".nav-ul", {
            scrollX: true,
            indicators: {
                el: '#indicator',
                fade: false,
                ignoreBoundaries: false,
                interactive: false,
                listenX: true,
                listenY: true,
                resize: false,
                shrink: false,
                speedRatioX: 0,
                speedRatioY: 0,
            }
        });
        $(".nav-ul>ul>li>a").on("click", function () {
            $(".nav-ul>ul>li>a").removeClass("boxborderbottom");
            $(this).addClass("boxborderbottom");
            var width = 0;
            var that = $(this)[0];
            $(".nav-ul>ul>li").each(function (i, e) {
                if ($(this).children()[0] != that) {
                    width += $(this).outerWidth(true);
                } else {
                    return false;
                }
            });

            var titleid = $(this).data("id");
            route.getbaicaijiaproduct(titleid, function (data) {
                $(".bcj-center").html(template("tmp", data));
            });


        });


        $(".nav-ul>ul>li>a").eq(0).trigger('click');
    })