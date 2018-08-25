
var productid = window.location.href.split("?")[1].split("=")[1]; // 获取从上一页得到的categoryId的值,并分割出来只要那个id的number类型的值
//图文
route.getproduct(productid, function (data) {
    var data=data.result[0];
    $(".bj-info").html(template("tpl",data));
   
    var productName=data.productName;
      var reg = /([^\s]+)\s.*/; 
      productName = productName.replace(reg, "$1");
    $(".product-name").text(productName)
})


// 评论
route.getproductcom(productid, function (data) {
    var data=data.result;
    var obj={
        list:data
    }
    $(".pingjia-container").html(template("tmp",obj));
    
})