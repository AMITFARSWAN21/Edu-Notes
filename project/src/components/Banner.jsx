import React from 'react'
import bannerImage from "../assets/bannerImage.jpg" // Adjust the path based on your project structure

const Banner = () => {
  return (
    <div className="banner-container mt-16"> {/* Added margin-top to avoid overlapping */}
      <img src={bannerImage} alt="Banner" className="w-full h-auto" />
    </div>
  )
}

export default Banner