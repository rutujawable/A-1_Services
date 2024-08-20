import Service from "../models/Service.js"

const postService = async (req, res) => {
    const { name, description, price , category } = req.body;

    const service = new Service({ 
        name, 
        description,
        price , 
        category 
        });
        
    const savedService = await service.save()

    if(savedService){
    res.json({
        success:true,
        data: savedService,
        message:`Service Created Successfully`
      });
    }
}

const getService = async (req, res) => {       
        
        
        const allServices = await Service.find();
      
        if (!allServices) {
            return res.json({
                success: false,
                data: null,
                message: "Service not found"
            })
        }  
        else{   
        res.json({
            success: true,
            data: allServices,
            message: "All Srvices fetched successfully"
        })
    }
} 

export { postService , getService}