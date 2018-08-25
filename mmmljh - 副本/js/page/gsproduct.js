$(function () {


    //凑单品三级联动的第一个
    route.getgsshop(function (data) {
        var data = data.result;
        var obj = {
            list: data,
        }
      
        $(".xiala-first>ul").html(template("tpl", obj))
    })


    //凑单品三级联动的第二个
    route.getgsshoparea(function (data) {
        var data = data.result;
        var obj = {
            list: data,
        }
      
        $(".xiala-second>ul").html(template("tmp", obj))
    })



    //实现点击切换显示
    var flag = true; //判断第一个
    var flag2 = true //判断第二个


    $(".select-dian").click(function(){
        if(flag == true){
            $(".xiala-first").show();
            flag = flase;
        }else{
            $(".xiala-first").hide();
            flag = true;
        }
    })


    $(".select-quyu").click(function(){
        if(flag == true){
            $(".xiala-second").show();
            flag = false;
        }else{
            $(".xiala-second").hide();
            flag = true;
        }
    })


    //第一个下拉框选中哪个商品，上面显示哪个商店
    $(".xiala-first").on("click",".chooseShop",function(){
        $(".select-dian").html($(this).text()+"<i></i>");
        $(".xiala-first").hide();
        flag = true;
    })


    //第二个下拉框选中哪个商品，上面显示哪个商店
    $(".xiala-second").on("click",".chooseArea",function(){
        $(".select-quyu").html($(this).text().substr(0,2)+"<i></i>");
        $(".xiala-second").hide();
        flag2 = true;
    })


    //根据shopId,areaId渲染商品列表   
    var shopId = 0; //全局变量先来个0什么都不点默认就是0 
    var areaId = 0; //全局变量先来个0什么都不点默认就是0 
    jiazai()//一进来首屏先加载下

    //点第一个根据shopId渲染数据
    $(".selectArea").on("click", ".xiala-first a", function () {
        shopId = $(this).attr("shopId")
        // areaId = $(this).attr("areaId");
        jiazai()
    })

 //点第二个根据areaId渲染数据
    $(".selectArea").on("click", ".xiala-second a", function () {
        areaId = $(this).attr("areaId")
       
        jiazai()

    })
   


    //加载+渲染的小函数 
    function jiazai(){
        route.getgsproduct(shopId, areaId, function (data) {
            alert(areaId)
            var data = data.result;
            var obj = {
                list: data,
            }
           
            $(".gs-container").html(template("tplgetgsproduct", obj))
        })
       }
      
})
//如果屏幕太小 干掉最后一个三角..
$(window)[0].addEventListener("resize", function () {
    if($(".container").outerWidth(true)<350){
      $(".sji").hide()
    }else{
        $(".sji").show()
    }
  
   })