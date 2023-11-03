import React from 'react'
import ban from "../assets/paysage.png";
import '../Styles/home-page/Banner.scss';

function Banner() {
  return (
    <div className="banner-img">
                <img src={ban} alt="banner paysage" />
                <div className="overlay"></div>
                <p>Chez vous, partout et ailleurs</p>
    </div>
  )
}

export default Banner
