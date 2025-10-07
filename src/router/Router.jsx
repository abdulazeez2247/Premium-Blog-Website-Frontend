import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../pages/Home'
import About from '../pages/About'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import TermsandConditions from '../pages/TermsandConditions'
import ForgotPassword from '../pages/ForgotPassword'
import ResetPassword from '../pages/ResetPassword'
import Verify from '../pages/Verify'
import ResendOtp from '../pages/ResendOtp'

export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
            <Route path='/termsandconditions' element={<TermsandConditions/>}/>
            <Route path='/forgotpassword' element={<ForgotPassword/>}/>
            <Route path='/resetpassword' element={<ResetPassword/>}/>
            <Route path='/verify' element={<Verify/>}/>
            <Route path='/resendotp' element={<ResendOtp/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
