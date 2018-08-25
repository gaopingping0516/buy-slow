 //优惠券标题列表
 route.getcoupon(function(data){
    var data=data.result;
    var obj={
        list:data,
    }
   
    $(".shangbiao-container").html(template("tpl",obj))
 })