import Tips from "dynamics-tips/src/moduls/Tips"
import Cover from "dynamics-tips/src/moduls/cover/Cover"
(function(){

    var ToolTips = {
        iniciar: () => {
            Tips.init(Cover)
        },
        destroy: () => Tips.destroy()
    }

    window.ToolTips = ToolTips;
})()

export default ToolTips;