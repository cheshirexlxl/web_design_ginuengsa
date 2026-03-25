$(function() {
    $(".main-menu li").on("mouseenter", function() {
        $(this).find(".sub-menu").stop().slideDown()
    })
    $(".main-menu li").on("mouseleave", function() {
        $(this).find(".sub-menu").stop().slideUp()
    })

    const speed = 500;
    const time = 3000;
    const $slide = $(".slide")
    const $container = $(".slide-container")
    const size = $slide.height()
    const count = $slide.length;
    $container.height(size * count)
    setInterval(function() {
        
    }, time)


})