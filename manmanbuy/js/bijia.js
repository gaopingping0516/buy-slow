$(function(){

  var productid=Tools.query(location.search).productid;
  var categoryid=Tools.query(location.search).categoryId;
  
  console.log(productid);
  console.log(categoryid);
  
  Route.getproduct(productid,function(info){

    console.log(info);
    $(".mb_product").html(template("tpl_product",info));
    $(".mb_table").html(template("tpl_table",info));
    var productName=info.result[0].productName;
    var name=productName.split(" ");
    // console.log(name[0]);
    
    $(" .mb_crumb .title").text(name[0]+">");
    console.log(name);
    
    
  })

  Route.getproductcom(productid, function(info){
    console.log(info);
    $(".comment").append(template("tpl_comment",info));
    
  } ) 
  
  Route.getcategorybyid(categoryid,function(info){
    console.log(info);
    var category=info.result[0].category;
    console.log(category);

    $(".mb_crumb .category").text(category+">");
     
  })

})


