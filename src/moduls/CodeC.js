import CodigoC from "show-sintax/src/modulos/CodigoC"


(() => {
   
    const inicializar = (config) => CodigoC.iniciar(config)

    const C = {
        iniciar: (config) => inicializar(config)
    }

    window.C = C
})()

export default C