import "./post.css"

export default function Post() {
  return (
    <div className='post'>
        <div className="postImg">
            <img src="../images/eden.jpg" alt="" />
        </div>
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <div className="postTitle">
                Titlu de exemplu
            </div>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postText">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam sunt perferendis, neque ea laborum corporis soluta nisi, debitis, eligendi expedita esse nihil unde nobis non rerum eius incidunt doloremque odit?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, eius nulla? Dolor, nam harum saepe corrupti, quibusdam architecto molestiae tempore omnis magni qui enim similique facilis, possimus pariatur earum quidem.
        </p>
    </div>
  )
}
