import React from 'react'
import './services.css'
import img1 from '../assets/services-hero.png'
import img2 from '../assets/doctor.png'
function Services() {
  return (
    <>
      {/* hero section */}
      <div className="container-fluid services-main">
        <div className="row pb-md-4">
          <div className="col-12 col-md-6 col-lg-6 col-sm-12 services-left">
            <h6>SwiftLAW offers</h6>
            <h2> As a virtual legal platform, variety of legal services across different areas of law.</h2>
            <h5> Here are a few examples of legal fields that SwiftLaw could provide services in:</h5>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-sm-12">
            <div className="services-right">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="nav-curve2">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
          <path d="M0.00,49.98 C149.99,150.00 353.83,62.66 501.12,22.20 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#ffffff"}}>
            </path></svg></div>

      {/* about swiftdoc section */}
      <div className="container-fluid">
       <div className="row">
       <div className="about-swift">
          <div className="para-div">
            <p>As a virtual legal platform, SwiftLAW offers a variety of legal services across different areas of law.</p>
            <br />
            <p>Here are a few examples of legal fields that SwiftLaw could provide services in:</p>

          </div>
        </div>
       </div>
      </div>

      {/* services section */}
      {/* <div className="container-fluid services-outer ">
        <div className="services-inner">
          <h3>Access to everyday doctor and specialist services at your fingertips</h3>
          <p>No travel hassles or delays</p>
          <div className="check-div">
            <p><i class="fa fa-check" aria-hidden="true"></i> <span> After hours GP services</span></p>
            <p><i class="fa fa-check" aria-hidden="true"></i> <span>Prescriptions by SMS to your phone or any pharmacy</span></p>
            <p><i class="fa fa-check" aria-hidden="true"></i> <span> Medical certificates emailed to you</span></p>
            <p><i class="fa fa-check" aria-hidden="true"></i> <span>Referrals to specialists emailed to you</span></p>
            <p><i class="fa fa-check" aria-hidden="true"></i><span> Arrange xrays, CTs, MRIs, ultrasounds & blood tests</span></p>
          </div>
        </div>
      </div> */}

      {/* consultation cover section */}
      <div className="container-fluid cover-section">
        <div className="row">
          <div className="cover-head">
            <h2>Wills and estates Helping clients with drafting and reviewing wills:</h2>
          </div>
          <div className="cover-points">
            <div className="item-arrow-left">
              <p>Personal injury law : Representing clients who have been injured.</p>
              <p>Business law : Advising businesses and entrepreneurs on legal matters.</p>
              <p>Immigration law : Helping clients with all aspects of immigration.</p>
              {/* <p><i class="fa fa-arrow-right"></i><b>Real estate law : </b>Assisting clients with the purchase, sale, leasing.</p> */}
              
            </div>
            <div className="item-arrow-right">
              <p>Family law : Providing advice and representation for clients dealing.</p>
              <p>Criminal law : Representing clients charged with criminal offenses. </p>
              <p>Employment law :Representing both employers and employees in matters.</p>
              
              
            </div>
          </div>
        </div>
        <div className="row">
          <div className="deseases-section">
            <div className="head">
              <h5> It is worth noting that the list of services and legal fields that SwiftLAW provides could change depending
</h5>
             <h6>On the focus of the platform, the lawyers and their areas of expertise, as well as the market demand. 
</h6>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Services