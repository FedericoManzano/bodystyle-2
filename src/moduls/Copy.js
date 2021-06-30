import $ from "jquery"


(function (){

    const copy = () => {

        $(".copy").on("click", (e) => {
            var aux = document.createElement("textarea");
            $(aux).text($(e.target).siblings("pre").text())
            document.body.appendChild(aux);
            aux.select();
            document.execCommand("copy");
            document.body.removeChild(aux);

            setTimeout(() => {
                $(".tips").remove()
                $(".cover-drop").hide()
            }, 1500)
        })

    } 
    const Copy = {
        init: () => copy()
    }


    window.Copy = Copy

})()

export default Copy


  


