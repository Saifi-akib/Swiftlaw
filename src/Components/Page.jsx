import React from 'react'
import './page.css'
import './services.css'
import brands from '../assets/brands.png'
import img2 from '../assets/img2 (1).png'
import img1 from '../assets/head1.png'
import img3 from '../assets/text.png'
import card1 from '../assets/virtual.png'
import card2 from '../assets/video-camera.png'
import card3 from '../assets/date.png'
import card4 from '../assets/doctor.png'
function Page() {
    return (
        <>
            {/* Hero section starts */}
            <div className='background-image'>
            <div className="container-fluid hero-section">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <h1>Welcome to SwiftLaw</h1>
                        <h4>The new and convenient way to speak <b> with a lawyer on video</b><b>At SwiftLaw</b></h4>
                        <p>We understand that legal matters can be stressful which is,<br />why we created an innovative platform that allows connect,<br />  with experienced lawyers comfort of your own home..</p>
                        <div className="hero-btn">
                            <button>BOOK AN APPOINTMENT</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="image">
                            {/* <img src={img1} alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
</div>
            {/* hero section */}
            {/* <div className="container-fluid services-main">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 col-sm-12 services-left">
            <h6>OUR SERVICES</h6>
            <h2>Experience the evolution of convenient healthcare</h2>
            <h5>Online doctor consultations using your desktop or phone</h5>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-sm-12">
            <div className="services-right">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className='svg'><path d="M0.00,49.98 C149.99,150.00 353.83,62.66 501.12,22.20 L500.00,150.00 L0.00,150.00 Z" ></path></svg>
    
      </div> */}

            {/* featured section starts */}

            <div className="nav-curve"><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}><path d="M0.00,49.98 C149.99,150.00 353.83,62.66 501.12,22.20 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: "none", fill: "#ffffff" }}></path></svg></div>
            <div className="container-fluid featured-section">
                <p>As featured in</p>
                <div className="img-div">
                    <img src={img3} alt="" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
            </div>

            {/* cards section here */}
            <div className="container-fluid cards-section">
                <h3>Our platform offers a wide range of legal services, including:</h3>
                <p>Interact with our online lawyers in 4 easy steps.</p>
                <div className="cards-div row">
                    <div className="card col-md-6 col-3 col-sm-12">
                        <div>
                            <img src={card1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5>Virtual consultations</h5>
                                <p className="card-text">Schedule a video call with one of our lawyers to discuss your legal issues and receive expert advice.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-6 col-3 col-sm-12">
                        <div >
                            <img src={card4} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5>Document review</h5>
                                <p className="card-text">Upload your legal documents and receive a detailed review and analysis from one of our lawyers.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-6 col-3 col-sm-12">
                        <div>
                            <img src={card3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5>Contract drafting and review</h5>
                                <p className="card-text">Have one of our lawyers draft or review your legal contracts to ensure they are fair and legally binding.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-6 col-3 col-sm-12">
                        <div>
                            <img src={card2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5>Representation</h5>
                                <p className="card-text">If you need representation in court or in negotiations, one of our lawyers can provide you with the legal support you need.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button-div">
                    <button>BOOK AN APPOINTMENT</button>
                </div>
            </div>





            {/* services section here */}
            {/* <div className="container services-section">
                <div className="row">
                    <div className="col-6">
                       <div className="services-inner">
                       <div className="services-text">
                            <h3>Doctor consultations have <br />
                                never been more convenient.</h3>
                            <p>No travel hassles or delays</p>
                        </div>
                        <div className="services-btn">
                            <button>LEARN MORE ABOUT OUR SERVICES</button>
                        </div>
                       </div>
                    </div>
                    <div className="col-6">
                        <div className="services-img">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>
            </div> */}

            {/* copied section */}

            {/* <div className="container-fluid services-main lower-div">
                <div className="row pb-md-4">
                    <div className="col-12 col-md-6 col-lg-6 col-sm-12 services-left">
                        <h2>Doctor consultations have
                            never been more convenient.</h2>
                        <h5>No travel hassles or delays</h5>
                        <div className="services-btn-div">
                            <button>LEARN MORE ABOUT OUR SERVICES</button>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 col-sm-12">
                        <div className="right-div">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>
            </div> */}



            <div className="container-fluid info-main" style={{position:"relative"}}>
                <div className="row pb-md-4">
                    <div className="col-12 col-md-12 col-lg-5 col-sm-12 info-right">
                        {/* <h6>OUR SERVICES</h6> */}
                        <h2>All of our lawyers are fully licensed and experienced in their field,we offer services With SwiftLaw.</h2>
                        <p style={{color:"#016cb2"}}>We also have the latest in encryption technology to ensure your discussions.</p>
                        <div className="info-btn-div">
                        <a className="nav-link" href="https://swiftlaw.com.au/sign-in">
                            <button>LEARN MORE ABOUT OUR SERVICES</button></a>
                        </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-7 col-sm-12" >
                        <div className="info-right" >
                            <img src={img2} alt="" />
                            
                        </div>
                    </div>
                </div>
            </div>




            {/* brands section */}
            {/* <div className="container brands-section">
                <div className="row">
                    <div className="col">
                        <div className="brands-head">
                            <h4>Trusted By</h4>
                        </div>
                        <div className="brands-img">
                            <img src={brands} alt="" style={{ maxWidth: "100%" }} />
                        </div>
                        <div className="brands-para">
                            <p>Don't let legal issues hold you back. Contact us today to schedule a 
                                          <br></br> virtual consultation and see how we can help you resolve your legal matters with ease and convenience.</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Page
