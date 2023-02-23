import React from 'react'
import img1 from '../assets/services-hero.png'

import './about.css'
function About() {
  return (
    <>
    <div className="container-fluid services-main">
        <div className="row pb-md-4">
          <div className="col-12 col-md-6 col-lg-6 col-sm-12 services-left">
            <h6>SwiftLAW</h6>
            <h2> We are committed to protecting the privacy of our clients. </h2>
            <h5> This privacy policy outlines how we collect, use, and disclose personal information when providing our legal services.</h5>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-sm-12">
            <div className="services-right">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid  content">
       <div className="row">
       <div className="about-swift">
       <div className="cover-head">
            <h4>Information Collection </h4>
            <span>We collect personal information from clients in order to provide them with legal advice and representation. This information may include name, contact information, and details about the legal matter in question.</span>
          </div><br></br>
          <div className="cover-head informtion">
            <h4>Information Use </h4>
            <span>We use client information to provide legal advice and representation, and to communicate with clients about their legal matter. We also may use client information for internal purposes such as analyzing usage patterns and improving our services.</span>
          </div>
          <br></br>
          <div className="cover-head informtion">
            <h4>Information Disclosure</h4>
            <span>We do not share personal information with any third-parties except as necessary to provide legal services or as required by law. We will never disclose personal information without consent.</span>
          </div>
          <br></br>
          <div className="cover-head informtion">
            <h4>Data Security</h4>
            <span>We have implemented appropriate technical and organizational measures to protect the personal data we collect against accidental or unauthorized destruction, loss, alteration, access, disclosure, or use.</span>
          </div>
          <br></br>
          <div className="cover-head informtion">
            <h4>Accessing and Updating Your Information</h4>
            <span>Clients have the right to access and request updates to their personal information at any time. Please contact us if you would like to access or update your personal information.</span>
          </div>
          <br></br>
          <div className="cover-head informtion">
            <h4>Changes to this Policy</h4>
            <span>We may update this policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons.</span>
          </div>
          <br></br>
          <div className="cover-head informtion">
            <h4>Contact Us</h4>
            <span>If you have any questions or concerns about our privacy policy, please contact us at [Insert SwiftLaw's contact information]</span>
          </div>
        </div>
       </div>
      </div>
      {/* About footer content update */}
      <div className='aboutBgGrey'>
      <div className="row">
          <div className="deseases-sections">
            <div className="head">
              <h5> It's important to note that this is a sample privacy policy, and I'm not familiar with the specific practices and policies of SwiftLaw. It is best to consult with their legal team to get their terms and conditions, and policies, and their specific ways of handling and protecting user's information.</h5>
            </div>
            
          </div>
        </div>
      </div>
     </> 
  )
}

export default About