'use client'
import React, { useState } from 'react'

import Img from "@/assets/contact-us.jpg"
import Image from 'next/image'
import axios from 'axios'

const ContactUs = () => {
  const [Status , setStatus] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    let name = e.target[0].value
    let email = e.target[1].value
    let phone = e.target[2].value
    let message = e.target[3].value

    const res = await fetch('/api/sendEmail' , {
      method:"POST" , 
      headers:{ 'content-type' : "application/json" },
      body : JSON.stringify({name , email , phone , message})
    })
    
    await res.json().then(e => setStatus(e.status)) 

    setTimeout(() => {
      e.target[0].value = ''
      e.target[1].value = ''
      e.target[2].value = ''
      e.target[3].value = ''
      setStatus(false)
    }, 4000);
  };


  return (
    <section className='contact-us'>
      <div className="h3"> Quick, Simple, Effective - Our Service Awaits You. </div>
        <div className="container">
            <form onSubmit={handleSubmit} >
                <div data-aos="fade-right" className="h3"> Book Your Free Consultation. </div>
                <div data-aos="fade-right" className="p">Let's Get Started</div>

                <input    data-aos="fade-right" type="text" placeholder='name' />
                <input    data-aos="fade-right" type="email" placeholder='email' />
                <input    data-aos="fade-right" type='tel' placeholder='phone' />
                <textarea data-aos="fade-right" placeholder='message' name='meesage' style={{ resize:"none" }}></textarea>
                <button  data-aos="fade-right" className="btn" type='submit' > { Status ? <div className="load"> <span/> <span/> <span/> </div> : "Submit" } </button>
            </form>
            <div className="image"> <Image src={Img} alt='contact-us' /> </div>
        </div>

    </section>
  )
}

export default ContactUs