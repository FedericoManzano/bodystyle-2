import Drop from "dynamics-tips/src/moduls/Dropdown"

(function () {

   
    const DropDown = {
        iniciar: () => {
            Drop.init()
        },
        destroy: () => {
            Drop.destroy()
        }
    }

    window.DropDown = DropDown
})()

export default DropDown