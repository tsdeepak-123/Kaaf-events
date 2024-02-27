import React from 'react'
import "./ServiceCard.css"

function ServiceCard({name,image,des}) {
  return (
    <div className="service-item">
    <img src={image} alt="House Warming" className="service-image" />
    <h2 className="service-title">{name}</h2>
    {/* <p className="service-description">{des}</p> */}
  </div>
  )
}

export default ServiceCard