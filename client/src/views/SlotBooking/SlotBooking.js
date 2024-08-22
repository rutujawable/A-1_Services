import React, {useState} from 'react'
import axios from 'axios'


function SlotBooking() {
    const [bookSlot , setbookSolt] = useState({
        user:'',
        serviceProvider:'',
        bookingDate:'',
        serviceDate:'',
        userAddress:'',
        description:''
    })
    const saveSlot = ()=>{
        const response = axios.post(`${process.env.REACT_APP_API_URL}/v1/bookslots`)

    }

  return (
    <div>
        <h1 className='heading bg-primary'>Book a slot Now....!</h1>
        <form>
            <input
            type='date'
            onChange={(e)=>{ setbookSolt({...bookSlot, bookingDate:e.target.value})}}
        
            />
            <input
            type='date'
            placeholder='Servicce Date'
            onChange={(e)=>{ setbookSolt({...bookSlot, serviceDateDate:e.target.value})}}
            />
            <input
            type='text'
            placeholder='Service description'
            onChange={(e)=>{ setbookSolt({...bookSlot, description:e.target.value})}}
            />
            <button
            type='button'
            onClick={saveSlot}
            >Book Slot</button>
        </form>

    </div>
  )
}

export default SlotBooking