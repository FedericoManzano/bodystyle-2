import Comment from "dynamics-tips/src/moduls/Comment"

/**
 * Comentarios dinámicos de la dependecia Dynamics Tips
 * @see node_modules/dynamics-tips/src/moduls/CommentDim
 */
(function () {

    
    const CommentDin = {
        /**
         * Iniciar con el metodo estático 
         * de la clase Comment
         * @see node_modules/dynamics-tips/moduls/Comment.init()
         */
        iniciar: () => Comment.init(),

        /**
         * Destruye y desvincula todos los eventos asociados 
         * a los elementos. 
         */
        destroy: () => Comment.destroy()
    }

    window.CommentDin = CommentDin
})()

export default CommentDin