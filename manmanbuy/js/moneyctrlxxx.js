$(function () {
  // 页面已经来先加载一下
  var pageid=0
  render(function(info) {
    var pagesize = info.pagesize;
    var total = info.totalCount;
    var pages = Math.ceil(total/pagesize);
    var html = '';
    for(var i = 1; i <= pages;i++){
      html += "<option value='"+i+"'>"+i+"</option>";
    }
    $("select").html(html);
  });
 

  
 
  $("select").on("change",function(){
    var id=$("select").val();
    pageid=id-1;
    render(); 
    console.log(pageid); 
    
    $("select").val(pageid+1);
  })


  $(".prev").on("click",function(){  
    --pageid;
    console.log(pageid)
    $("select").val(pageid+1);
    render();
  })
  $(".next").on("click",function(){
    ++pageid; 
    $("select").val(pageid+1);
    render();
  })
 

  

 
  

 





  function render(callback){
    Route.getmoneyctrl(pageid,function(info){
    
      console.log(info)
      $(".recPro").html(template("tpl_discount",info));
      callback&&callback(info);
      
   })
  }


  })