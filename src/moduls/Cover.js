
import Cover from "dynamics-tips/src/moduls/cover/Cover"


(function () {

   
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
