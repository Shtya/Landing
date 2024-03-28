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
            <Link   href="/" > <Image src={Logo} alt='logo' /> </Link>
            <p >Where Your Success is Our Priority</p>
            <ul  >
                <i  onClick={_=> push("https://www.linkedin.com/company/102312693")} className='bx bxl-linkedin' ></i>
                <i  onClick={_=> push("https://www.instagram.com/albarshaalmoshriqa/")} className='bx bxl-instagram-alt' ></i>
                <i  onClick={_=> push("https://www.facebook.com/ALBARSHAALMOSHRIQA")} className='bx bxl-facebook'></i>
            </ul>
        </ul>

        <ul>
            <h3 > Navigation</h3>
            <Link  href="/"> Home </Link>
            <Link  href="/contact-us"> contact us </Link>
            <Link  href="/about-us"> about us </Link>
            <Link  href="/services"> services </Link>
        </ul>

        <ul>
            <h3    > Quick Link</h3>
            <Link   href="#"> Terms </Link>
            <Link   href="#"> Policy </Link>
        </ul>

        <ul>
            <h3 >Contact Information</h3>
            <li > <i className='bx bxs-envelope' ></i> <span> albarshaa.almoshriqa<br/>@outlook.com </span> </li>
            <li > <i className='bx bxs-phone' ></i> <span> +971555617087 </span> </li>
            <li > <i className='bx bxl-whatsapp' ></i> <span> +971555617087 </span> </li>
            <li > <i className='bx bxs-business'></i>  <span> address </span> </li>

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