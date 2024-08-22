import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './SP_Profile.css'
import toast, { Toaster } from 'react-hot-toast'


function SP_Profile() {
    const [user, setUser] = useState({})


    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'))
        if (currentUser) {
            setUser(currentUser)
        }

        if (!currentUser) {
            window.location.href = "/login"
        }
    }, [])

  return (
    <div>
    <h2>Hello {user.ownername} 👋</h2>

            <button className='logout' onClick={() => {
                localStorage.clear()
                toast.success('Logout Successfully')
                setTimeout(() => {
                    window.location.href = '/splogin'
                }, 2000)
            }} type='button'>Logout</button>


           <h1 className='shop'>Your Profile</h1>
          <div className='owner-main' > 
            <h1>Shop Name: {user.shopname}</h1>
            <h2 >Owner Name: {user.ownername}</h2>
            <h3>Category: {user.category}</h3>
            <p className='profile-details'>Description: {user.description}</p>
            <p className='profile-details'>Shop Address: {user.address}</p>
            <p className='profile-details'>Location (Longitude & Latitude): {user.location}</p>
            <p className='profile-details'>Mobile No.: {user.mobile}</p>
            <p className='profile-details'>Shop Opening Time: {user.time}</p>
        
            </div>



            <Toaster/>


            </div>
  ) 
}

export default SP_Profile