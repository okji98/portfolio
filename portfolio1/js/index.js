$(document).ready(function() {
    
    let bw = $("body").width();
    
    $(window).resize(function(){
        bw = $("body").width();
    });

    // sec1 notice 탭메뉴
    $("#sec1 .notice .title > ul > li > button").click(function(){
        $("#sec1 .notice .title > ul > li").removeClass("select");
        $(this).parent().addClass("select");
        let liNum = $(this).parent().index();
        
        $("#sec1 .notice div").removeClass("view");
        $("#sec1 .notice div").eq(liNum).addClass("view");
    });

    // sec1 slide 초기화
    function initSlide() {
        let iw = $("#sec1 .wrap .rpr .slide .slide1 li img").width();
        let ih = $("#sec1 .wrap .rpr .slide .slide1 li img").height();
        let lin = $("#sec1 .wrap .rpr .slide .slide1 li").length;
        let n = 0;

        if (lin === 0) return; // 슬라이드가 없으면 실행 안함

        // .slide1의 너비 세팅
        $("#sec1 .wrap .rpr .slide1").css({"width": (lin + 1) * 100 + "%"});
        $("#sec1 .wrap .rpr .slide1 li").css({"width": 100 / (lin + 1) + "%"});
        
        // 총 개수 표시
        $(".total").text(lin);
        
        // 첫 번째 슬라이드 복사 (무한 루프용)
        if ($("#sec1 .wrap .rpr .slide1 li:last-child").attr("data-cloned") !== "true") {
            $("#sec1 .wrap .rpr .slide1").append($("#sec1 .wrap .rpr .slide1 li:first-child").clone().attr("data-cloned", "true"));
        }

        // 자동 슬라이드 함수
        function auto() {
            n++;
            if (n >= lin) {
                $("#sec1 .wrap .rpr .slide_cover .slide1").animate({"left": -n * 100 + "%"}, 300, function(){
                    $(this).css({"left": 0});
                });
                n = 0;
            } else {
                $("#sec1 .wrap .rpr .slide_cover .slide1").animate({"left": -n * 100 + "%"}, 300);
            }
            $(".num").text(n + 1);
        }

        // 자동 슬라이드 타이머
        let timer = setInterval(auto, 3000);
        let chk = 1;

        // 일시정지/재생 버튼
        $("#sec1 .wrap .rpr .btn").click(function(){
            if (chk == 0) {
                $("#sec1 .wrap .rpr .btn").addClass("xi-pause").removeClass("xi-play");
                timer = setInterval(auto, 3000);
                chk = 1;
            } else {
                $("#sec1 .wrap .rpr .btn").addClass("xi-play").removeClass("xi-pause");
                clearInterval(timer);
                chk = 0;
            }
        });

        // 다음 버튼
        $(".next").click(function(){
            if (chk == 0) {
                clearInterval(timer);
                timer = setInterval(auto, 3000);
            }
            auto();
        });

        // 이전 버튼
        $(".prev").click(function(){
            n--;
            if (n < 0) {
                n = lin - 1;
            }
            $("#sec1 .wrap .rpr .slide_cover .slide1").animate({"left": -n * 100 + "%"}, 300);
            $(".num").text(n + 1);
        });
    }

    // 슬라이드 초기화 실행
    setTimeout(initSlide, 100);

    // bsn 배너
    $("#bsn .content").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(this).children("p").addClass("active1").parent().siblings().children("p").removeClass("active1");
        $(this).addClass("active").children("div").addClass("active2").parent(".content").siblings().children("div").removeClass("active2");
        $(this).addClass("active").siblings().children(".plus").addClass("active3");
    });

    // lhtv 유튜브
    $("#lh_tv .next").click(function(){
        $("#lh_tv .ytb .select").next().addClass("select").siblings().removeClass("select");
        $("#lh_tv .ytb").animate({"left":"-350px"}, 100, function(){
            $(this).append($("#lh_tv .ytb li:first-child")).css({"left":"0"});
        });
    });

    $("#lh_tv .prev").click(function(){
        $("#lh_tv .ytb .select").prev().addClass("select").siblings().removeClass("select");
        $("#lh_tv .ytb").css({"left":"-350px"});
        $("#lh_tv .ytb").prepend($("#lh_tv .ytb li:last-child"));
        $("#lh_tv .ytb").animate({"left":"0"}, 100);
    });

    // 유튜브 팝업
    $(document).on("click","#lh_tv .ytb .select", function(e){
        e.stopImmediatePropagation();
        $(".cont").addClass("view");
        let tt = $(this).attr("data-ytb");
        if (tt) {
            $(".cont").prepend(tt);
        }
    });

    // 유튜브 팝업 닫기
    $(".cont button").click(function(){
        $(".cont").removeClass("view");
        $(this).prev().remove();
    });

    // 푸터 로고 스와이퍼 초기화
    if (typeof Swiper !== 'undefined') {
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
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                480: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 10
                },
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 10
                }
            }
        });
    }

});