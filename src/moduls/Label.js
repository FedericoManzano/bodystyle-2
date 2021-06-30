import $ from "jquery"


/**
 * Clase para generar topics en las paginas web
 */
class Label {
    
    /**
     * Devuellve un string quitando la coma del fina de la 
     * palabra.
     * @param {*} label String con el texto del label
     * @returns String con el texto del label sin el ','
     */
    static norm (label) {
        label = label.replace(";", "")
        return label.replace(",", "")
    }


    /**
     * Valida si el texto dentro del label 
     * es valido para ser mostrado
     * @param {*} label String de la etiquta 
     * @returns boolean si la cadena es valida
     */
    static val (label) {
        if(label === null || label === undefined)
            return false
        if(/^ *$/.test(label))
            return false 
        if(/^,*$/.test(label))
            return false 
        if(/^( *[a-zA-Z0-9-_]+ *)+$/.test(label))
            return false
        return true
    }

    /**
     * Permite saber si el usuario quiere finalizar el texto para poder 
     * crear la etiqueta.
     * @param {*} key Tecla presionada por el usuario
     * @returns true / false (Enter | ; | ,) cortan la cadena
     */
    static valKey ( key ) {
        return key === "Enter" || key === ";" || key === ","
    }


    /**
     * Devuelve una lista con los textos dentro de 
     * los labels
     * @param {*} {id del elemento a entregar} 
     * @returns listado de labels dentro del topic
     */
    getList({id = "DinId"}= {}) {
        let listadoEntrega = new Array()
        $(id + " .label-topic .lab a")
            .each( ( index, ele ) => listadoEntrega.push( $(ele).text()) )
        return listadoEntrega 
    }

    /**
     * Crea un objeto de Jquery con el HTML necesario
     * para crear una etiqueta nueva. 
     * @param {*} info 
     * @returns Devuelve un objeto $ con la etiqueta a agregar
     */
    static newLabel (info) {
        return $(`
        <div class='lab'>
            <a>${info}</a>
            <span class="bs-close cruz"></span>
        </div>
        `)
    }

    init({id = "SinID"} = {}) {

        // ID seleccionado
        let ids = id;

        // Lista de estado que contiene los labels activos
        let listasLabel = new Array()
       
        // Crea el objeto label-topic contenedor de los labels
        $(ids + ".topic").append( `<div class="label-topic"></div>` )

        // Crea el input para escribir y genera a los labels
        $(ids + ".topic").append( `<input type='text' class='camp'>`)

        /**
         * Evento para detectar las teclas presionadas por el usuario
         * en el campo de texto del topic
         */
        $(ids +" input.camp").on("keyup", (e) => {
            /**
             * Validar la tecla presionada para
             * detectar el final del texto
             */
            if( Label.valKey(e.key) ){

                /**
                 * Valida el texto dentro del valor del input
                 */
                if( Label.val($(e.target).val()) ) {

                    /**
                     * Recorre todos los elementos dentro
                     * del objeto .label-topic
                     * y los agrega a la lista
                     */
                    $(e.target).siblings( ".label-topic" )
                        .children("label")
                        .each((index, elem) => listasLabel.push(elem))
        
                    // Levanta la info del input
                    let info = Label.norm($(e.target).val())
                    
                    // Crea la etiqueta hatml con la info
                    let nueva = Label.newLabel(info)
                
                    // Agrega la etiqueta
                    listasLabel.push(nueva)

                    // Limpia todas las etiquetas
                    $(e.target).siblings(".label-topic").html("")
                        
                    // .label-topic  cargado con los elementos 
                    // actualizados de la lista
                    listasLabel.forEach( ( ele,index ) => 
                        $(e.target).siblings(".label-topic").append(ele))


                    /**
                     * Detecta cuando se quiere borrar una etiqueta
                     */
                    $(".cruz").on("click", (e) => {

                        // inicializa la lista (Borra todo)
                        listasLabel = new Array()
                        
                        // Remueve la lista seleccionada
                        $(e.target).parent().remove()

                        // Actualiza la lista con la nueva info
                        $(id + " .label-topic .lab")
                            .each( (index, ele) => listasLabel.push(ele))
                    })

                    // Limpia el campo de texto
                    $(e.target).val("")
                }
            }
        })
    }
}

export default Label