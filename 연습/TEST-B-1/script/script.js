$(function() {
    $(".main-menu").on("mouseenter", function() {
        $(".sub-menu").stop().slideDown()
    })
    $(".main-menu").on("mouseleave", function() {
        $(".sub-menu").stop().slideUp()
    })

    const speed = 500;
    const time = 3000;
    const $slide = $(".slide")
    const $container = $(".slide-container")
    const size = $slide.width()
    const count = $slide.length;
    $container.width(size * count)
    setInterval(function() {
        $container.animate({
            left: -size
        }, speed, function() {
            $container.css("left", "0")
            $container.append($(".slide").first())
        })
    }, time)

    $("#btn-notice").on("click", function() {
        $("#content-notice").show()
        $("#content-gallery").hide()
        $(".menu-item").removeClass("active")
        $(this).parent().addClass("active")
    })
    $("#btn-gallery").on("click", function() {
        $("#content-notice").hide()
        $("#content-gallery").show()
        $(".menu-item").removeClass("active")
        $(this).parent().addClass("active")
    })

    $(".btn-modal").on("click", function() {
        $("#modal").show()
    })
     $(".close").on("click", function() {
        $("#modal").hide()
    })
})