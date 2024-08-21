
 import {  ServiceProvider } from "../models/ServiceProvider.js"

const postServiceProvider = async (req,res)=>{

    const {user, ownername, shopname,description,category, experience,location, time } = req.body

     const Serviceprovider = new ServiceProvider ({
        user,
        ownername,
         shopname,
         description,
         category,
         experience,
         location, 
         time
     })

     const savedServiceProvider = await Serviceprovider.save()

     if (savedServiceProvider){
        res.json({
            success : true,
            message : " serviceprovider saved successfully",
            data : savedServiceProvider
        })
     }


}


const  getServiceProviders = async (req,res)=>{

    const serviceproviders = await ServiceProvider.find()

    if (serviceproviders){
        res.json({
            success : true,
            data : serviceproviders,
            message: "serviceprovider fetched successfully"
        })
    }
    else{
        res.json ({
            success : false,
            message :"failed to fetched"

        })
    }

}


export {postServiceProvider, getServiceProviders}