import { Link } from "react-router-dom"
import "./topbar.css";


export default function TopBar() {
  const user = true;
  return (
    <div className="top">
         <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-facebook"></i>
         </div>
         <div className="topCenter">
             <ul className="topList">
                 <li className="topListItem">
                    <Link className="link" to="/">Home</Link>
                  </li>
                 <li className="topListItem">
                    <Link className="link" to="/">About</Link>
                 </li>
                 <li className="topListItem">
                    <Link className="link" to="/">Contact</Link>
                 </li>
                 <li className="topListItem">
                    <Link className="link" to="/write">Write</Link>
                 </li>
             </ul>
         </div>
         <div className="topRight">
            { user ? (

             <img className= "topImage" 
             src="../images/1.jpg" 
             alt="" />
            ) : (<Link className="link" to="/login">
                <i class="topSearchIcon fa-solid fa-arrow-right-to-bracket"></i>
            </Link>) 
            }
             <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
           
             { user  && 
             <i className="topSearchIcon fa-solid fa-arrow-right-from-bracket"></i>
}

         </div>
    </div>
  )
}
