import './settings.css'
import Sidebar from '../../components/Sidebar/Sidebar'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsContainer">
            <div className="settingsTitle">
                <div className="settingsUpdateTitle">Update your account</div>
                <div className="settingsDeleteTitle">Delete account</div>
            </div>
            <form className='settingsForm'>
                <label >Profile Picture</label>
                <div className="settingsPP">
                    <img src="../images/3.jpeg" alt="" />
                    <label htmlFor="fileInput">
                        <i className='settingsPPIcon far fa-user-circle'></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                </div>
                <label >Username</label>
                <input type="text" placeholder="Eugen" />
                <label >Email</label>
                <input type="email" placeholder="eugenalx@gmail.com" />
                <label >Pass</label>
                <input type="password"  />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}