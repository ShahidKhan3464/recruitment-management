import React from 'react'
import { FaToolbox } from 'react-icons/fa'
import './style.css'

const Sidebar = () => {

    return (
        <div id='sidebar'>
            <div className="sidebar-title">
                <div className="sidebar-img">
                    <h1>CertiJob</h1>
                </div>
            </div>
            <div className="sidebar-menu">
                <FaToolbox />
                <a href="#">My Recruitment</a>
            </div>
        </div>
    )
}

export default Sidebar