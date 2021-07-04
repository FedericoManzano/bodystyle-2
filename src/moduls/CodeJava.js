import CodigoJava from "show-sintax/src/modulos/CodigoJava"


(() => {

    const inicializar = (config) => {
        CodigoJava.iniciar(config)
    }

    const Java = {
        iniciar: (config) => {
            inicializar(config)
        }
    }
    window.Java = Java
})()

export default Java