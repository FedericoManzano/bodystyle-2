import $ from "jquery"

(function() {
    
    const handler = () => {
        
        $("input").each( (index, ele) => {
            if( $(ele).attr("readonly") !== undefined ) 
                $(ele).addClass("disabled")
            
            $(ele).on("blur", (ev) => {
                if( $(ev.target).attr("required") !== undefined)
                    $(ev.target).addClass("input-err")
            })
        })
    }


    const Handler = {
        init: () => handler()
    }

    window.Handler = Handler
})()

export default Handler