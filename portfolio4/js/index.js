$('.slide .view > p > span').YJnumber({
        delay : 200,
        speed : 500,
        startNum : '0', // 0 ~ 9,
        lineHeight : 150
});

function auto(){
    $(".slide").animate({left:-30+"%"},300,function(){
        $(this).append($(".slide li:first-child")).css({"left":"0"});
        $("#section1 .slide li:nth-of-type(2)").addClass("view").siblings().removeClass("view");
        
        let sd1 = $('.slide .view > p > span:nth-of-type(1)').attr("data-num");
        let sd2 = $('.slide .view > p > span:nth-of-type(2)').attr("data-num");
        $('.slide .view > p > span:nth-of-type(1)').text(sd1);
        $('.slide .view > p > span:nth-of-type(2)').text(sd2);
        
        $('.slide .view > p > span').YJnumber({
            delay : 200,
            speed : 500,
            startNum : '0', // 0 ~ 9,
            lineHeight : 150
        });
    });
}
let tt = setInterval("auto()",3000);

$(".stop").click(function(){
    clearInterval(tt);
});

$(".play").click(function(){
    tt = setInterval("auto()",3000);
});


//section2 버튼
$("#section2 .btn button").click(function(){
    $(this).addClass("select").siblings().removeClass();
    let bn = $(this).index();
    $("#section2 .cont").eq(bn).addClass("view").siblings("#section2 .cont").removeClass("view")
});


//section3 스와이퍼
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    });


//section4 스크롤매직
(function () {

    let controller = new ScrollMagic.Controller();
    let wipeAnimation = new TimelineMax()
	// animate to second
	.to("#section4 .content", 1, {y:"-10%"} )
	.to("#section4 .content", 1, {y:"-20%"} )





let scene = new ScrollMagic.Scene({
    triggerElement: "#section4",
    triggerHook: "onLeave",
    duration: "100%" //이 값이 클 수록 천천히 덮어씀
})
	.setPin("#section4")
	.setTween(wipeAnimation)
	.addIndicators() 
	.addTo(controller);
	

}())


//section5 슬라이드
let n = 0;
$("#section5 .next").click(function(){
    n++;
    if(n >= 3){
        n = 0;
    }
    $("#section5 .s5_slide").animate({left:-n*100+"%"},300);
});
$("#section5 .prev").click(function(){
    n--;
    if(n < 0){
        n = 2;
    }
    $("#section5 .s5_slide").animate({left:-n*100+"%"},300);
});