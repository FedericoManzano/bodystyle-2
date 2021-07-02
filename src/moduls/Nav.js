import $ from "jquery"

/**
 * Logica del Nav de la librería 
 * Muestra o oculta el sidebar dependiendo el estado de mismo
 * en un momento determinado según la demanda del usuario.
 */
(function(){

    // Desplazamiento del sidenav hacia la izquierda
    const HIDE      = -100

    // Desplazamiento del sidenav hacia la derecha
    const SHOW      = 0

    // Visible none
    let visible     = false

    // ID del sidenav
    let id          = null

    /**
     * Inicializa los elementos del Nav
     * Agrega el cover para desaparecer el nav
     */
    const initNav = () => {

        $("bs-trigger").children("span").removeClass("bs-close")
        $("bs-trigger").children("span").addClass("bs-menu-line-2")


        // Agrega el sidebar cover
        $("body").append(`<div class="body-sidebar-cover"></div>`)


        // Oculta el sidebar cover
        $(".body-sidebar-cover").hide()


        // Obtiene el id del sidebar
        id = $(".bs-trigger").data("trigger")
        $(id).css("top", $(".body-nav-dark").outerHeight()  )
        $(window).on("scroll", () => {
            $(id).css("top", $(".body-nav-dark").outerHeight() )
        })
            
    }

    /**
     * Oculta o muestra el sidebar dependiendo 
     * del valor de la variable (visible)
     * @param {desplazamiento del sidebar} left 
     */
    const move = (left) => {
        if(visible) {
            $(id).css("left", left + "%")
            $(".body-sidebar-cover").hide()
            $(".bs-trigger span").removeClass("bs-close")
            $(".bs-trigger span").addClass("bs-menu-line-2")
            visible = false
        } else {
            $(id).css("left", left + "%")
            $(".body-sidebar-cover").show()
            $(".bs-trigger span").removeClass("bs-menu-line-2")
            $(".bs-trigger span").addClass("bs-close")
            visible = true
        }
    }

    /**
     * Captura el evento click sobre el icono del menú
     * Si visible = false llama a move para mostrar el 
     * sidebar
     * @see move()
     */
    const activate = () => {
        $(".bs-trigger").on("click", (e) => {
            // Si id existe y es diferente a undefined y visible = false
            if( id !== null && id !== undefined && !visible ) 
                move(SHOW)
        })
    }


    /**
     * Captura el evento click sobre el icono del menú
     * Si visible = true llama a move para ocultar el 
     * sidebar
     * @see move()
     */
    const desactivate = () => {
        $(".body-sidebar-cover").on("click", (e) => {
            if( id !== null && id !== undefined && visible ) 
                move(HIDE)
        })
    }

    /**
     * Captura el evento resize de la 
     * ventana y oculta el sidebar si este 
     * es visible
     */
    const resize = () => {
        $(window).on("resize", () => {
            if( id !== null && id !== undefined && visible ) 
                move(HIDE)
        })
    }

    const Nav = {
        init: () => {
            initNav()       // Inicializa el nav
            activate()      // activa el nav si este no es visible
            desactivate()   // desactiva a el nav si está activado
            resize()
        }
    }

    window.Nav = Nav
})()

export default Nav