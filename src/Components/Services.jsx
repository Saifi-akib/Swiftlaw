import React from 'react'
import './services.css'
import img1 from '../assets/lawyerbackground.jpg'
import img2 from '../assets/doctor.png'
import card1 from '../assets/will_essate.png'
import card2 from '../assets/family_lawyer.png'
import card3 from '../assets/debt_recovery.png'
import card4 from '../assets/cirminal_law.png'
import card5 from '../assets/immarigation_law.png'
import card6 from '../assets/emplyoes_dis.png'
import card7 from '../assets/real_state.png'
import card8 from '../assets/personaly.png'
function Services() {
  return (
    <>
    
      {/* hero section */}
      <div className="container-fluid services-main">
        <div className="row pb-md-4">
          <div className="col-12 col-md-6 col-lg-6 col-sm-12 services-left">
            <h6>SwiftLAW offers</h6>
            <h2> As a virtual legal platform, SwiftLaw offers a variety of legal services across different areas of law. </h2>
            <h5> Here are a few examples of legal fields that SwiftLaw can provide services in:</h5>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-sm-12">
            <div className="services-right">
              <img src={img1} alt="Lawyer-Background" style={{  objectFit:"cover" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="nav-curve2">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
          <path d="M0.00,49.98 C149.99,150.00 353.83,62.66 501.12,22.20 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#ffffff"}}>
            </path></svg></div>

      {/* about swiftdoc section */}
      {/* <div className="container-fluid">
       <div className="row">
       <div className="about-swift">
          <div className="para-div">
            <p>As a virtual legal platform, SwiftLAW offers a variety of legal services across different areas of law.</p>
            <br />
            <p>Here are a few examples of legal fields that SwiftLaw could provide services in:</p>

          </div>
        </div>
       </div>
      </div> */}
       <div className="container-fluid cards-section">
                <h3>Here are a few examples of legal fields that SwiftLaw can provide services in:</h3>
                {/* <p>Here are a few examples of legal fields that SwiftLaw can provide services in:</p> */}
                <div className="cards-div row">
                    <div className="card col-md-6 col-3 col-sm-12">
                        <div>
                            <img src={card1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5>Wills and estates</h5>
                                <p className="card-text">Helping clients with drafting and reviewing wills, setting up trusts, and handling probate matters.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-6 col-3 col-sm-12">
                        <div >
                            <img src={card2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5>Family law</h5>
                                <p className="card-text">providing advice and representation for clients dealing with issues such as divorce, child custody and support, adoption, and domestic violence.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-6 col-3 col-sm-12">
                        <div>
                            <img src={card3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5>Business law </h5>
                                <p className="card-text">Advising businesses and entrepreneurs on legal matters such as incorporation, contracts, employment law.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-6 col-3 col-sm-12">
                        <div>
                            <img src={card4} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5>Criminal law</h5>
                                <p className="card-text">Representing clients charged with criminal offenses and providing advice and guidance on navigating the criminal justice system.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="cards-div row">
                    <div className="card col-md-6 col-3 col-sm-12">
                        <div>
                            <img src={card5} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5>Immigration law</h5>
                                <p className="card-text">Helping clients with all aspects of immigration, including visas, naturalization, and removal proceedings.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-6 col-3 col-sm-12">
                        <div >
                            <img src={card6} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5>Employment law</h5>
                                <p className="card-text">Representing both employers and employees in matters such as discrimination, harassment, wrongful termination.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-6 col-3 col-sm-12">
                        <div>
                            <img src={card7} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5>Real estate law</h5>
                                <p className="card-text">Assisting clients with the purchase, sale, leasing, and financing of real property, as well as landlord-tenant issues.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-6 col-3 col-sm-12">
                        <div>
                            <img src={card8} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5>Personal injury law</h5>
                                <p className="card-text">Representing clients who have been injured due to the negligence of another party compensation for their losses.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className='texth'>
                      <h6>This list is not exhaustive. It is worth noting that the legal services that SwiftLaw provides
                      could depending on<br/> the focus of the platform, the lawyers and
                      their areas of expertise, as well as the market demand.</h6>
                      </div>
                </div>
                <div className="button-div">
                <a className="nav-link" href="https://swiftlaw.com.au/sign-in">
                    <button>BOOK AN APPOINTMENT</button></a>
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
      {/* <div className="container-fluid cover-section">
        <div className="row">
          <div className="cover-head">
            <h2>Wills and estates Helping clients with drafting and reviewing wills:</h2>
          </div>
          <div className="cover-points">
            <div className="item-arrow-left">
              <p>Personal injury law : Representing clients who have been injured.</p>
              <p>Business law : Advising businesses and entrepreneurs on legal matters.</p>
              <p>Immigration law : Helping clients with all aspects of immigration.</p>
              <p><i class="fa fa-arrow-right"></i><b>Real estate law : </b>Assisting clients with the purchase, sale, leasing.</p>
              
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
      </div> */}
    </>
  )
}

export default Services