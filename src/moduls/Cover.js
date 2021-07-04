
import Cover from "dynamics-tips/src/moduls/cover/Cover"


(() => {

   
    const CoverDin = {
        iniciar: () => {
            Cover.init()
        },
        destroy: () => {
            Drop.destroy()
        }
    }

    window.CoverDin = CoverDin
})()

export default CoverDin
