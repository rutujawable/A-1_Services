import React from 'react'
import "./HomeCard.css"

function HomeCard({title, description, category}) {
  return (
  

      <div className='Service-card card'>   

      <p classname='service-title'>{title}</p>
      
      <p className='service-description'>{description}</p>

      <p className='service-category'>{category}</p>
       
       <button type='button' className='A-p-button'>All Providers</button>
      </div>    
  )
}
export default HomeCard
