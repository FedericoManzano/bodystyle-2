import Tips from "dynamics-tips/src/moduls/Tips"

(function(){

    var ToolTips = {
        iniciar: () => {
            Tips.init()
        },
        destroy: () => Tips.destroy()
    }

    window.ToolTips = ToolTips;
})()

export default ToolTips;