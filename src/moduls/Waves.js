import $ from "jquery"


/**
 * Efecto waves para botones
 */
(() => {


    // Clase de css con los estilos de objeto temporal
    let claseEfecto = "waves-effect"

    // Objeto temporal a añadir durante el efecto
    let objetoTemporal = `<span class=${claseEfecto}></span>`

    const inicializar = () => {
        $(".waves").on("click", (e) => {

            // Color seleccionado por el usuario 
            // recibe un valor hexadecimal
            let color = $(e.target).data("color")


            // Si el usuario no añade el data-color 
            // lo inicializo con blanco
            if(color === null || color === undefined) 
                color = "#fff"
            
            let elemento = $(objetoTemporal)
            let ancho = $(e.target).innerWidth()
            let alto = $(e.target).innerHeight()

            // Configurar el color de fondo del elemento a agregar
            $(elemento).css("background-color", color)
            /*
                Coordenadas de donde raliza click el usuario
            */
            let posX = e.pageX - $(e.target).offset().left
            let posY = e.pageY - $(e.target).offset().top

            $(elemento).css({
                width:      0, // Comienza con un ancho de 0
                height:     0,
                left:       posX, // se hubica en la posición del click
                top:        posY,
            }).appendTo(e.target).animate({
                width:      ancho > alto ? ancho: alto,
                height:     ancho > alto ? ancho: alto,
            }, 300, () => {
                $(elemento).remove()
            })
        })
    }

    const Waves =  {
        init: () => inicializar()
    }
    window.Waves = Waves

})()

export default Waves