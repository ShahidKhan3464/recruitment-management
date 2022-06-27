import React, { useState } from 'react'
import './style.css'

const Create = () => {
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [jobType, setJobType] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        var lists = JSON.parse(localStorage.getItem('lists'))
        if (lists === null) lists = []
        const id = lists.length + 1
        const date = new Date()
        const recruitment = { id, name, role, jobType, date }
        lists.push(recruitment)
        localStorage.setItem('lists', JSON.stringify(lists))
        alert("Successfully created")
        setName('')
        setRole('')
        setJobType('')
        setDescription('')
    }

    return (
        <div className="create-recruitment">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter name of your Recruitment'
                />
                <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder='Job Role'
                />
                <input
                    type="text"
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    placeholder='Job Type'
                />
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Description'
                />
                <div className="buttons">
                    <button type='button' className='cancel-btn'>Cancel</button>
                    <button type='submit' className='create-btn'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default Create