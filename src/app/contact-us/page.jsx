
import Link from 'next/link' ;
import React from 'react'
import intro from '@/assets/bg/4.jpg'
import section from '@/assets/bg/5.jpg'
import bg1 from '@/assets/bg/1.jpg'
import Footer from '@/components/Footer';
import Help from './Help';

export const metadata = {
  title: "Contact Us for Notary & Document Clearing Services in Dubai, UAE  ",
  description: "Expert Notary Public & Document Clearing Services in Dubai, UAE. Fast, easy certification attestation services. Book Your Free Consultation Today  ",
};


const page = () => {

  


  
  return (
    <div className='contact-us-page'>
      <div className="intro" style={{ background: `url('${intro.src}')` }} >
            <div className="container">
                <h1 data-aos="fade-right" > contact us </h1>
                <p data-aos="zoom-in" >  Contact Al Barshaa Al Moshriqa for all your Legal & Document clearing Needs in Dubai and the UAE. </p>
                <Link href='/services' data-aos="fade-left"  className='btn2'> services </Link>
            </div>
      </div>


      <section className='contact'  >
        <div className="container">
            <div className="information" style={{ background : `url('${bg1.src}')` }}>
            <li className='info' data-aos="fade-up" > <i className='bx bx-current-location'></i>      <span> Address</span>    </li>
            <li className='info' data-aos="fade-up" > <i className='bx bxs-phone-call' ></i>     <span>  +971555617087</span>    </li>
            <li className='info' data-aos="fade-up" > <i className='bx bxl-whatsapp' ></i>   <span>  +971555617087</span>    </li>
            <li className='info' data-aos="fade-up" > <i className='bx bxs-envelope' ></i>      <span> albarshaa.almoshriqa @outlook.com </span>    </li>

            <li className='time'data-aos="fade-up" > <span> Monday - Friday : </span>       <span>  Opening Hours</span>    </li>
            <li className='time'data-aos="fade-up" > <span> Saturday - Sunday : </span>       <span>  Closed</span>    </li>

            <li className='social'> 
                <Link href="https://www.linkedin.com/company/102312693" > <i data-aos="fade-up" className='bx bxl-linkedin' ></i> </Link>
                <Link href="https://www.instagram.com/albarshaalmoshriqa/" > <i data-aos="fade-up" className='bx bxl-instagram-alt' ></i> </Link>
                <Link href="https://www.facebook.com/ALBARSHAALMOSHRIQA" > <i data-aos="fade-up" className='bx bxl-facebook'></i> </Link>
              </li>
            </div>

            <Help />
            
        </div>


        <a href='#' className='map' data-aos="fade-up"  ><iframe style={{ width:"100%" , frameborder:"0"   }}  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Business%20Bay%20-%20Dubai%20+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">  </iframe></a>

    </section>

    <Footer />
    </div>
  )
}

export default page