import React from 'react'
import swift1 from '../assets/swift1.png'
import gplay from '../assets/gplay.png'
import appstore from '../assets/appstore.png'
import foo from '../assets/foo.png'
import swiftlaw from '../assets/swiftlaw-logo-rev.png';

import './footer.css'
function Footer() {
    return (
        <>
            <div className="container-fluid footer-outer">
               <div className="inner1">
                    <div className="swift-img">
                        <img src={swiftlaw} alt="swift" />
                    </div>
                    <div className="footer-text">
                        <h4>Download the</h4> 
                           <h4> Swiftlaw App</h4>
                        <p>Get Instant Access to Online lawyers</p>
                    </div>
                    <div className="download">
                        <div className="gplay">
                            <a href="https://play.google.com/store/apps/details?id=com.app.swiftdoc"><img src={gplay} alt="gplay" /></a>
                        </div>
                        <div className="appstore">
                            <a href="https://itunes.apple.com/au/app/swiftdoc/id1178442509"><img src={appstore} alt="appstore" /></a>
                        </div>
                    </div>
               </div>

               <div className="footer-curve"><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}><path d="M0.00,49.98 C149.99,150.00 353.83,62.66 501.12,22.20 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#3260a4"}}></path></svg></div>

                <div className="inner2">
                        <div className="foo-image">
                            <img src={swiftlaw} alt="foo" />
                        </div>
                        <h3>Online Lawyer Service Australia</h3>
                </div>

                <div className="inner3">
                        <p>© COPYRIGHT 2021 - SWIFTDLAW | <a href="#">TERMS OF USE</a> | <a href="#">PRIVACY STATEMENT</a> | <a href="#">Ph: 1800 794 383</a></p>
                </div>


            </div>













            {/* <div className="container-fluid footer-section">
                <div className="row">
                    <div className="col-12">
                        <div className="swift-img">
                            <img src={swift1} alt="swift" />
                        </div>
                        <div className="footer-text">
                            <h4>Download the <br />
                                Swiftdoc App</h4>
                            <p>Get Instant Access to Online Doctors</p>
                        </div>
                        <div className="download">
                            <div className="gplay">
                                <a href="https://play.google.com/store/apps/details?id=com.app.swiftdoc"><img src={gplay} alt="gplay" /></a>
                            </div>
                            <div className="appstore">
                                <a href="https://itunes.apple.com/au/app/swiftdoc/id1178442509"><img src={appstore} alt="appstore" /></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container-fluid footer-second">
                <div className="row">
                    <div className="col-12">
                        <div className="foo-image">
                            <img src={foo} alt="foo" />
                        </div>
                        <p>Online Doctor Service Australia</p>
                    </div>
                </div>
            </div>
          <div className="container-fluid copyright">
            <div className="row">
                <div className="col-12">
                    <p>© COPYRIGHT 2021 - SWIFTDOC | <a href="#">TERMS OF USE</a> | <a href="#">PRIVACY STATEMENT</a> | <a href="#">Ph: 1800 794 383</a></p>
                </div>
            </div>
          </div> */}
        </>
    )
}

export default Footer