import React from 'react'
import "./HomeCard.css"

function HomeCard({title, description, category}) {
  
  return (
  

      <div className='Service-card card'>   

      <h1>{title}</h1>
      
      <p>{description}</p>

      {/* <span>{category}</span> */}
       
      <button type='button' className='A-p-button'>All Providers</button>
      </div>    
  )
}
export default HomeCard 
