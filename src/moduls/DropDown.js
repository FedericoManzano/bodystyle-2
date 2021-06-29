import Drop from "dynamics-tips/src/moduls/Dropdown"
import Cover from "dynamics-tips/src/moduls/cover/Cover"
(function () {

   
    const DropDown = {
        iniciar: () => {
            Drop.init(Cover)
        },
        destroy: () => {
            Drop.destroy()
        }
    }

    window.DropDown = DropDown
})()

export default DropDown