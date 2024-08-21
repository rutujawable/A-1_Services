import SlotBook from "../models/SlotBooking.js";

const postBookSlot = async (req, res) => {
    const { user,serviceProvider, bookingDate, serviceDate, userAddress } = req.body

    const slotBook = new SlotBook({
        user: user,
        serviceProvider: serviceProvider,
        bookingDate: bookingDate,
        serviceDate: serviceDate,
        userAddress: userAddress
    })

    const bookslot = await slotBook.save()

    if (bookslot)
        res.status(201).json({
            success: true,
            message: "Slot booked successfully",
            data: bookslot
        })


}


const getAllSlots = async (req, res) => {
    const {id}  =  req.query
    
    if (!id){
        return res.status(400).json({
          success: false,
            message: "Please provide id"})
        }
    
    const slotBook = await SlotBook.findById({serviceProvider: id })
    if (slotBook) {
        res.status(200).json({
            success: true,
            message: "Slots found successfully",
            data: slotBook
        })
    } else {
        res.status(404).json({
            success: false,
            message: "No slots found",
            data: {}
        })



    }}

    export { postBookSlot , getAllSlots};