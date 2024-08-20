import {model , Schema} from 'mongoose';

const serviceSchema = new Schema({
    name:{
        type:String,
        required:true,       
    },
    description:{
        type:String,           
    },
    price:{
        type:Number,
        required:true,
       
    },
    category:{
        type:String,
        required:true, 
        enum:['carpenter','plumber','electrician','vegetable-stall','barber','cobbler'],               
    },
  },{
    timestamps:true
});
const service = model (service , serviceSchema)
export default service