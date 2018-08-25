$(function(){

  var search=decodeURI(location.search);

  console.log(search);
  
  var productid=Tools.query(search).productid;
  console.log(productid);
  
  //1.商品详情展示
  Route.getdiscountproduct( productid, function (info) { 
    console.log(info);
    $(".mb_content").html(template("tpl_money",info));
    
   })

  

  
  
  
  
  
  
  
  
  
  
  
 







})