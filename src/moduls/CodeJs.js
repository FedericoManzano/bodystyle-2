import CodigoJs from "show-sintax/src/modulos/CodigoJs"

(() => {

    const inicializar = (config) => {
        CodigoJs.iniciar(config)
    }


    const Js = {
        iniciar: (config) => {
            inicializar(config)
        }
    }

    window.Js = Js
})()

export default Js
