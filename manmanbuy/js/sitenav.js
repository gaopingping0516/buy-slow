$(function(){

  Route.getsitenav(function(info){
    console.log(info);
    $(".mb_content").html(template("tpl_site",info))
    
  })






})

