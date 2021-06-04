
import Nav from "./moduls/Nav"

(function() {

    const navInit = () => {
        Nav.init()
    }


    const BS = {
        NavInit: () => navInit()
    } 
    

    window.BS = BS
})()

export default BS