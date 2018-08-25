(function (window) {
    var route = {
        /*公共URl提取*/
        baseURL: 'http://127.0.0.1:9090/api/',
        // 获取首页上面的菜单栏数据
        //将首页这个函数挂载到route对象中，方便拿
        getindexmenu: getindexmenu,//首页菜单栏
        getmoneyctrl: getmoneyctrl,//首页//省钱控
        getcategorytitle: getcategorytitle,//比价搜索标题,
        getcategory:getcategory, //比价搜索分类列表
        inlanddiscount:inlanddiscount,//国内折扣
        baicaijiatitle:baicaijiatitle,//白菜价顶部导航
        getbaicaijiaproduct:getbaicaijiaproduct,//白菜价商品列表
        getcoupon:getcoupon,//优惠券标题列表
        getgsshop:getgsshop,//凑单品三级联动的第一个
        getgsshoparea:getgsshoparea,//凑单品三级联动的第二个
        getgsproduct:getgsproduct,//凑单品商品列表
        getproductlist:getproductlist,//分类页数据
        getcategorybyid:getcategorybyid,//分类页商品分类名称
        getproduct:getproduct,//比价页面商品详情
        getproductcom:getproductcom,//比价页面评论
        getmoneyctrlproduct:getmoneyctrlproduct,//国内折扣图文
        getdiscountproduct:getdiscountproduct//从国内折扣点进去国内折扣图文
    }


    //首页菜单栏
    function getindexmenu(callback) {
        var url = route.baseURL + 'getindexmenu';
        $.get( url, function( res ) {
            callback && callback( res );
        }, 'json');
    }


    //首页menulist//省钱控
	function getmoneyctrl(data,callback,res) {
        //拼接起来的地址
        var url = route.baseURL + 'getmoneyctrl';
        $.ajax({
            url:url,
            data:{pageid:data},
            dataType:"json",
            success:function(res){
                //拿到数据成功之后要做的事
                callback && callback(res);
            },
            error:function(){
               console.error("请求不到数据"); 
            }
        })
    }


     //比价搜索标题
	function getcategorytitle(callback) {
        //拼接起来的地址
        var url = route.baseURL + 'getcategorytitle';
        $.ajax({
            url:url,
            dataType:"json",
            success:function(res){
                //拿到数据成功之后要做的事
                callback && callback(res);
                
            },
            error:function(){
               console.error("请求不到数据"); 
            }
        })
    }


     //比价搜索分类列表
	function getcategory(data,callback,res) {
        //拼接起来的地址
        var url = route.baseURL + 'getcategory';
        $.ajax({
            url:url,
            data:{titleid:data},
            dataType:"json",
            success:function(res){
                //拿到数据成功之后要做的事
                callback && callback(res);
            },
            error:function(){
               console.error("请求不到数据"); 
            }
        })
    }


    
    //国内折扣
	function inlanddiscount(callback,res) {
        //拼接起来的地址
        var url = route.baseURL + 'getinlanddiscount';
        $.ajax({
            url:url,
            dataType:"json",
            success:function(res){
                //拿到数据成功之后要做的事
                callback && callback(res);
                
            },
            error:function(){
               console.error("请求不到数据"); 
            }
        })
    }

//白菜价顶部导航
    function baicaijiatitle(callback,res) {
        //拼接起来的地址
        var url = route.baseURL + 'getbaicaijiatitle';
        $.ajax({
            url:url,
            dataType:"json",
            success:function(res){
                //拿到数据成功之后要做的事
                callback && callback(res);
                
            },
            error:function(){
               console.error("请求不到数据"); 
            }
        })
    }


//白菜价商品列表
    function getbaicaijiaproduct(data,callback,res) {
        //拼接起来的地址
        var url = route.baseURL + 'getbaicaijiaproduct';
        $.ajax({
            url:url,
            data:{titleid:data},
            dataType:"json",
            success:function(res){
                //拿到数据成功之后要做的事
                callback && callback(res);
            },
            error:function(){
               console.error("请求不到数据"); 
            }
        })
    }



      //优惠券标题列表
	function getcoupon(callback,res) {
        //拼接起来的地址
        var url = route.baseURL + 'getcoupon';
        $.ajax({
            url:url,
            dataType:"json",
            success:function(res){
                //拿到数据成功之后要做的事
                callback && callback(res);
                
            },
            error:function(){
               console.error("请求不到数据"); 
            }
        })
    }


//凑单品三级联动的第一个
    function getgsshop(callback,res) {
        //拼接起来的地址
        var url = route.baseURL + 'getgsshop';
        $.ajax({
            url:url,
            dataType:"json",
            success:function(res){
                //拿到数据成功之后要做的事
                callback && callback(res);
                
            },
            error:function(){
               console.error("请求不到数据"); 
            }
        })
    }



    //凑单品三级联动的第二个
    function getgsshoparea(callback,res) {
        //拼接起来的地址
        var url = route.baseURL + 'getgsshoparea';
        $.ajax({
            url:url,
            dataType:"json",
            success:function(res){
                //拿到数据成功之后要做的事
                callback && callback(res);
                
            },
            error:function(){
               console.error("请求不到数据"); 
            }
        })
    }


    //凑单品商品列表
    function getgsproduct(shopid,areaid,callback,res) {
        //拼接起来的地址
        var url = route.baseURL + 'getgsproduct';
        $.ajax({
            url:url,
            data:{
                shopid:shopid,
                areaid:areaid,
            },
            dataType:"json",
            success:function(res){
                //拿到数据成功之后要做的事
                callback && callback(res);
            },
            error:function(){
               console.error("请求不到数据"); 
            }
        })
    }


     



     //分类页数据
     function getproductlist(categoryid,pageid,callback,res) {
        //拼接起来的地址
        var url = route.baseURL + 'getproductlist';
        $.ajax({
            url:url,
            data:{
                categoryid:categoryid,
                pageid:pageid,
            },
            dataType:"json",
            success:function(res){
                //拿到数据成功之后要做的事
                callback && callback(res);
            },
            error:function(){
               console.error("请求不到数据"); 
            }
        })
    }



    //分类页商品分类名称
    function getcategorybyid(categorybyid,callback,res) {
        //拼接起来的地址
        var url = route.baseURL + 'getcategorybyid';
        $.ajax({
            url:url,
            data:{categoryid:categorybyid},
            dataType:"json",
            success:function(res){
                //拿到数据成功之后要做的事
                callback && callback(res);
            },
            error:function(){
               console.error("请求不到数据"); 
            }
        })
    }


//比价页面商品详情
    function getproduct(productid,callback,res) {
        //拼接起来的地址
        var url = route.baseURL + 'getproduct';
        $.ajax({
            url:url,
            data:{productid:productid},
            dataType:"json",
            success:function(res){
                //拿到数据成功之后要做的事
                callback && callback(res);
            },
            error:function(){
               console.error("请求不到数据"); 
            }
        })
    }



    //比价页面评论
    function getproductcom(productid,callback,res) {
        //拼接起来的地址
        var url = route.baseURL + 'getproductcom';
        $.ajax({
            url:url,
            data:{productid:productid},
            dataType:"json",
            success:function(res){
                //拿到数据成功之后要做的事
                callback && callback(res);
            },
            error:function(){
               console.error("请求不到数据"); 
            }
        })
    }



     //国内折扣图文
     function getmoneyctrlproduct(productid,callback,res) {
        //拼接起来的地址
        var url = route.baseURL + 'getmoneyctrlproduct';
        $.ajax({
            url:url,
            data:{productid:productid},
            dataType:"json",
            success:function(res){
                //拿到数据成功之后要做的事
                callback && callback(res);
            },
            error:function(){
               console.error("请求不到数据"); 
            }
        })
    }



    //从国内折扣点进去国内折扣图文
     function getdiscountproduct(productid,callback,res) {
        //拼接起来的地址
        var url = route.baseURL + 'getdiscountproduct';
        $.ajax({
            url:url,
            data:{productid:productid},
            dataType:"json",
            success:function(res){
                //拿到数据成功之后要做的事
                callback && callback(res);
            },
            error:function(){
               console.error("请求不到数据"); 
            }
        })
    }
    
    //把这个对象暴露出去
    window.route = route;
})(window)