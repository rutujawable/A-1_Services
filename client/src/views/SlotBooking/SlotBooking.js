import React, {useState} from 'react'

function SlotBooking() {
    const {Slot , setSolt} = useState([])
  return (
    <div>
        <h1>Book a slot Now....!</h1>
        <form>
            <input
            type='date'
            />
            <input
            type='date'
            placeholder='Servicce Date'
            />
            <input
            type='text'
            placeholder='Service description'
            />

        </form>

    </div>
  )
}

export default SlotBooking