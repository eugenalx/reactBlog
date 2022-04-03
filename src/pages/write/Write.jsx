import './write.css'

export default function Write() {
  return (
    <div className='write'>
        <img src="../images/3.jpeg" alt="" className="writeImg" />
        <form className='writeForm'>
            <div className="writeFormGroup writeFile">
                <label htmlFor="writeFile" className='tooltip'>
                    <i className="writeIcon fa-solid fa-circle-plus"></i>
                    <span className="tooltipText">Add Photo</span>
                </label>
                <input type="file" id='writeFile' style={{display:'none'}}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Your story...' type='text' className='writeInput writeText' ></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
