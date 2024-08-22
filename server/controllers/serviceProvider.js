
 import {  ServiceProvider } from "../models/ServiceProvider.js"
 import Service from "../models/Service.js"

const postServiceProvider = async (req,res)=>{

    const {user, ownername, shopname,description,category, mobile,location, time, serviceId,password,address } = req.body

     const Serviceprovider = new ServiceProvider ({
        user,
        ownername,
         shopname,
         description,
         category,
         mobile,
         location, 
         time,
         serviceId,
         password,
         address
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


const postServiceProviderLogin = async (req,res)=>{
    const { mobile, password } = req.body;

    const serviceProvider = await ServiceProvider.findOne({
        mobile: mobile,
        password: password

    });

    if (serviceProvider) {
        res.status(200).json({
            success: true,
            message: " serviceprovider Login Successfully",
            data: serviceProvider,

        })
    }
    else {
        res.json({
            success: false,
            message: "Invalid mobile or Password",
            data: null
        })
    }

}






export {postServiceProvider, getServiceProviders,getProvider,postServiceProviderLogin}