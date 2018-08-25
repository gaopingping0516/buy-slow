$(function () {

  var search=location.search;
  var couponid=Tools.query(search).id;
  Route.getcouponproduct(couponid,function(info){

   
    // var a=info.result[0].couponProductImg
    // console.log(a);
    // var b=a.split(" ");
    // console.log(b);
    // var c=b[1].split('"')
    // console.log(c[1]);
    // for(var i=0;i<info.result.length-1;i++){
    //   info.result[i].src=info.result[i].couponProductImg.split(" ")[1].split('"')[1]
    // }
    
    $(".product").html(template("tpl_couponproduct",info))

    console.log(info);
    var id;
    $(".product li").on("click",function(){
       id=+$(this).data("id")
       console.log(id);
       
      $(".mb_mask").removeClass("hide");
      $(".pic").html(info.result[id].couponProductImg)
    })

    $(".left").on("click",function(){
      if(id==0){
        id=info.result.length-1;
      
      }
      id--;
      console.log(id);
      
      
      $(".pic").html(info.result[id].couponProductImg)
        
    })

    $(".right1").on("click",function(){
     console.log(id);
     
      if(id==info.result.length-1){
        id=0;
        // console.log(id);
      }
      id++;
      console.log(id);
      
      // console.log(info.result[id]);
      
      $(".pic").html(info.result[id].couponProductImg)
        
    })

    $(".exit").on("click",function(){
      $(".mb_mask").addClass("hide")
    })


    
    
    
    
    

    


 })
  

 








  })