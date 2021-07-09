import $ from 'jquery'


(() => {

    const inicializar = () => {
        $(".disabled, .disabled *").removeAttr("onclick")
        $(".disabled, .disabled *").removeAttr("ondblclick")
        $(".disabled, .disabled *").removeAttr("onmousedown")
        $(".disabled, .disabled *").removeAttr("onmouseleave")
        $(".disabled, .disabled *").removeAttr("onmouseout")
        $(".disabled, .disabled *").removeAttr("onkeydown")
        $(".disabled, .disabled *").removeAttr("onkeypress")
        $(".disabled, .disabled *").removeAttr("onkeyup")
        $(".disabled, .disabled *").removeAttr("href")
        $(".disabled, .disabled *").removeAttr("onfocus")
        $(".disabled, .disabled *").removeAttr("onblur")
        $(".disabled, .disabled *").removeAttr("onchange")
        $(".disabled, .disabled *").removeAttr("onselect")
        $(".disabled, .disabled *").removeAttr("onreset")
        $(".disabled, .disabled *").removeAttr("onsubmit")
        $("input.desactivado").attr("readonly", true)
        $("*.disabled *").attr("readonly", true)
        $("*.disabled *").addClass("desactivado")
        $("input.disabled").siblings("label").removeAttr("for")
    }

    var Disabled = {
        init: () => inicializar()
    }
    window.Disabled = Disabled
})()

export default Disabled