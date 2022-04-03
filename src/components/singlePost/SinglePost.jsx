import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostContaner">
            <img src="../images/3.jpeg" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Post title
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>  
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Oygen</span>
                <span className="singlePostDate">1 minute ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam aliquid alias amet at aut laborum, voluptatem voluptatum mollitia sequi adipisci cupiditate nam sed et velit sint eum eos quo corporis.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae reiciendis laboriosam excepturi! Voluptatum aliquid nesciunt molestiae, excepturi nemo repellendus quam odit. Error hic earum ullam omnis temporibus quos fuga reprehenderit?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error aliquid aspernatur minima nemo incidunt in! Porro culpa corrupti eveniet magni pariatur accusantium eaque quae aut repudiandae. Nisi facere odit esse?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus culpa dicta laborum, quaerat, molestiae saepe ut voluptatibus sunt quae sequi tenetur reiciendis a vitae aliquid unde ipsum numquam impedit ea.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam aliquid alias amet at aut laborum, voluptatem voluptatum mollitia sequi adipisci cupiditate nam sed et velit sint eum eos quo corporis.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae reiciendis laboriosam excepturi! Voluptatum aliquid nesciunt molestiae, excepturi nemo repellendus quam odit. Error hic earum ullam omnis temporibus quos fuga reprehenderit?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error aliquid aspernatur minima nemo incidunt in! Porro culpa corrupti eveniet magni pariatur accusantium eaque quae aut repudiandae. Nisi facere odit esse?
            </p>
        
        </div>

    </div>
  )
}
