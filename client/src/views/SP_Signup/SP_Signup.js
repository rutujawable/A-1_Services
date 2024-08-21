import React, { useState } from 'react'
// import "./Signup.css"
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { Link } from 'react-router-dom'
function SP_Signup() {

    const [user, setUser] = useState({
        ownername: '',
        shopname: '',
        description: '',
        category: '',
        mobile: '',
        password: '',
        address: '',
        location: '',
        time: '',

    })

    const register = async () => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/serviceprovider`, {
            ownername: user.ownername,
            shopname: user.shopname,
            description: user.description,
            category: user.category,
            mobile: user.mobile,
            password: user.password,
            address: user.address,
            location: user.location,
            time: user.time

        })



        if (response.data.success) {


            toast.success(response.data.message)


            setUser({
                ownername: '',
                shopname: '',
                description: '',
                category: '',
                mobile: '',
                password: '',
                address: '',
                location: '',
                time: '',
            })

            setTimeout(() => {
                window.location.href = '/splogin'
            }, 1100)


        }

        else {

            return toast.error(response.data.message)


        }



    }
    return (
        <div>
            <h1 className='header'>Service Provider Registration</h1>

            <form className='signup-form'>
                <div className='inputs'>
                    <input
                        type='text'
                        className='name'
                        placeholder='Enter Your Full Name'
                        value={user.ownername}
                        onChange={(e) => {
                            setUser({ ...user, ownername: e.target.value })
                        }} />

                    <input type='text'
                        className='name'
                        placeholder='Enter Your Shop Name'
                        value={user.shopname}
                        onChange={(e) => {
                            setUser({ ...user, shopname: e.target.value })
                        }} />

                    <input type='enum'
                        className='name'
                        placeholder='Select Category'
                        value={user.category}
                        onChange={(e) => {
                            setUser({ ...user, category: e.target.value })
                        }} />

                    <input type='text'
                        className='name'
                        placeholder='Enter About Shop Description'
                        value={user.description}
                        onChange={(e) => {
                            setUser({ ...user, description: e.target.value })
                        }} />


                    <input type='text'
                        className='name'
                        placeholder='Enter Your Mobile No.'
                        value={user.mobile}
                        onChange={(e) => {
                            setUser({ ...user, mobile: e.target.value })
                        }} />


                    <input type='password'
                        className='name'
                        placeholder='Enter Your Password'
                        value={user.password}
                        onChange={(e) => {
                            setUser({ ...user, password: e.target.value })
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
                        placeholder='Enter Your Shop Location'
                        value={user.location}
                        onChange={(e) => {
                            setUser({ ...user, location: e.target.value })
                        }} />

                
                        <input type='text'
                        className='name'
                        placeholder='Enter Your Shop Open Time'
                        value={user.time}
                        onChange={(e) => {
                            setUser({ ...user, time: e.target.value })
                        }} />



                    <button type='button' className='btn-signup' onClick={register}>Register</button>

                    <p className='redirect'>Already have an account? <Link to='/splogin'> Login</Link></p>
                </div>
            </form>


            <Toaster />
        </div>
    )
}

export default SP_Signup