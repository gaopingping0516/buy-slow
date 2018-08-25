


 //页面一加载就渲染 
  var titleid=0;
  
  Route.getbaicaijiaproduct(titleid, function (info) {

    console.log(info);
    $(".mb_product").html(template("tpl_product", info)) 

  })
  //动态渲染导航栏
 
  Route.getbaicaijiatitle(function (info) {
    var ulWidth=0;
    console.log(info);
    $(".nav").html(template("tpl_nav", info));

    $(".nav li").each(function(i,e){

      ulWidth+=$(this).outerWidth(true);  
      // console.log(ulWidth);

    })
    
    $(".nav").css("width",ulWidth)
    console.log(ulWidth);
    
    window.onload = function () {
      new IScroll(".mb_nav", {
       scrollY:false,
       scrollX:true
       });
      new IScroll(".nav");
      }
 
    


    $(".nav li a").on("click", function () {
   

      $(this).addClass("now").parent().siblings().children().removeClass("now");

      

      var titleid = $(this).data("id");
      // console.log(titleid);

      
      
     
     
  
        Route.getbaicaijiaproduct(titleid, function (info) {

          console.log(info);
          $(".mb_product").html(template("tpl_product", info))

        })


      

    })






  })



















