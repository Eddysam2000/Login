import React from 'react'
import './Login.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'


const Login = () => {
  return (
    <div className='container1'>
        <div className='header'>
            <div className="text">Login</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <MdOutlineMail className='icons'/>
                <input type="email" placeholder='Email Id' />
            </div>
            <div className="input">
                <RiLockPasswordLine className='icons'/>
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        <div className="submit-container">
            <div className="submit">Login</div>
        </div>

    </div>
  )
}

export default Login