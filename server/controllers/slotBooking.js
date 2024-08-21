import SlotBook from "../models/SlotBooking.js";

const postBookSlot = async (req, res) => {
    const { bookingDate, serviceDate, userAddress } = req.body

    const SlotBook = new SlotBook({
        bookingDate: bookingDate,
        serviceDate: serviceDate,
        userAddress: userAddress
    })

    const bookslot = await SlotBook.save()

    if (bookslot)
        res.status(201).json({
            success: true,
            message: "Slot booked successfully",
            data: bookslot
        })


}


const getAllSlots = async (req, res) => {
    const { id } = req.params.id
    if (!id){
        return res.status(400).json({
          success: false,
            message: "Please provide id"})
        }
    
    const SlotBook = await SlotBook.find({ userId: id })
    if (SlotBook) {
        res.status(200).json({
            success: true,
            message: "Slots found successfully",
            data: SlotBook
        })
    } else {
        res.status(404).json({
            success: false,
            message: "No slots found",
            data: {}
        })



    }}

    export { postBookSlot , getAllSlots};