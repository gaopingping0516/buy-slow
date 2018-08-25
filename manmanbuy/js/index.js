$(function () {

  Route.getindexmenu(function(info){

    console.log(info);
    $(".mb_menu ul").html(template("tpl_menu",info))

    $("li[data-id='7']").nextAll().addClass("hide")
    $("li[data-id='7']").on("click",function(){
      $(this).nextAll().toggleClass("hide");
    })

  })

   Route.getmoneyctrl(function(info){
      console.log(info)
      $(".recPro").html(template("tpl_discount",info))
   })

  

 








  })