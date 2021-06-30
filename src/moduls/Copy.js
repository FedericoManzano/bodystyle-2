import $ from "jquery"

/**
 * Boton asociado a la dependencia show-code
 * para permitirle al usuario copiar el codigo
 * dentro de los elementos <pre> de la página
 * @see node_modules/show-code
 */
(function (){

    const copy = () => {

        // Toma todos los elemetos con la clase 
        // Copy y le asigna el evento click
        $(".copy").on("click", (e) => {

            // Crea un text area axiliar en la pagina
            var aux = document.createElement("textarea");

            // Introduce el texto que el usuario quiere copiar 
            // dentro del textarea auxiliar
            $(aux).text($(e.target).siblings("pre").text())

            // agrega al documento el text area
            document.body.appendChild(aux);

            // Selecciona el texto dentro del text area
            aux.select();

            // Ejecuta el comando copy
            document.execCommand("copy");

            // Remueve el textarea auxiliar
            document.body.removeChild(aux);

            /**
             * Controla el efecto del  tips 
             * añadido al boton copy
             * 1.5 segundos lo desaparece
             */
            setTimeout(() => {
                // Tips removidos
                $(".tips").remove()

                // Desaparece el cover del tips
                $(".cover-drop").hide()
            }, 1500)

            $(window).on("scroll", () => {
                $(".tips").remove()
                // Desaparece el cover del tips
                $(".cover-drop").hide()
            })

            $(window).on("resize", () => {
                $(".tips").remove()
                // Desaparece el cover del tips
                $(".cover-drop").hide()
            })
        })

    } 
    const Copy = {

        // Inicializa el evento copy
        init: () => copy()
    }


    window.Copy = Copy

})()

export default Copy


  


