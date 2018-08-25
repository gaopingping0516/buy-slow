$(function () {
  var dataId; //定义一个全局变量为了在比价搜索分类列表中，拿到a的id传过去
  var index; //防止重复提交ajax提交的变量 ;


  //比价搜索标题
  //从route中拿到这个函数，把要做的事通过回调传进去
  route.getcategorytitle(function (data) {
   console.log(data)
   $(".category-list>ul").html(template("tpl", data ));
  
   // //比价搜索分类列表
   $(".addmore>a").each(function (index, ele) {
    console.log(ele)
     $(this).on("click", function () {
       //console.log($(this).next());
       //点击切换隐藏显示
       $(this).next().toggleClass("dp");
       //存一下点击时的a是哪个
       var that = $(this);
       //把获取到的titleId当做用自定义属性包起来 以后用于传递数据
       dataId = $(this).attr('data-id');
       //如果它下面有li了那肯定是已经有数据了 不能无限发请求直接ruturn;
       if ($(this).next().find("li").length > 0) {
         return false;
       }
       //从route中拿到这个函数，把要做的事通过回调传进去发请求
       route.getcategory(dataId, function (re) {
  
         that.parent().append(template("tmp", re));
  
       })
     })
  
   })
  
  })

})