$(".board_page > a").click(function(){
    $(this).addClass("select").siblings().removeClass("select");
    let bn = $(this).index() - 1;
    $("table").eq(bn).addClass("view").siblings().removeClass("view");
});