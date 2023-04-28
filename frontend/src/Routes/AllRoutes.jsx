import React from 'react'
import SignupCard from '../pages/Register'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import FormData from '../pages/FormData'
import { Add } from '../pages/Add'
import Update from '../pages/Update'
import { Viewimage } from '../pages/Viewimage'


const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/alldata" element={<FormData />} />
                <Route path="/signup" element={<SignupCard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/add" element={<Add/>} />
                <Route path="/update/:id" element={<Update/>}/>
                <Route path="/image/:id" element={<Viewimage/>}/>
                

            </Routes>
        </div>
    )
}

export default AllRoutes