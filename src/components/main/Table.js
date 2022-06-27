import React from "react"
import { MdDelete } from "react-icons/md"
import { BiEdit } from "react-icons/bi"

const Table = () => {
    const lists = JSON.parse(localStorage.getItem('lists'))

    const handleDelete = (id) => {
        const newList = lists.filter(list => list.id !== id)
        localStorage.setItem('lists', JSON.stringify(newList))
        alert('Successfully deleted')
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Recruitment Name</th>
                    <th>Role</th>
                    <th>Job Type</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {lists && lists.map(recruitment => (
                    <tr key={recruitment.id}>
                        <td>{recruitment.id}</td>
                        <td>{recruitment.name}</td>
                        <td>{recruitment.role}</td>
                        <td>{recruitment.jobType}</td>
                        <td>{new Date(recruitment.date).toLocaleDateString('en-GB')}</td>
                        <td>
                            <MdDelete onClick={() => handleDelete(recruitment.id)} />
                            <BiEdit />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table