import React from 'react'
import Header from "./../../Components/Header/Header";
import "./Contact.css"
import Footer from '../../Components/Footer/Footer';


function contact() {
  return (
    <div>
      <Header />
      <h1 className='contact-head'>Get in Touch with Us</h1>
      <h3 className='head-tagline'>We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.</h3>
      <div className='contact-container'>
      <div className='sub-container'>
      <h1 className='info-head'>Contact Information:</h1>
      <h2 className='contact-info'>Email: support@handmadetreasures.com</h2>
      <h2 className='contact-info'>Phone: +123-456-7890</h2>
      <h2 className='contact-info'>Address: 123 Artisan Lane, Craft City, CA 12345</h2>
      </div>

      <div className='sub-container'>
      <h1 className='info-head'>Follow Us on Social Media:</h1>
      <h2 className='contact-info'>Facebook: Handmade Treasures</h2>
      <h2 className='contact-info'>Instagram: @handmadetreasures</h2>
      <h2 className='contact-info'>Pinterest: Handmade Treasures</h2>
      </div>
      </div>

      <h1 className='thankyou'>Thank you for visiting Handmade Treasures! We look forward to assisting you.</h1>

      <Footer/>
    </div>
  )
}

export default contact