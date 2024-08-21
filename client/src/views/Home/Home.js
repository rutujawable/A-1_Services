import axios from 'axios';
import toast,{Toaster} from 'react-router-dom';

function Home() {    
    const [service , setService]= useState([])

    const loadservice = async () =>{

        toast.loading("Data is Loading")
       
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/v1/Services`);
        setService(response.data);  
        toast.dismiss()       
       
        toast.success("Data Fetched Successfully") 
       
    }
    useEffect(()=>{
            loadservice()
        },[]
    )

    return(
        <div className="card-container">
          
        {service.map((service)=>{
            const{id, title, description,category} = service;
            return(
                <UserCard 
                key={id}              
                title={title}
                description={description}
                category={category}
                />
            )
        })}
         <Toaster/>
        </div>
       
        
    )
   
}

export default Home