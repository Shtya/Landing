'use client';
import Link from 'next/link'
import React from 'react'
import Logo from '@/assets/logo.png' ;
import Image from 'next/image';
import { useRouter } from 'next/navigation';



const Footer = () => {

    const { push } = useRouter() ;

  return (
    <footer id='footer'>
        <div className='container'>
        <ul>
            <Link data-aos="fade-up"  href="/" > <Image src={Logo} alt='logo' /> </Link>
            <p data-aos="fade-up">Where Your Success is Our Priority</p>
            <ul data-aos='fade-up' >
                <i  onClick={_=> push("https://www.linkedin.com/company/102312693")} className='bx bxl-linkedin' ></i>
                <i  onClick={_=> push("https://www.instagram.com/albarshaalmoshriqa/")} className='bx bxl-instagram-alt' ></i>
                <i  onClick={_=> push("https://www.facebook.com/ALBARSHAALMOSHRIQA")} className='bx bxl-facebook'></i>
            </ul>
        </ul>

        <ul>
            <h3 data-aos="fade-up"> Navigation</h3>
            <Link data-aos="fade-up" href="/"> Home </Link>
            <Link data-aos="fade-up" href="/contact-us"> contact us </Link>
            <Link data-aos="fade-up" href="/about-us"> about us </Link>
            <Link data-aos="fade-up" href="/services"> services </Link>
        </ul>

        <ul>
            <h3   data-aos-offset="-50" data-aos="fade-up"> Quick Link</h3>
            <Link data-aos-offset="-50" data-aos="fade-up" href="#"> Terms </Link>
            <Link data-aos-offset="-50" data-aos="fade-up" href="#"> Policy </Link>
        </ul>

        <ul>
            <h3 data-aos="fade-up">Contact Information</h3>
            <li data-aos="fade-up"> <i className='bx bxs-envelope' ></i> <span> albarshaa.almoshriqa<br/>@outlook.com </span> </li>
            <li data-aos="fade-up"> <i className='bx bxs-phone' ></i> <span> +971555617087 </span> </li>
            <li data-aos="fade-up"> <i className='bx bxl-whatsapp' ></i> <span> +971555617087 </span> </li>
            <li data-aos="fade-up"> <i className='bx bxs-business'></i>  <span> address </span> </li>

        </ul>


    </div>
        <div className="last">
        <p>&copy; 2024 MRM. All Rights Reserved.</p>
        <div className="links"> <Link href="/terms">terms</Link>  <Link href="/policy">policy</Link> </div>
        </div>
    </footer>
  )
}

export default Footer