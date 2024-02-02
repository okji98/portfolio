let aosChk = 0;
$('#fullpage').fullpage({
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
setInterval(typing, 200)

