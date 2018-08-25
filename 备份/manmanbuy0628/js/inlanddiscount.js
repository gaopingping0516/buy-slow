$(function(){

  
  Route.getinlanddiscount( function (info) { 
    console.log(info);
    $(".mb_content ul").html(template("tpl_discount",info));
    
   }) 



  

  
  
  
  
  
  
  
  
  
  
  
 







})