$(function(){

  
  Route.getcoupon( function (info) { 
    console.log(info);
    $(".mb_content ul").html(template("tpl_coupon",info));
    
   }) 



  

  
  
  
  
  
  
  
  
  
  
  
 







})