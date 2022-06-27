import React from 'react'
import { Link } from 'react-router-dom'

const Top = () => {

    return (
        <div className="top">
            <div className="top-left">
                <div className="top-link">
                    <a href="#">Active</a>
                    <a href="#">Archive</a>
                    <a href="#">Draft</a>
                </div>
            </div>
            <div className="top-right">
                <Link to='/createRecruitment'>Create New Recruitment</Link>
            </div>
        </div>
    )
}

export default Top