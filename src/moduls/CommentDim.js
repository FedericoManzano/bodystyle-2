import Comment from "dynamics-tips/src/moduls/Comment"

(function () {

   
    const CommentDin = {
        iniciar: () => {
            Comment.init()
        },
        destroy: () => {
            Comment.destroy()
        }
    }

    window.CommentDin = CommentDin
})()

export default CommentDin