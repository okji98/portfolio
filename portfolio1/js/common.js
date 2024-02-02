bw = $("body").width();
$(window).resize(function(){
    bw = $("body").width();
});



//헤더부분
$(document).ready(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
    });
});
//헤더에 마우스호버됐을 때
let ln = $(this).index() + 1;
$(".gnb li").on("mouseover", function () {
    ln = $(this).index() + 1;
    $(".snb" + ln).addClass("on").siblings(".snb").removeClass("on");
    $("header").addClass("on");
});
//헤더에서 마우스리브됐을 때
$("header").on("mouseleave", function () {
    $(".snb").removeClass("on");
    $("header").removeClass("on");
});
//스크롤시 헤더 색상 변경
$(window).scroll(function () {
    let scrT = $(window).scrollTop();
    if (scrT > .105) {
        $("header").addClass("fix");
    } else {
        $("header").removeClass("fix");
    }
});


//푸터부분
$("footer .label").click(function(){
    $(this).next("footer .m_snb").slideToggle(500);
});


//side 퀵메뉴
$("#quick .open").click(function(){
    $(this).next().addClass("big").removeClass("small");
});
$("#quick .close").click(function(){
    $(this).parent().addClass("small").removeClass("big");
});

//탑버튼
$(".top_btn").click(function(){
    $("html").animate({"scrollTop":0},500);
});
$(window).scroll(function(){
    let sc = $(this).scrollTop();
    if(sc > 0){
        $(".top_btn").addClass("view");
    }else{
        $(".top_btn").removeClass("view");
    }
});

//탭메뉴
$("header .utile .col").click(function(){
    $(".pct").addClass("open");
});
$(".pct .close").click(function(){
    $(".pct").removeClass("open");
});

//모바일 탭메뉴
$("header .m_utile .col").click(function(){
    $("#tab_menu_m").addClass("open");
});
$("#tab_menu_m .close").click(function(){
    $("#tab_menu_m").removeClass("open");
});
//모바일 탭메뉴 슬라이드토글
$("#tab_menu_m > ul > li > a").click(function(){
    $(this).siblings("ul").slideToggle(1000);
});