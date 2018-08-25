$(function () {
  //渲染列表标题
  Route.getcategorytitle(function (info) {
    // console.log(info);
    $(".mb_category").html(template("tpl_catename", info))


    // 给标题注册点击事件，注册事件前，先拿到列表内容
    $(".category_title ").on("click", function () {
      var titleid = $(this).data("id");
     var length= $(this).siblings().children().length;
    //  console.log(length);
     var that=this;
     if(length<=0){
      Route.getcategory(titleid, function (info) {
        console.log(info);

        //坑：要给点击头部的那个下面的内容渲染，所以要找到那个当前下的你那个内容的盒子
        $(that).siblings().html(template("tpl_catecontent", info))
      })
     }
      $(this).siblings().toggleClass("hide");

    })



  })
















})