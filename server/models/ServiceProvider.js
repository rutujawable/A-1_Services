import {Schema, model} from "mongoose"

const serviceProviderSchema = Schema ({
    

    user :{
        type : Schema.Types.ObjectId,
        ref :"User",
        required : "true"
    },

    ownername : {
        type : String,
        required :  true
    },

    shopname : {
        type : String,
        required : true
    },

    description : {
         type : String,


    },
    
    category: {
        type: String,
        required: true,
        enum: ['carpenter', 'plumber', 'electrician', 'vegetable-stall', 'barber', 'cobbler'],
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