import React from 'react'
import img1 from '../assets/lawyerbackground.jpg'
import './contact.css'
import {  useFormik, validateYupSchema } from 'formik'
import *as yup from 'yup'
import "yup-phone";


function Contact() {
  
    const formik = useFormik({
      initialValues:{
        name:"",
        email:"",
        phone:"",
        subject:"",
        question:"",
      },
      validationSchema:yup.object({
       name:yup.string()
       .max(8, 'Must be 8 characters or less')
       .required("This field is required"),
       email:yup.string()
       .email("please enter a valid email")
       .required("This field is required"),
        question:yup.string()
      .required("This field is required"),
      phone:yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .max(10, "too long number")
      .required('A phone number is required'),
    
      }),
      
      onSubmit:(values, action)=>{
        console.log("form submited",values)
        alert("Thanks for Submit")
        action.resetForm();
        
      }
     
    })
    console.log(formik.touched)
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
              <img src={img1} alt=" Lawyer Background" style={{  objectFit:"cover" }} />
            </div>
          </div>
        </div>
      </div>
  {/* Form start know */}

     <div className='form-container'> 
             <div className='container-wrapper'>
                 <div className='form-fields-container'>
                 <p>Contact Us</p>
                 <form onSubmit={formik.handleSubmit}>
                 <div className='fullbody'>
                  <input type="text" name="name" placeholder="Full Name" style={{margin:"0px;"}} onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}/>
                     { formik.touched.name && formik.errors.name && <p style={{color:"red"}}>{formik.errors.name}</p>}
                  </div>
                  <div className='fullbody'>
                    <input id="email" type="text" name="email" placeholder="your@email.address" style={{margin:"0px;"}} onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                    { formik.touched.email && formik.errors.email && <p style={{color:"red"}}>{formik.errors.email}</p>}
                  </div>
                  <div className='fullbody'>
                    <input type="text" name="phone" placeholder="Phone (required)" style={{margin:"0px;"}} onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur} />
                    { formik.touched.phone && formik.errors.phone && <p style={{color:"red"}}>{formik.errors.phone}</p>}

                    </div>
                  <div className='fullbody'>
                    <input type="text" name="subject" placeholder="Subject (required)" style={{margin:"0px;"}} onChange={formik.handleChange} value={formik.values.subject} onBlur={formik.handleBlur} />
                    { formik.touched.subject && formik.errors.subject && <p style={{color:"red"}}>{formik.errors.subject}</p>}
                    </div>
                  
                  <div className='fullbody' >
                    <textarea name="question"  id="question" placeholder="Your message" style={{margin:"0px;"}} onChange={formik.handleChange} value={formik.values.question} onBlur={formik.handleBlur} />
                    {formik.touched.question && formik.errors.question && <p style={{color:"red"}}>{formik.errors.question} </p>}
                    </div>
                  <button class="submitBtn" type="submit">SEND</button>
                 </form>
                 </div>
             </div>
     </div>

    </>
  )}

export default Contact