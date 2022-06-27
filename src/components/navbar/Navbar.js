import React from 'react'
import { IoMdNotifications } from 'react-icons/io'
import './style.css'

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="navbar_left">
                <p>My Recruitments</p>
            </div>
            <div className="navbar_right">
                <a href="#">
                    <IoMdNotifications />
                </a>
                <a href="#">
                    <img width="30" src={require('../../assets/images/avatar.jpg')} alt="avatar" />
                </a>
            </div>
        </div>
    )
}

export default Navbar