import { Link } from "react-router-dom"
import './register.css'

export default function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <input type="username" placeholder='Enter your username' className='registerInput' />
            <input type="email" placeholder='Enter your email' className='registerInput' />
            <input type="password" placeholder='Enter your password' className='registerInput' />
        </form>
        <button className="registerLoginButton">
            <Link className="link" to="/login">Login</Link>
        </button>
    </div>
  )
}
