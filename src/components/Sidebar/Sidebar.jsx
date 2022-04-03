import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img src="../images/Adah.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit a debitis ab suscipit tempora illo consequuntur.
            </p>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul>
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
             </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Me</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcons fa-brands fa-facebook"></i>
                    <i className="sidebarIcons fa-brands fa-facebook"></i>
                    <i className="sidebarIcons fa-brands fa-facebook"></i>
                    <i className="sidebarIcons fa-brands fa-facebook"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

