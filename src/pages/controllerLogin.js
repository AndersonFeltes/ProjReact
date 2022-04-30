import React from 'react'
import Login from './Login/login'
import Registrar from './registrar/registrar'
import{ BrowserRouter, Routes, Route } from 'react-router-dom'

function ControllerLogin() {
    return(
            <BrowserRouter>
                <Routes>

                    <Route path="/"  element={<Login />} />

                    <Route path="/registrar" element={<Registrar />} />

                    <Route path="*" element={<h1>Not Found</h1>} />

                </Routes>

            </BrowserRouter>
    )
}
export default ControllerLogin;