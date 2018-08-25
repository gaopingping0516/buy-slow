$(function(){
  var pageid=0;

  // 动态生成option,只要在页面一加载的时候动态生成即可，只要生成一次，所以把遍历option作为回调函数传给render（），如果写在里面，每次render（）都会执行重新生成，页数始终都在1
  render(
    function(info){
      var pagesize=info.pagesize;
        var total=info.totalCount;
        var pages=Math.ceil(total/pagesize);
        var html="";
        for(var i=1;i<=pages;i++){
          //<Option value="i">i</Option>
          html+="<option value='"+i+"'>"+i+"</option>"
        }
        $("select").html(html);
    }
  );

  //1.当页数发生改变的时候，渲染
  $("select").on("change",function(){
    var id=$("select").val();
    pageid=id-1;
    render();
  })
  //2. 点击上一页，获取pageid，渲染
  
    $(".prev").on("click",function(){
      $(".next").removeClass("now")
      if(pageid==0){
        $(this).addClass("now");
        return;
      }
      
      pageid--;
      $("select").val(pageid+1);
      render();
    })
  
 
  //3. 点击下一页，获取pageid，渲染
  
    $(".next").on("click",function(){
      $(".prev").removeClass("now")
      if(pageid==14){
        $(this).addClass("now");
        return;
      }
     
      pageid++;
      $("select").val(pageid+1);
      render();
    })
    
  
 
 
 

 
  function render(callback){
    Route.getmoneyctrl(pageid,function(info){
     
      callback&&callback(info)
      console.log(info);
      $(".recPro").html(template("tpl_discount",info)) 
    

        
      
      
      
    })
  }
 
})