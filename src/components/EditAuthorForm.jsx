import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const EditAuthorForm = () => {
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                const author = res.data
                setName(author.name)
            })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, { name })
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
            <h1>Edit Author : </h1>
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
        </div>
    )
}

export default EditAuthorForm