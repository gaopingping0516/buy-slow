//关键一步 从地址栏里拿到categoryid
var categoryId = window.location.href.split("?")[1].split("=")[1];
categoryId = categoryId.split("&")[0]
$.getUrlParam = function(name) {
  var reg = new RegExp("(^|&)" +
    name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

// 获取从上一页得到的categoryId的值,并分割出来只要那个id的number类型的值
var totalCount;//每一项总共有多少数据
var pageId = $.getUrlParam("pageId") || 1;//页码初始是1 这样直接能加载点击元素的第一页了
var selectNum;//每类一共有几页存个全局变量



route.getproductlist(categoryId, pageId, function (data) {
  //console.log(data);
  $("#goodsColor").html(template("tmp", data));
  selectNum = Math.ceil(data.totalCount / data.pagesize);
  var str = "";
  for (var i = 0; i < selectNum; i++) {
    if(i+1 == pageId){
      str += "<option selected value=" + (i + 1) + "> " + (i + 1) + " / " + selectNum + " </option>";
    }else{
      str += "<option value=" + (i + 1) + "> " + (i + 1) + " / " + selectNum + " </option>";
    }

  }
  $("#selectPage").html(str);
});

$("select").on("change", function () {
  pageId = $(this).val();
  jiazai();
});


$(".pageUp a").click(function () {
    if(pageId <=1){
      pageId == 1;
    }else{
      pageId--;
      jiazai();
    }
})

$(".pageDown a").click(function () {
  if(pageId >= selectNum){
    pageId == selectNum;
  }else{
    pageId++;
    jiazai();
  }
})



function jiazai() {
  route.getproductlist(categoryId, pageId, function (data) {
    //console.log($.getUrlParam('categoryid'))
    window.location.href = 'productlist.html?categoryid=' + $.getUrlParam('categoryid')+"&pageId="+pageId;
    $("#goodsColor").html(template("tmp", data));

  })


}

route.getcategorybyid(categoryId,function (data) {
  console.log(data);
  $(".product-name").text(data.result[0].category+">")
})


//route.getproductlist(categoryId,pageId,function(data){
//    $(".goods").html(template("tmp", data));
//
//
//    selectNum=Math.ceil(data.totalCount/10)//一页10条就能算出有几页了
//    var str=""
//    for(var i=0;i<selectNum;i++){
//        str+="<option value="+(i+1)+"> "+(i+1)+"/"+selectNum+"</option>"
//    }
//    $("#selectPage").html(str);
//})
//
////点击下拉框渲染页码
//$("select").change(function () {
//  pageId = $(this).val();
//
//  //调用一下
//  jiazai()
//})
//
////下一页
//$(".pageDown>a").click(function () {
//  //如果大于最大值什么都不做 停在最后一页就好
//  if (pageId >= selectNum) {
//    pageId  =selectNum
//  }else{
//
//    pageId++;
//    //同步select里的value值
//    $("select").val(pageId);
//    //调用一下
//    jiazai()
//  }
//})
//
////上一页
//$(".pageUp>a").click(function () {
//  //点击的时候判断dataId
//  if (pageId <=1) {
//    //如果小于0什么都不做 停在0就好
//    pageId  =0
//  } else {
//    //如果大于0点上一页就会dataId-1 再次渲染
//    pageId--;
//    //同步select里的value值
//    $("select").val(pageId);
//    jiazai()
//
//  }
//})
//
//
////加载发送ajax的小函数
//function jiazai() {
//  //从route中拿到这个函数，把要做的事通过回调传进去
//  route.getproductlist(categoryId,pageId, function (data) {
//
//    $(".goods").html(template("tmp", data));
//  })
//}


//route.getcategorybyid(categoryId, function (data) {
//  console.log(data);
//  var data=data.result[0];
//
//  $('.product-name').text(data.category+">");
//})

