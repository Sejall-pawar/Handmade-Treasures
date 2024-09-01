import React from 'react'
import Header from "./../../Components/Header/Header";
import Footer from "./../../Components/Footer/Footer";
import "./../../index.css"
import "./about.css"
import creativity from "./Creativity.png"
import quality from "./Quality.png"
import community from "./Quality.png"
import {ABOUT_TITLE, THEME} from "./../../config/Data"

function about() {
  return (
    <div>
      <Header />
      <h1 className='tagline'>{ABOUT_TITLE}</h1>
      <p className='tag-para'>At Handmade Treasures, we are passionate about connecting people with
        beautifully crafted, unique items that you won’t find anywhere else. Our mission is to provide
        a platform for talented artisans to showcase their work and share their creativity with the world.
      </p>
      <h1 className='explore-tag'>Our Values</h1>
      <div className='main-container'>
        <div className='keypoints'>
          <img className='values-img' src={creativity} />
          <h1 className='value-name'>Creativity</h1>
          <h3 className='value-decription'> We celebrate the creativity of artisans and provide a space for their unique ideas to shine.</h3>
        </div>
        <div className='keypoints'>
          <img className='values-img' src={quality} />
          <h1 className='value-name'>Quality</h1>
          <h3 className='value-decription'> We are committed to offering high-quality products that stand the test of time.</h3>
        </div>
        <div className='keypoints'>
          <img className='values-img' src={community} />
          <h1 className='value-name'>Community</h1>
          <h3 className='value-decription'>We believe in the power of community and strive to support and uplift local artists.</h3>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default about