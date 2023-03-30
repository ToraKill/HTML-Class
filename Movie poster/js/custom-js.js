$(document).ready(function() {
//call in all required files
$(function() {
    $("#head").load("meta.html");
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});
$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
$(".menu-row").addClass("scrolled-menu");
        }else {
            $(".menu-row").removeClass("scrolled-menu");        

            }
         });
    });
    //our hero slider
    $(".masthead-slider > div:gt(0)").hide();
    setInterval(function() {
$(".masthead-slider > div:first-child");
    .fadeOut(2000)
    .next()
        .fadeIn(2000)
        .end()
        .appendTo(".masthead-slider");

    },3000);
//now for our tabs
$( ".tab-list").on("click","tab",function(e) {
e.preventDefault();
$(".tab").removeClass("active");
$(".tab-content").removeClass("show");
$(this).addClass("active");
$($(this).attr("href")).addClass("show");

//our pop up

});
$(".open").on("click",function() {
$("overlay, .modal").addClass("active-m");
});
$(".close, .overlay").on("click",function() {
$("overlay,.modal").removeClass("active-m");

});
$(document).keyup("click",function(e) {
if (e.keyCode == 27) {
$("overlay,.modal").removeClass("active-m");

}
});
});


//All above this and in css are the header
