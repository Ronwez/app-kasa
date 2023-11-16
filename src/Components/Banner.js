import React from 'react'

function Banner({ image,texte }) {
  return (
    <div className="banner-img">
                <img src={image} alt="Bannière" />
                <div className="overlay"></div>
                <p>{texte}</p>
    </div>
  )
}

export default Banner
