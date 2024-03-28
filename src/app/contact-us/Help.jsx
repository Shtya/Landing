'use client' ;
import React , {useState} from 'react'
import bg2 from '@/assets/bg/2.jpg'



const Help = () => {
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
    <form onSubmit={handleSubmit} style={{ background : `url('${bg2.src}')` }} >
                <div data-aos="fade-up" className="h3">Send Us Your Requirements & Book Your Free Consultation</div>

                <input    data-aos="fade-up" type="text" placeholder='name' />
                <input    data-aos="fade-up" type="email" placeholder='email' />
                <input    data-aos="fade-up" type="text" placeholder='phone' />
                <textarea data-aos="fade-up" placeholder='message' name="" style={{ resize:"none" }}></textarea>
                <button   data-aos="fade-up" className="btn" type='submit' > { Status ? <div className="load"> <span/> <span/> <span/> </div> : "Submit" } </button>

    </form>
  )
}

export default Help