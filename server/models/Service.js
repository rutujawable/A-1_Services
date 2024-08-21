import { model, Schema } from 'mongoose';

const serviceSchema = new Schema({   
    title:{
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        required: true,
        enum: ['Carpenter', 'Plumber', 'Electrician', 'Vegetable-stall', 'Barber', 'Cobbler'],
    },
}, {
    timestamps: true
});
const Service = model('Service', serviceSchema)
export default Service