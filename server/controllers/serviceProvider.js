
 import {  ServiceProvider } from "../models/ServiceProvider.js"
 import Service from "../models/Service.js"

const postServiceProvider = async (req,res)=>{

    const {user, ownername, shopname,description,category, mobile,location, time, serviceId } = req.body

     const Serviceprovider = new ServiceProvider ({
        user,
        ownername,
         shopname,
         description,
         category,
         mobile,
         location, 
         time,
         serviceId
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


const getProvider = async (req,res)=>{
    
    const {serviceId} =  req.query
    console.log(serviceId)

    try{

    const services = await Service.findById(serviceId)

    if(!services){
        res.json({
        success:false,
        data:null,
        message:"user not found"
        })
    }
    

    const links = await ServiceProvider.find({serviceId:serviceId})

    res.json({
        success:true,
        message:"all records fetched successfully",
        data:links
    })
}

    catch(e){
        res.json({
            data:e.message
        })
    }

}


export {postServiceProvider, getServiceProviders,getProvider}