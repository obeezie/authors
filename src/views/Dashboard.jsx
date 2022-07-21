import { useEffect, useState } from "react"
import React from 'react'
import axios from 'axios'
import AuthorsTable from "../components/AuthorsTable"

const Dashboard = () => {
    const [authors, setAuthors] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <a href='/authors'>Add an author</a>
            <AuthorsTable />
        </div>
    )
}

export default Dashboard