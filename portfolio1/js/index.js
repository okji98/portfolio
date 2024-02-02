let bw = $("body").width();
$(window).resize(function(){
    bw = $("body").width();
});

//sec1 notice 탭메뉴
$("#sec1 .notice .title > ul > li > button").click(function(){
    $("#sec1 .notice .title > ul > li").removeClass("select");
    $(this).parent().addClass("select");
    let liNum = $(this).parents().index();
    console.log(liNum);
    
    $("#sec1 .notice div").removeClass("view");
    $("#sec1 .notice div").eq(liNum).addClass("view");
    $(this).parent().addClass("select");
});

// sec1 slide
let iw = $("#sec1 .wrap .rpr .slide .slide1 li img").width(); // 이미지의 너비
let ih = $("#sec1 .wrap .rpr .slide .slide1 li img").height(); // 이미지 높이
let lin = $("#sec1 .wrap .rpr .slide .slide1 li").length; // 갯수
let n = 0

// .faram의 너비 높이 세팅
$("#sec1 .wrap .rpr .slide1").css({"width":(lin+1)*100+"%"}); // .slide의 너비 세팅
$("#sec1 .wrap .rpr .slide1 li").css({"width":100 / (lin+1) + "%"}); // .slide의 너비 세팅
$(".total").text(lin); // 이미지 전체 갯수 교체
$(".slide1").append($(".slide1 li:first-child").clone());


function auto(){
    n++;
    if( n >= lin){
        $("#sec1 .wrap .rpr .slide_cover .slide1").animate({"left":-n*100+"%"},300,function(){
            $(this).css({"left":0});
        })
        n = 0;
        }else{
            $("#sec1 .wrap .rpr .slide_cover .slide1").animate({"left":-n*100+"%"},300)
        }
    $(".num").text(n + 1);
}

let timer = setInterval("auto()",3000);

let chk = 1
$("#sec1 .wrap .rpr .btn").click(function(){

    if( chk == 0 ){
        $("#sec1 .wrap .rpr .btn").addClass("xi-pause").removeClass("xi-play");
        timer = setInterval("auto()",3000);
        chk = 1
        console.log(chk)
    }else{
        $("#sec1 .wrap .rpr .btn").addClass("xi-play").removeClass("xi-pause");
        clearInterval(timer);
        chk = 0
        console.log(chk)
    }
});

$(".next").click(function(){
    if (chk == 0) {
        clearInterval(timer);
        timer = setInterval("auto()",3000);
    }
    auto();
});
$(".prev").click(function(){
    n--;
    if(n < 0){
        n = lin - 1;
    }
    $("#sec1 .wrap .rpr .slide_cover .slide1").animate({"left":-n*iw},300);
    $(".num").text(n+1);
});

//bsn 배너
$("#bsn .content").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(this).children("p").addClass("active1").parent().siblings().children("p").removeClass("active1");
    $(this).addClass("active").children("div").addClass("active2").parent(".content").siblings().children("div").removeClass("active2");
    $(this).addClass("active").siblings().children(".plus").addClass("active3");
});

// lhtv 유튜브
$("#lh_tv .next").click(function(){
    $("#lh_tv .ytb .select").next().addClass("select").siblings().removeClass("select");
    $("#lh_tv .ytb").animate({"left":"-350px"},100,function(){
        $(this).append($("#lh_tv .ytb li:first-child")).css({"left":"0"});
    });
});

$("#lh_tv .prev").click(function(){
    $("#lh_tv .ytb .select").prev().addClass("select").siblings().removeClass("select");
    $("#lh_tv .ytb").css({"left":"-350px"});
    $("#lh_tv .ytb").prepend($("#lh_tv .ytb li:last-child"));
    $("#lh_tv .ytb").animate({"left":"0"},100);
});


$(document).on("click","#lh_tv .ytb .select",function(e){
    e.stopImmediatePropagation();
    $(".cont").addClass("view");
    let tt = $(this).attr("data-ytb");
    console.log(tt);
    $(".cont").prepend(tt);
});

$(".cont button").click(function(){
    $(".cont").removeClass("view");
    $(this).prev().remove();
});


// 푸터 로고 스와이퍼
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 10,
    freeMode: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});