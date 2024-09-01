import React from 'react'
import Header from "./../../Components/Header/Header";
import "./Contact.css"
import Footer from '../../Components/Footer/Footer';
import {THEME} from "./../../config/Data"

function contact() {
  return (
    <div>
      <Header />
      <h1 className='contact-head' style={{color : THEME.primary}}>Get in Touch with Us</h1>
      <h3 className='head-tagline'>We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.</h3>
      <div className='contact-container'>
      <div className='sub-container'>
      <h1 className='info-head' style={{color : THEME.primary}}>Contact Information:</h1>
      <h2 className='contact-info'>Email: <a href="mailto:support@handmadetreasures.com">support@homemadetreasures.com</a></h2>
      <h2 className='contact-info'>Phone no.<a href="tel:+919860312523">+91 9860312523</a></h2>
      <h2 className='contact-info'>Address: Sinnar, Nashik, Maharashtra</h2>
      </div>

      <div className='sub-container'>
      <h1 className='info-head' style={{color : THEME.primary}}>Follow Us on Social Media:</h1>
      <h2 className='contact-info'>Facebook: Homemade Treasures</h2>
      <h2 className='contact-info'>Instagram: @homemadetreasures</h2>
      <h2 className='contact-info'>Pinterest: Homemade Treasures</h2>
      </div>
      </div>

      <h1 className='thankyou'>Thank you for visiting Homemade Treasures! We look forward to assisting you.</h1>

      <Footer/>
    </div>
  )
}

export default contact