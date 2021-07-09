
import $ from 'jquery'



(() =>  {



    const deployImage = (e) => {
        $("html").append("<div class='container-image'></div>")
        var ruta = $(e.target).attr("src")
        $(".container-image").append(`<img src=${ruta.toString()}></img>`)
        $(".container-image").animate({
            opacity: 1
        }, 500 )
        $(".container-image").on("click", () => {
            $(".container-image").fadeOut(300) 
        })
   } 
   const inicializar = () => {
       $(".img-exp").on("click", deployImage)
   }

   var destroy = () => {
        $(".img-exp").off("click", deployImage)
   } 

   var cerrar = () => {
        $("body").on('keydown',function(e){
            if ( e.which == 27 ) {
                $(".contenedor-imagen").hide()
            };
        });

        $(window).on('mousewheel', function(e){ 
            $(".contenedor-imagen").hide() 
        });
   }


    var Image = {
        iniciar: () => {
            inicializar()
            cerrar()
        },
        destroy: () => destroy()
    }
    window.Image = Image;
})()

export default Image;