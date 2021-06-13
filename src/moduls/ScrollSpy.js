import $ from "jquery"

(function() {

    const init = () => {
        configScroll()
        $(window).on("scroll", (e) => {     
            configScroll()
        })

        $(".scroll-spy ul li a").on("click", (e) => {
            $(".scroll-spy ul li a").each((index, ele) => {
                $(ele).removeClass("select")
            })

            $(e.target).addClass("select")
        })
    } 

    const configScroll = () => {
        $(".scroll-item").each((index, ele) => {         
                 
            if( $(window).scrollTop() >= $(ele).offset().top - 200 ) {

                let id = $(ele).attr("id")
                $(".scroll-spy ul li a").each((index, ele) => {
                    if( $(ele).data("scroll") === "#" + id ) {
                        $(ele).addClass("select")
                    } else {
                        $(ele).removeClass("select")
                    }
                })
            }
        })
    }


    const ScrollSpy = {
        init: () => init()
    }


    window.ScrollSpy = ScrollSpy
})()

export default ScrollSpy