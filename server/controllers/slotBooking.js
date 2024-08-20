 import slotBook from "../models/SlotBooking.js";

  const bookSlot = async (req , res)=>{
    const { bookingDate, serviceDate, userAddress } = req.body

    const SlotBook = new slotBook ({
        bookingDate: bookingDate,
        serviceDate: serviceDate,
        userAddress: userAddress
    })

const bookslot = await SlotBook.save()

if (bookslot)
    res.status(201).json({
        success : true,
        message: "Slot booked successfully", 
       data : bookslot
     })


  }

  export default bookSlot;