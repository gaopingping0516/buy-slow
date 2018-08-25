$(function () {

  Route.getmoneyctrl(function(info){

    console.log(info)
    $(".recPro").html(template("tpl_discount",info))
 })
  

 








  })