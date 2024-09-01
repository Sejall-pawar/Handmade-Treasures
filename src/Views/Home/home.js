import React from 'react'
import Header from "./../../Components/Header/Header";
import Footer from "./../../Components/Footer/Footer";
import "./Home.css"
import "./../../index.css"
import jwellery from "./jwellery.jpg"
import homedecor from "./homedecor.jpg"
import apparel from "./apparel.jpg"
import gifts from "./gifts.jpg"
import {MAIN_TITLE , THEME} from "./../../config/Data"

function home() {
  return (
    <div>
      <Header />
    
       <h1 className='tagline' style={{color : THEME.primary}}>{MAIN_TITLE}</h1>
       <p className='tag-para'>Discover a world of unique, handcrafted items made with love and care. At Handmade Treasures, 
        we believe that every product tells a story—one of creativity, passion, and the artisan’s touch. 
        Whether you’re looking for a special gift or something to brighten up your home, you’ll find it here.
        </p>  

        <h1 className='explore-tag' style={{color : THEME.primary}}>Explore Our Collections</h1>
        <div className='main-container'>
       <div className='product-container'>
            <img className='product-img' src={jwellery}/> 
            <h1 className='product-name'>Jewelry</h1> 
            <h3 className='product-description'>Browse our stunning collection of handcrafted necklaces, bracelets, earrings, and more.</h3>
       </div>
       <div className='product-container'>
            <img className='product-img' src={homedecor}/> 
            <h1 className='product-name' style={{color : THEME.primary}}>Home Decor</h1> 
            <h3 className='product-description'>Find beautifully crafted pieces that add warmth and character to any room.</h3>
       </div>
       <div className='product-container'>
            <img className='product-img' src={apparel}/> 
            <h1 className='product-name' style={{color : THEME.primary}}>Apparel</h1> 
            <h3 className='product-description'>Discover unique clothing items that reflect your personal style.</h3>
       </div>
       <div className='product-container'>
            <img className='product-img' src={gifts}/> 
            <h1 className='product-name' style={{color : THEME.primary}}>Gifts</h1> 
            <h3 className='product-description'>Thoughtful, one-of-a-kind gifts for every occasion.</h3>
       </div>
       </div>
       <Footer/>
    </div>
  )
}

export default home