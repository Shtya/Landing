'use client'
import Link from 'next/link';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import bg from '@/assets/bg/6.jpg'
import Image from 'next/image';
import Logo from '@/assets/logo.png'


const Nav = () => {

    useEffect(() => {
        AOS.init({
          delay: 50,
          offset: -10 ,
          duration: 700,
          easing: 'ease-in-out', 
        //   once:true 
        });
        AOS.refresh();
      }, [])
      
      useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('nav');
            const logo = document.querySelector('nav .logo');
            const container = document.querySelector('nav .container');

            if (window.scrollY > 0) {
                container.style.height = '70px';  
                navbar.style.background = "#222"               
                logo.style.top = '0';
                logo.style.height = '80px';
                logo.style.clipPath = 'unset';
            } else {
                container.style.height = '100px'; 
                navbar.style.background = "unset"               
                logo.style.top = '20px';
                logo.style.height = '150px';
                logo.style.clipPath = 'unset';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 


    useEffect(_=> {
        let li = document.querySelectorAll("nav ul li")
        let ul = document.querySelector("nav .ul");
        let menu = document.querySelector("nav .menu");
        let container = document.querySelector("nav .container");

        li.forEach(ele=> {
            ele.addEventListener("click" , e=> {
                ul.classList.remove("show-ul");
            container.classList.remove("w-100");
            menu.classList.remove("bx-x");
            })
        })
    } ,[])


    const showHandle = ()=>{
        let menu = document.querySelector("nav .menu");
        let container = document.querySelector("nav .container");
        let ul = document.querySelector("nav .ul");

            ul.classList.toggle("show-ul");
            container.classList.toggle("w-100");
            menu.classList.toggle("bx-x");
    }

    return (
        <nav>
            <div className="container">
                <Link data-aos="fade-right" href="/" className='logo'> <Image src={Logo} alt='logo' /> </Link>
                <i className='bx bx-menu menu' onClick={showHandle}></i>
                <ul className="ul" style={{ backgroundImage: `url('${bg.src}')` }} >
                    <li data-aos="fade-left" data-aos-delay="100"><Link href="/">Home</Link></li>
                    <li data-aos="fade-left" data-aos-delay="200"><Link href="/services">Services</Link></li>
                    <li data-aos="fade-left" data-aos-delay="300"><Link href="/contact-us">Contact Us</Link></li>
                    <li data-aos="fade-left" data-aos-delay="400"><Link href="/about-us">About Us</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
