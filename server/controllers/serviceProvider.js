
 import {  ServiceProvider } from "../models/ServiceProvider"

const PostServiceProvider = async ()=>{
    const {user, service , name, mobileNO, experience,location, time } = req.body

     const Serviceprovider = new ServiceProvider ({
        user, 
        service ,
         name,
         mobileNO,
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


const  GetServiceProviders = async ()=>{

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


export {PostServiceProvider, GetServiceProviders}