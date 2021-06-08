
import Nav from "./moduls/Nav"
import Handler from "./moduls/Input-Handler"
import Disabled from "./moduls/Disabled"
import Css from "./moduls/CodeCss"


(function() {

    Handler.init()
    Disabled.init()

    /** Codigo */
    const CodigoCssInit = (config) => {
        Css.iniciar(config)
    }


    const navInit = () => {
        Nav.init()
    }




    const BS = {
        NavInit: () => navInit(),
        CssInit: (config) => CodigoCssInit(config )
    } 
    

    window.BS = BS
})()

export default BS