import React, { useState } from 'react'
import "./Signup.css"
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Signup() {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        mobile: '',
        age: ''
    })

    const signup = async () => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/v1/signups`, {
            name: user.name,
            email: user.email,
            password: user.password,
            age: user.age,
            address: user.address,
            mobile: user.mobile

        })



        if (response.data.success) {


            toast.success(response.data.message)


            setUser({
                name: '',
                email: '',
                password: '',
                age: '',
                address: '',
                mobile: ''

            })

        }

        else {

            return toast.error(response.data.message)


        }



    }
    return (
        <div>
            <h1 className='header'>Signup Now</h1>

            <form className='signup-form'>
                <div className='inputs'>
                    <input
                        type='text'
                        className='name'
                        placeholder='Enter Your Name'
                        value={user.name}
                        onChange={(e) => {
                            setUser({ ...user, name: e.target.value })
                        }} />

                    <input type='email'
                        className='name'
                        placeholder='Enter Your Email'
                        value={user.email}
                        onChange={(e) => {
                            setUser({ ...user, email: e.target.value })
                        }} />


                    <input type='password'
                        className='name'
                        placeholder='Enter Your Password'
                        value={user.password}
                        onChange={(e) => {
                            setUser({ ...user, password: e.target.value })
                        }} />

                    <input type='number'
                        className='name'
                        placeholder='Enter your age'
                        value={user.age}
                        onChange={(e) => {
                            setUser({ ...user, age: e.target.value })
                        }} />
                    <input type='text'
                        className='name'
                        placeholder='Enter Your Address'
                        value={user.address}
                        onChange={(e) => {
                            setUser({ ...user, address: e.target.value })
                        }} />
                    <input type='text'
                        className='name'
                        placeholder='Enter Your Mobile'
                        value={user.mobile}
                        onChange={(e) => {
                            setUser({ ...user, mobile: e.target.value })
                        }} />
                  


                    <button type='button' className='btn-signup' onClick={signup}>Signup</button>

                    <p className='redirect'>Already have an account? <Link to='/login'> Login</Link></p>
                </div>
            </form>


            <Toaster />
        </div>
    )
}

export default Signup