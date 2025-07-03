let aosChk = 0;
let fullpageInstance = null;
let isFullPageActive = false;

// fullPage 초기화 함수
function initFullPage() {
    if (window.innerWidth > 1200 && !isFullPageActive) {
        fullpageInstance = $('#fullpage').fullpage({
            anchors: ['visual', 'about', 'portfolio', 'process', 'contact'],
            sectionsColor: ['#FEFFEF', '#ffffff', '#ffffff', '#FEFFEF', '#FEFFEF'],
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['INTRO', 'ABOUT ME', 'PORTFOLIO', 'POSSIBILITY', 'CONTACT'],
            onLeave: function(index, nextIndex, direction){
                // nextIndex
                $('.section [data-aos]').each(function(){
                    $(this).removeClass("aos-animate");
                });
            },
            afterLoad: function(anchorLink, index){
                if (index == 1) {
                    $(".okji").addClass("on");
                } else {
                    $(".okji").removeClass("on");
                }

                if (index == 1) {
                    $("#section0 .main span").addClass("on");
                } else {
                    $("#section0 .main span").removeClass("on");
                }
            
                if (index == 2) {
                    $(".skills ul").addClass("on");
                }
                
                if (index == 4) {
                    $(".r_pos .hex").addClass("on");
                }
                
                if ( aosChk == 0) {
                    aosChk = 1;
                } else {
                    $('.section.active [data-aos]').each(function(){
                        $(this).addClass("aos-animate");
                    });
                }
            },
        });
        isFullPageActive = true;
    }
}

// fullPage 파괴 함수 (레이아웃은 유지)
function destroyFullPage() {
    if (window.innerWidth <= 1200 && isFullPageActive && fullpageInstance) {
        $.fn.fullpage.destroy('all');
        isFullPageActive = false;
        
        // 파괴 후 기본 스타일만 리셋 (레이아웃 변경 안함)
        $('.section').css({
            'height': 'auto',
            'min-height': '100vh'
        });
        
        // 기본 애니메이션들 활성화
        $(".okji").addClass("on");
        $("#section0 .main span").addClass("on");
        $(".skills ul").addClass("on");
        
        // 스크롤 이벤트로 애니메이션 처리
        handleScrollAnimations();
    }
}

// 스크롤 애니메이션 처리 (fullPage 없을 때)
function handleScrollAnimations() {
    $(window).on('scroll.customScroll', function() {
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        
        // Section 3 애니메이션
        const section3Top = $('#section3').offset().top;
        if (scrollTop + windowHeight * 0.8 > section3Top) {
            $(".r_pos .hex").addClass("on");
        }
        
        // AOS 애니메이션
        $('.section [data-aos]').each(function() {
            const elementTop = $(this).offset().top;
            if (scrollTop + windowHeight * 0.8 > elementTop) {
                $(this).addClass("aos-animate");
            }
        });
    });
}

// 반응형 체크 및 fullPage 토글
function checkResponsive() {
    if (window.innerWidth > 1200) {
        // 큰 화면: fullPage 활성화
        if (!isFullPageActive) {
            $(window).off('scroll.customScroll'); // 커스텀 스크롤 이벤트 제거
            initFullPage();
        }
    } else {
        // 작은 화면: fullPage 파괴 (레이아웃은 CSS에서 처리)
        destroyFullPage();
    }
}

// 초기 실행
$(document).ready(function() {
    checkResponsive();
    
    // 처음부터 작은 화면이면 애니메이션 바로 적용
    if (window.innerWidth <= 1200) {
        $(".okji").addClass("on");
        $("#section0 .main span").addClass("on");
        $(".skills ul").addClass("on");
    }
});

// 윈도우 리사이즈 이벤트
let resizeTimer;
$(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        checkResponsive();
    }, 250);
});

// 기존 코드 유지
$(".moon").addClass("on");

const content = "Thanks for visiting my Website.";
const text = document.querySelector(".text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 200);