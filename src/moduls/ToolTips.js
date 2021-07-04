
// Tips importados de la librería DynamicsTips
import Tips from "dynamics-tips/src/moduls/Tips"

// Cover importado de la librería DynamicsTips
import Cover from "dynamics-tips/src/moduls/cover/Cover"
(() => {


    var ToolTips = {

        /**
         * Inicializar los tips 
         * @see node_modules/src/moduls/Tips
         */
        iniciar: () => Tips.init( Cover ),

        /**
         * Destruye todos los elementos dinámicos 
         * Tips y remueve los eventos asignados a estos
         * elementos
         */
        destroy: () => Tips.destroy()
    }

    window.ToolTips = ToolTips;
})()

export default ToolTips;