import $ from "jquery"

(function(){


    /**
     * <label for="" class="lab">
                <a href="" >CSS </a>
                <span class="bs-close cruz"></span>
            </label>
     */

    let listasLabel = new Array()
    const init = () => {
        $(".topic").append(`<div class="label-topic "></div>`)
        $(".topic").append(`<input type='text' class='camp'>`)
        $("input.camp").on("keyup", (e) => {
            
            if(e.key === "Enter" || e.key === ";" || e.key === "," || e.key === " "){
                listasLabel = new Array()
                $(".lab").each((ele) => {
                    listasLabel.push(ele)
                })
                let nueva = $(`
                        <div class='lab'>
                            <a href="">${$(e.target).val()}</a>
                            <span class="bs-close cruz"></span>
                        </div>
                `)
                listasLabel.push(nueva)
                $(".label-topic").html("")
                
                
                listasLabel.forEach((ele,index) => {
                    $(".label-topic").append(ele)
                })

                $(e.target).val("")

            }
        })
    }

    const Label = {
        init: () => init()
    }


    window.Label = Label
})()

export default Label