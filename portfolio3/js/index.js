//visual 슬라이드
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        loop: true,
    },
});

//menu 탭메뉴
$("#menu .click_menu > div button").click(function(){
    $(this).addClass("select").siblings("button").removeClass("select");
    let bn = $(this).index();
    $("#menu .bnr > div").eq(bn).addClass("view").siblings().removeClass("view");
});

//sns slide
let n = 0;

$(".next").click(function(){
    n++;
    if(n >= 3){
        n = 0;
    }
    $(".slide1 li").eq(n).addClass("sel").siblings().removeClass("sel");
});
$(".prev").click(function(){
    n--;
    if(n < 0){
        n = 2;
    }
    $(".slide1 li").eq(n).addClass("sel").siblings().removeClass("sel");
});

//mob tab메뉴
$(".teb .t_gnb > li > span").click(function(){
    $(this).siblings().slideToggle(500);
});
$("header .inner .m_menu").click(function(){
    $(".teb").show(500);
});
$(".teb .mob_teb_close").click(function(){
    $(".teb").hide(500);
});


//sub2_1 텝메뉴
$("#sub_menu .wrap > ul li").click(function(){
    $(this).children().addClass("select").parent().siblings().children().removeClass("select")
    let menu = $(this).index();
    $("#sub_menu .wrap .menu > div").eq(menu).addClass("m_select").siblings().removeClass("m_select");
})