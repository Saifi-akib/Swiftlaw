import React from 'react'
import img1 from '../assets/services-hero.png'
import './contact.css'
function Contact() {
  return (
    <>
          <div className="container-fluid services-main">
        <div className="row pb-md-4">
          <div className="col-12 col-md-6 col-lg-6 col-sm-12 services-left">
            <h6>Contact</h6>
            <h2> Send us a message</h2>
            <h5> Have a question about our Online Doctor Consultations? Use the form below to send a message to SwiftDoc.</h5>
          </div>

          <div className="col-12 col-md-6 col-lg-6 col-sm-12">
            <div className="services-right">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
  {/* Form start know */}

     <div className='form-container'> 
             <div className='container-wrapper'>
                 <div className='form-fields-container'>
                 <p>Contact Us</p>
                 <form>
                 <div className='fullbody'>
                  <input type="text" name="name" placeholder="Full Name (required)" style={{margin:"0px;"}}/>
                  </div>
                  <div className='fullbody'><input id="email" type="text" name="email" placeholder="your@email.address (required)" style={{margin:"0px;"}} />
                  </div>
                  <div className='fullbody'><input type="text" name="phone" placeholder="Phone (required)" style={{margin:"0px;"}}/></div>
                  <div className='fullbody'><input type="text" name="subject" placeholder="Subject (required)" style={{margin:"0px;"}}/></div>
                  <div className='fullbody' ><textarea name="question" id="question" placeholder="Your message" style={{margin:"0px;"}}></textarea></div>
                  <button class="submitBtn" type="submit">SEND</button>
                 </form>
                 </div>
             </div>
     </div>

    </>
  )
}

export default Contact