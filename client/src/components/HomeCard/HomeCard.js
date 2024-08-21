import React from 'react'
import "./HomeCard.css"

function HomeCard({title, description, category}) {
  return (
  

      <div className='Service-card'>   

      <span classname='service-title'>{title}</span>
      
      <p className='service-description'>{description}</p>

      <p className='service-category'>{category}</p>

      </div>    
  )
}
export default HomeCard
