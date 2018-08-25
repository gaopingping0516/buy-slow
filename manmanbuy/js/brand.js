$(function () {

  Route.getbrandtitle(function (info) {
    console.log(info);
    $(".mb_category").html(template("tpl_brandname", info))

  })


})