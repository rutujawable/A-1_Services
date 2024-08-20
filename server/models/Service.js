import { model, Schema } from 'mongoose';

const serviceSchema = new Schema({
    serviceProvider:
    {
        type: Schema.Types.ObjectId,
        ref: 'ServiceProvider',
    },
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
        enum: ['carpenter', 'plumber', 'electrician', 'vegetable-stall', 'barber', 'cobbler'],
    },
}, {
    timestamps: true
});
const Service = model('Service', serviceSchema)
export default Service