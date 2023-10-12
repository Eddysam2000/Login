import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav className='nav'>
            <a href="/" className='acad'>Academy</a>
            <ul>
                <li className='active'>
                    <a href="/jobs">Jobs</a>
                </li>
                <li>
                    <a href="/jobs">Jobs</a>
                </li>
                <li>
                    <a href="/jobs">Jobs</a>
                </li>
                <li>
                    <a href="/jobs">Jobs</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar