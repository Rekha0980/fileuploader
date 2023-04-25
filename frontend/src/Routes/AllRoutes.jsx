import React from 'react'
import SignupCard from '../pages/Register'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import FormData from '../pages/FormData'
import { Add } from '../pages/Add'


const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/alldata" element={<FormData />} />
                <Route path="/signup" element={<SignupCard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/add" element={<Add/>} />
                

            </Routes>
        </div>
    )
}

export default AllRoutes