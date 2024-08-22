import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import "./SP_Login.css"

function SP_Login() {

  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')

  const loginNow = async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/providerslogin`, {
      mobile: mobile,
      password: password
    })

    if (response.data.success) {
      toast.success(response.data.message)
      localStorage.setItem('currentUser', JSON.stringify(response.data.data))

      toast.loading('Redirecting To Profile')
      
      setTimeout(() => {
        window.location.href = '/spprofile'
      }, 2000)
    }
    
    else {
      toast.error(response.data.message)
    }
  

  }
  return (
    <div>
      <h1 className='header'>Login Now</h1>
      <form>
      <div className='inputs'>
        <input type='text'
          className='email'
          placeholder='Enter Your Mobile No.'
          value={mobile}
          onChange={(e) => {
            setMobile(e.target.value)
          }} />


        <input type='password'
          className='password'
          placeholder='Enter Your Password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }} />

        <button type='button' className='btn-login' onClick={loginNow}>Login</button>
        <p className='redirect' >Don't have an account? <Link to='/spsignup'>Register</Link></p>
        </div>
      </form>

      
      <Toaster />
    </div>

  )
}

export default SP_Login