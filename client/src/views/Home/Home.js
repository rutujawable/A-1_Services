import axios from 'axios';
import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import "./Home.css"
import HomeCard from "./../../components/HomeCard/HomeCard.js"


function Home() {
    const [service, setService] = useState([])
    
    const loadservice = async () => {

        toast.loading("Data is Loading")

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/v1/services`);
        setService(response.data.data);
        toast.dismiss()

        toast.success("Data Fetched Successfully")
        localStorage.setItem("currentservice", JSON.stringify(response.data.data));
    }
    useEffect(() => {
        loadservice()        
    }, []);
    


    return (
        <div className="card-container">

            {service.map((service) => {
                const { id, title, description, category } = service;
                
                
                return (
                    <HomeCard
                        key={id}
                        title={title}
                        description={description}
                        category={category}
                    />
                )
            })}
            <Toaster />
        </div>


    )

}

export default Home