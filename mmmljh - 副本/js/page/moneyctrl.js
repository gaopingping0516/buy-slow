$(function () {
    var totalCount; //每一项总共有多少数据
    // var pageId = 1; //页码初始是1 这样直接能加载点击元素的第一页了
    var selectNum; //每类一共有几页存个全局变量
    //要设为全局变量后面都会用到
    var dataId = 1;

    //一进来就走一下 首屏显示出来
    route.getmoneyctrl(0, function (data) {
       
        totalCount = data.totalCount
       
        var data = data.result;
       
        selectNum = Math.ceil(totalCount / 10) //一页10条就能算出有几页了
      
        var str = ""
        for (var i = 0; i < selectNum; i++) {
            str += "<option value=" + (i + 1) + ">" + (i + 1) + "/" + selectNum + "</option>"
        }
      
        $("select").html(str);
        var obj = {
            list: data,
        }
        $(".goods").html(template("tpl", obj));
    })


    //每次点击变化分页标签时,利用option的vulue值拿到对应的数字，发送请求加载
    $("select").change(function () {

        dataId = $(this).val();
        //调用一下
        firstjiazai()
    })

    //下一页
    $(".pageDown>a").click(function () {
      
        //如果小于0什么都不做 停在14就好
            dataId++;
            $("select")[0].value = dataId
            //调用一下
            firstjiazai()
            if(dataId>selectNum){
                dataId=selectNum
                alert("暂无数据")
                
            }
        
    })

    //上一页

    $(".pageUp>a").click(function () {
        
        //点击的时候判断dataId
        if (dataId <= 1) {
        
            //如果小于0什么都不做 停在0就好
            $("select")[0].value = 1;
        }else{
            //如果大于0点上一页就会dataId-1 再次渲染
            dataId--;

            $("select")[0].value = dataId;
            firstjiazai()

        }
    })


    //加载发送ajax的小函数
    function firstjiazai() {
        //从route中拿到这个函数，把要做的事通过回调传进去
        route.getmoneyctrl(dataId-1, function (data) {
            
            totalCount = data.totalCount
            
            var data = data.result;
            var obj = {
                list: data,
            }
            $(".goods").html(template("tpl", obj));
        })

    }
})