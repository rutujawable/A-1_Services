import {Schema, model} from "mongoose"

const serviceProviderSchema = Schema ({
    

    user :{
        type : Schema.type.ObjectId,
        ref :"User",
        required : "true"
    },

    sevice :{
        type : Schema.type.ObjectId,
        ref : "Service",
        required : "true"
    },

    name:{
        type:String,
        required: true
    },

    mobileNO:{
        type: Number,
        required: true
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