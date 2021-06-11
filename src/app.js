
/*!
 * BodyStyle2 v1.0.0
 * Copyright Federico Manzano
 * Licencia MIT
 * Repositorio (https://github.com/FedericoManzano/bodystyle-2)
 */
import Nav      from    "./moduls/Nav"
import Handler  from    "./moduls/Input-Handler"
import Disabled from    "./moduls/Disabled"
import Css      from    "./moduls/CodeCss"
import Html     from    "./moduls/CodeHtml"
import C        from    "./moduls/CodeC"
import Java     from    "./moduls/CodeJava"
import Js       from    "./moduls/CodeJs"
import Waves    from    "./moduls/Waves"

(function() {

    Handler.init()
    Disabled.init()
    Waves.init()


    /** Codigo */
    const CodigoCssInit = (config) => {
        Css.iniciar(config)
    }

    const CodigoHtmlInit = (config) => {
        Html.iniciar(config)
    }

    const CodigoCInit = (config) => {
        C.iniciar(config)
    }

    const CodigoJavaInit = (config) => {
        Java.iniciar(config)
    }

    const CodigoJsInit = (config) => {
        Js.iniciar(config)
    }

    
    const navInit = () => {
        Nav.init()
    }

    const BS = {
        NavInit:    ()        =>  navInit(),
        CssInit:    (config)  =>  CodigoCssInit ( config ),
        HtmlInit:   (config)  =>  CodigoHtmlInit( config ),
        CInit:      (config)  =>  CodigoCInit   ( config ),
        JavaInit:   (config)  =>  CodigoJavaInit( config ),
        JsInit:     (config)  =>  CodigoJsInit  ( config ),
    } 
    
    window.BS = BS
})()

export default BS