$(function() {
    // 와이드 전체 메뉴
    $(".main, .sub").on("mouseenter", function() {
        $(".sub").stop().slideDown()
    })
    $(".main, .sub").on("mouseleave", function() {
        $(".sub").stop().slideUp()
    })

    // 전체 메뉴
    // $(".main-menu").on("mouseenter", function() {
    //     $(".sub-menu").stop().slideDown()
    // })
    // $(".main-menu").on("mouseleave", function() {
    //     $(".sub-menu").stop().slideUp();
    // })

    // 개별 메뉴
    // $(".main-menu li").on("mouseenter", function() {
    //     $(this).find(".sub-menu").stop().slideDown()
    // })
    // $(".main-menu li").on("mouseleave", function() {
    //     $(this).find(".sub-menu").stop().slideUp()
    // })

    // 이미지 슬라이드
    // 가로
    // const speed = 500;
    // const time = 3000;
    // const $slide = $(".slide")
    // const $container = $(".slide-container")
    // const size = $slide.width()
    // const count = $slide.length;
    // $container.width(size * count)

    // setInterval(function() {
    //     $container.animate({
    //         left: -size
    //     }, speed, function() {
    //         $container.css("left", "0")
    //         $container.append($(".slide").first())
    //     })
    // }, time)

    // 세로
    const speed = 500;
    const time = 3000;
    const $slide = $(".slide")
    const $container = $(".slide-container")
    const size = $slide.height()
    const count = $slide.length;
    $container.height(size * count)

    setInterval(function() {
        $container.animate({
            top: -size
        }, speed, function() {
            $container.css("top", "0")
            $container.append($(".slide").first())
        
        })
    }, time)

    // 페이드
    // let index = 0;
    // const speed = 500;
    // const time = 3000;
    // const $slide = $(".slide")
    // const count = $slide.length;
    // $slide.not(":first").hide()

    // setInterval(function() {
    //     index = (index + 1) % count;
    //     $slide.fadeOut(speed);
    //     $slide.eq(index).fadeIn(speed);
    // }, time)

    // 탭
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

    // 레이어 팝업
    $(".btn-modal").on("click", function() {
        $("#modal").show()
    })
    $(".close").on("click", function() {
        $("#modal").hide()
    })
})
