import { Schema, model } from 'mongoose'

const slotBookingSchema = new Schema({

    user:
    {
        type: Schema.Types.ObjectId,
        ref: 'User',

    },
    service:
    {
        type: Schema.Types.ObjectId,
        ref: 'Service',

    },
    serviceProvider:
    {
        type: Schema.Types.ObjectId,
        ref: 'ServiceProvider',
    },
    bookingDate:
    {
        type: Date,
        default: Date.now(),
   
    },
    serviceDate:
    {
        type: Date,
        default: Date.now(),
        require : true
    },
    userAddress:
    {
        type: String,
        require : true
    },
},
    {
        timestamps: true
    })

    const SlotBook = model ('SlotBook' , slotBookingSchema)

    export default SlotBook;