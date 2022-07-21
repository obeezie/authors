import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddAuthorForm = () => {
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/authors`, { name })
            .then(res => navigate("/"))
            .catch(err => {
                const errMsgArr = []
                const errResponse = err.response.data.errors
                for (const eachKey in errResponse) {
                    errMsgArr.push(errResponse[eachKey].message)
                }
                setErrors(errMsgArr)
            })
    }

    return (
        <div>
            <h1>Add a new author : </h1>
            <form onSubmit={handleSubmit}>
                <label> Author Name: </label>
                <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit">Submit</button>
                <button onClick={() => navigate("/")}>Cancel</button>
            </form>
            {
                errors.map((err, i) => {
                    return (
                        <p style={{ color: "red" }} key={i}>{err}</p>
                    )
                })
            }


        </div >
    )
}

export default AddAuthorForm