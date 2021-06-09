import $ from "jquery"


/**
 * Efecto waves para botones
 */
(function() {

    const inicializar = () => {
        $(".waves").on("click", (e) => {

            // Color seleccionado por el usuario 
            // recibe un valor hexadecimal
            let color = $(e.target).data("color")
            
            let elemento = $(`<span class="waves-effect"></span>`)
            let ancho = $(e.target).innerWidth()
            let alto = $(e.target).innerHeight()

            $(elemento).css("background-color", color)
        
            let posX = e.pageX - $(e.target).offset().left
            let posY = e.pageY - $(e.target).offset().top

            $(elemento).css({
                width:      0,
                height:     0,
                left:       posX,
                top:        posY,
            }).appendTo(e.target).animate({
                width:      ancho > alto ? ancho: alto,
                height:     ancho > alto ? ancho: alto,
            }, 300, () => {
                $(elemento).remove()
            })
        })
    }

    const Waves = {
        init: () => inicializar()
    }

    window.Waves = Waves

})()

export default Waves