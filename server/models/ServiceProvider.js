import {Schema, model} from "mongoose"

const serviceProviderSchema = Schema ({
    

    user :{
        type : Schema.Types.ObjectId,
        ref :"User",
        required : "true"
    },

    service :{
        type : Schema.Types.ObjectId,
        ref : "Service",
        required : "true"
    },

    name:{
        type:String,
        required: true
    },

    mobileNO:{
        type: Number,
        required: true,
        unique: true
    },

   
    experience : {
        type : Number,
        
    },

    location :{
        type  : String,
        
    },

    time :{
        type: String,
        required : true
    }

    
},

   {
    timestamps : true
   }



)


const ServiceProvider = model ("ServiceProvider", serviceProviderSchema)

export {ServiceProvider}