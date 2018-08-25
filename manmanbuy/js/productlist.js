$(function(){

  var search=decodeURI(location.search);

  console.log(search);
  
  var title=Tools.query(search).category;
  console.log(title);
  
  $(".title").text(title+">") ; 
  
  var categoryid=Tools.query(search).categoryid;
  var pageid=Tools.query(search).pageid;
  
  Route.getproductlist( categoryid, 2, function (info) { 
    console.log(info);
    // info.result[0].productName
    $(".mb_productlist").html(template("tpl_list",info));
    
   })
  
  
  
  
  
  
  
  
  
  
  
 







})