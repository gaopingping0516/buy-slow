$(function(){

  var shopId;
  var areaId;

   
    //  2.1 获取shop
    Route.getgsshop( function (info) { 
      console.log(info);
      $(".market").html(template("tpl_market",info)); 
    })
    //  2.2 获取area
    Route.getgsshoparea( function (info) { 
      console.log(info);
      $(".location").html(template("tpl_location",info));  
     }) 

  //1.页面一加载就渲染商品
    render(); 
   //2.给一级菜单注册点击事件，渲染好shop和area
   $(".title li").on("click",function(){

   
   
     // 2.3 让对应的二级菜单显示
    var index=$(this).index();
    console.log(index);
    
    $(".main ul").eq(index).toggleClass("hide")
    ;

      // 2.4 给shop二级菜单注册点击事件，获取对应的id
      $(".main ul.market").on("click",'li',function(){
       shopId=$(this).data("shopid")
       //对勾显示隐藏
       $(this).children().removeClass("hide").end().siblings().children().addClass("hide");
       console.log(shopId);
       //收起二级菜单
       $(".main ul.market").addClass("hide");
      //  重新渲染
       render();
      })
      // 2.5 给area二级菜单注册点击事件，获取对应的id
      $(".main ul.location").on("click","li",function(){
        areaId=$(this).data("areaid")
      //对勾显示隐藏
       $(this).children().removeClass("hide").end().siblings().children().addClass("hide");

        //收起二级菜单
        $(".main ul.location").addClass("hide");

       console.log(shopId);
      //  重新渲染  
        render();

      })


   }) 

   

   function render(){
    Route.getgsproduct(shopId||0,areaId||0, function (info) { 
      console.log(info);
      $(".product ul").html(template("tpl_product",info));
      
     }) 
   }

  

})