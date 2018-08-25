//国内折扣图文

var productid=window.location.href.split("?")[1].split("=")[1];

route.getmoneyctrlproduct(productid,function(data){
    var data=data.result[0];
   $(".gn-goods").html(template("tpl",data));
   $(".pinglun-list").html(template("tmp",data));
})