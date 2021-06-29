import Drop from "dynamics-tips/build/moduls/Dropdown"

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