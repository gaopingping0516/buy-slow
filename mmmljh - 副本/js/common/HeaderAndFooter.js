(function () {
    var pageTitle = {
        moneyctrl: '省钱控 - 最新优惠',
        moneyctrlproduct: '国内折扣',
        inlanddiscount: '国内折扣',
        discountproduct: '国内折扣',
        baicaijia: '白菜价-淘宝内部券',
        coupon: '优惠券',
        couponproduct: '优惠券',
        gsproduct: '凑单品',
        brandTitle: '品牌大全',
        brand: '品牌大全',
        sitenav: '商场导航',
        moneyproduct:"国内折扣",
        discount:"国内折扣",
    };
    //判断如果是这些页面加载下面这些
    var abouturl=location.href;//获取地址
    var page = abouturl.split("/");//获取后面字符
    page = page[page.length-1];
    page = page.split("?")
    page = page[0];
    page = page.split(".");
    page = page[0];
    console.log(page);
    //  如果是page是下面这些 加载头部
    if (page == "index" || page == "category"||page=="productlist"||page=="bijia") {
        header();
    }else{
        otherheader(pageTitle[page])
    }

    //  如果是page是下面这些 加载底部
    if (page == "index" || page == "category" || page == "moneyctrl"||page=="inlanddiscount"||page=="baicaijia"||page=="coupon"||page=="gsproduct"||page=="productlist"||page=="bijia"||page=="moneyproduct"||page=="discount") {
        footer();
    }

    //  如果是page是下面这些 加载搜索框 
    if (page == "index" || page == "category" ||page=="productlist" ||page=="bijia") {
        searchbox()
    }


    // 头部 拼字符串拼出样式
    function header() {
        var header = document.querySelector(".header");
        header.innerHTML = "<div class='header-right'id='spy'>" +
            "<a href='javascript:;'>" +
            "<img src='images/header_app.png' alt='手机app下载'>" +
            "</a>" +
            "</div>" +
            "<div class='header-left'>" +
            "<a href='index.html'>" +
            "<img src='images/header_logo.png' alt=''>" +
            "</a>" +
            "</div>"
    }


    // 底部 拼字符串拼出样式
    function footer() {
        //登录注册返回顶部
        var bottom = document.querySelector(".bottom");

        bottom.innerHTML = "<div class='dlzcfh'>" +
            "<div class='dlzcfh-left'>" +
            "<a href='javascript:;'>登录" +
            "</a>" +
            "</div>" +
            "<div class='dlzcfh-center'>" +
            "<a href='javascript:;'>注册" +
            "</a>" +
            "</div>" +
            "<div class='dlzcfh-right'>" +
            "<img src='http://www.zuyushop.com/wap/images/top.jpg' width='15' height='15'>" +
            "<a href='#spy'>返回顶部" +
            "</a>" +
            "</div>" +
            "</div>" +
            "<div class='footer'>" +
            "<p class='footer-top'>" +
            "<a href='javascript:;' style='color: Red;'>手机APP下载" +
            "</a>" +
            "<a href='javascript:;'>慢慢买手机版" +
            "</a>" +
            "--掌上比价平台</p>" +
            "<p class='footer-bottom'>m.manmanbuy.com" +
            "</p>" +
            "</div>"
    }


    // 搜索框 拼字符串拼出样式
    function searchbox() {
        var checkArea = document.querySelector(".check-area");
        checkArea.innerHTML = "<div class='check-area-right'>" +
            "<button>搜索</button>" +
            "</div>" +
            "<div class='check-area-left'>" +
            "<input type='text' placeholder='请输入你想比价的商品'>" +
            "</div>"
    }


    function otherheader(title) {
        var header = document.querySelector(".header");
        header.innerHTML = 
        "<div class='back'id='spy'>" +
        "<a href='index.html'>" +
        "</a>" +
        "</div>"+
        "<div class='header-right'id='spy'>" +
        "<a href='javascript:;'>" +
        "<img src='images/header_app.png' alt='手机app下载'>" +
        "</a>" +
        "</div>" +
        "<div class='header-title'>" +title+
        "</div>"
       
        
    }



})();