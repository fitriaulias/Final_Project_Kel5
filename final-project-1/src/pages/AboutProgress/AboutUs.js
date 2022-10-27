import React from 'react'
import brand from '../../assets/icon-navbar.png'

function AboutUs() {
  return (
    <div className='about-progress'>
        <div className='about-us-title'>
            <h3>GETTING KNOW MORE ABOUT US</h3>
        </div>
        <div className='about-us'>
            <div className='about-us-content'>
            <div className='about-us-data'>
                <img src={brand} alt="Brand" />
                <p>MAYSA PUTRA</p>
                <p>RCTN-KS05-022</p>
            </div>
            <div className='about-us-progress'>
                <div className='progress-container-two'>
                    <p>Mockup</p> 
                    <p>Styling Layout</p>
                    <p>Search feature</p>
                </div>
            </div>
            </div>
        </div>
        <br/>
        <br/>

        <div className='about-us'>
            <div className='about-us-content'>
            <div className='about-us-data'>
                <img src={brand} alt="Brand" />
                <p>DWI SAMSIARTO</p>
                <p>RCTN-KS05-023</p>
            </div>
            <div className='about-us-progress'>
                <div className='progress-container-one'>
                    <p>Layout</p>
                    <p>Programming section</p> 
                    <p>Covid-19 section</p>
                    <p>Saved feature</p>
                    <p>Footer</p>
                </div>
            </div>
            </div>
        </div>
        <br/>
        <br/>
        
        <div className='about-us'>
            <div className='about-us-content'>
            <div className='about-us-data'>
                <img src={brand} alt="Brand" />
                <p>FITRI AULIA S.</p>
                <p>RCTN-KS05-024</p>
            </div>
            <div className='about-us-progress'>
                <div className='progress-container-three'>
                    <p>Store</p>
                    <p>Indonesia section</p>
                    <p>All section</p>
                    <p>Navbar-sidebar</p>
                    <p>About section</p>
                </div>
            </div>
            </div>
        </div>
        <br/>
        <br/>
    </div>
  )
}

export default AboutUs