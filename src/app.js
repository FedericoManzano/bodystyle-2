
import Nav from "./moduls/Nav"
import Handler from "./moduls/Input-Handler"
import Disabled from "./moduls/Disabled"

(function() {

    Handler.init()
    Disabled.init()

    const navInit = () => {
        Nav.init()
    }


    const BS = {
        NavInit: () => navInit()
    } 
    

    window.BS = BS
})()

export default BS