import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AuthorsTable = () => {
    // console.log(props)

    const [authorList, setAuthorList] = useState()



    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then(res => setAuthorList(res.data))
            .catch(err => console.log(err))
    }, [authorList])



    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }


    return (
        <div>
            <p>We have quotes by: </p>
            {
                authorList ?
                    <table>
                        <thead>
                            <tr>
                                <td>Author</td>
                                <td>Actions Available</td>
                            </tr>
                        </thead>
                        <tbody>
                            {authorList.map((author, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{author.name}</td>
                                        <td><Link to={`/authors/${author._id}`}>Edit</Link> <a href="" onClick={() => handleDelete(author._id)}>Delete</a></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table> :
                    ""
            }
        </div>
    )
}

export default AuthorsTable