import React from 'react'
import img1 from '../assets/services-hero.png'
import img2 from '../assets/lawyerbackground.jpg'

import './about.css'
function About() {
  return (
    <>
    <div className="container-fluid services-main">
        <div className="row pb-md-4">
          <div className="col-12 col-md-6 col-lg-6 col-sm-12 services-left">
            <h6>Welcome to SwiftLaw</h6>
            <h2> The new and convenient way to speak with a lawyer on video. At SwiftLaw</h2>
            <h5> We understand that legal matters can be stressful and time-consuming, we've created an innovative platform that allows you to connect..</h5>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-sm-12">
            <div className="services-right">
              <img src={img2} alt="lawyer-background" style={{  objectFit:"cover" }}/>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid  content">
       <div className="row">
       <div className="about-swift">
       <div className="cover-head">
            <h4>Our platform offers a wide range of legal services, including:</h4>
            <span><b>Virtual consultations</b> : Schedule a video call with one of our lawyers to discuss your legal issues and receive expert advice.</span>
            <br/><span><b>Document review</b> : Upload your legal documents and receive a detailed review and analysis from one of our lawyers.</span>
            <br/><span><b>Contract drafting and review</b> : Have one of our lawyers draft or review your legal contracts to ensure they are fair and legally binding.</span>
            <br/><span><b>Representation</b> : If you need representation in court or in negotiations, one of our lawyers can provide you with the legal support you need.</span>
          </div><br></br>
          <div className="cover-head informtion">
            <h5>All of our lawyers are fully licensed and experienced in their field, and we offer competitive rates for our services. With SwiftLaw, you can access legal advice and representation from anywhere, at any time,
               without the need to take time off work or travel long distances.</h5><br/>
            <h5>We use the latest in encryption technology to ensure your discussions, documents and information are safe and secure.</h5><br/>
            <h5>Don't let legal issues hold you back. Contact us today to schedule a virtual consultation and see how we can help you resolve your legal matters with ease and convenience.</h5>
          </div>
          
          {/* <div className="cover-head informtion">
            
          </div>
          <br></br>
          <div className="cover-head informtion">
            
          </div> */}
          {/* <br></br>
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
          </div> */}
        </div>
       </div>
      </div>
      {/* About footer content update */}
      {/* <div className='aboutBgGrey'>
      <div className="row">
          <div className="deseases-sections">
            <div className="head">
              <h5> It's important to note that this is a sample privacy policy, and I'm not familiar with the specific 
                practices and policies of SwiftLaw. It is best to consult with their legal team to get their terms and conditions, and policies, and their specific ways of handling and protecting user's information. </h5>
            </div>
            
          </div>
        </div>
      </div> */}
     </> 
  )
}

export default About