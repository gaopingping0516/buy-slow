    //国内折扣
    //从route中拿到这个函数，把要做的事通过回调传进去
    route.inlanddiscount(function (data) {
       
        var data = data.result
       
        var obj = {
            list: data,
        }
        $(".discount-goods").html(template("tpl", obj));
    })