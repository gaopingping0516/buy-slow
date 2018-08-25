$(function () {


  window.onload = function () {
    new IScroll(".mb_nav", {
      scrollY: false,
      scrollX: true
    });
    new IScroll(".nav");

  }

  Route.getbaicaijiatitle(function (info) {

    console.log(info);
    $(".nav").html(template("tpl_nav", info));

    var search=location.search;
    var titleid=Tools.query(search).titleid;
    console.log(titleid);

    Route.getbaicaijiaproduct(titleid, function (info) {

      console.log(info);
      $(".mb_product").html(template("tpl_product",info))
  
    })
    
   

  })

  

  

 

})











