import CodigoHtml from "show-sintax/src/modulos/CodigoHtml"
(() => {

    const inicializar = (config) => {
        CodigoHtml.iniciar(config)
    }

    const Html = {
        iniciar: (config) => {
            inicializar(config)
        }
    }
    window.Html = Html
})()

export default Html