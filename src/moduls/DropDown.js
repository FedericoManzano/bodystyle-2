
// Objeto drop de la libreria Dynamics Tips
import Drop from "dynamics-tips/src/moduls/Dropdown"

// Cover de la libreria Dynamics Tips 
import Cover from "dynamics-tips/src/moduls/cover/Cover"

/**
 * Elemento drop de la librería Dynamics Tips 
 * Repositorio: https://github.com/FedericoManzano/dynamics-tips2
 */
(() => {
    const DropDown = {
        /**
         * Inicializa los elementos de la dependecia Dynamics
         * @see node_modules/dynamics-tips/src/moduls/cover/Cover
         */
        iniciar: () => Drop.init( Cover ),


        /**
         * Todo el codigo del drop se encuentra dentro de
         * @see node_modules/dynamics-tips/src/moduls/Dropdown
         */
        destroy: () => Drop.destroy()
    }

    window.DropDown = DropDown
})()

export default DropDown