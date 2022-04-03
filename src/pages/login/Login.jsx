import { Link } from "react-router-dom"
import './login.css'

export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <input type="email" placeholder='Enter your email' className='loginInput' />
            <input type="password" placeholder='Enter your password' className='loginInput' />
            
        </form>
        <button className="loginRegisterButton">
            <Link className="link" to="/register">Register</Link>
        </button>
    </div>
  )
}
