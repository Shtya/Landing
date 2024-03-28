import React from 'react'
import intro from "@/assets/bg/4.jpg"
import Img1 from "@/assets/about-us/1.jpg"
import Img2 from "@/assets/about-us/2.jpg"
import Img3 from "@/assets/about-us/4.jpg"
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata = {
    title: "Top Document Clearing Services in Dubai | Al Barshaa Al Moshriqa    ",
    description: "Al Barshaa Al Moshriqa: Your Partner for Notary Public & Document Clearing Services in Duba. Get a fast & easy certification attestation process with us    ",
  };



const aboutUs = [
    {img: Img1 , h3:"Who We Are" , p:"Al Barshaa Al Moshriqa Documents Clearing is a well-known provider of document clearing and notary legal services in Dubai. We are recognized for our reliability and efficiency, making us a trusted partner for businesses in the region. Our strength lies in simplifying complicated legal procedures, ensuring hassle-free and smooth transactions for our clients. We are committed to delivering tailored solutions to meet our clients' diverse needs, and we always strive for excellence."} ,
    {img: Img2 , h3:"Our Mission" , p:"Our goal at Al Barshaa Al Moshriqa Documents Clearing is to simplify legal and administrative procedures for our clients. We understand that legal documentation can be a daunting task, which is why we provide tailored guidance and professional assistance to make the process smoother and more efficient. Our aim is to help individuals and businesses overcome any legal obstacles, so they can focus on their core competencies and achieve success with peace of mind"} ,
    {img: Img3 , h3:"Our Values" , p:"Al Barshaa Al Moshriqa Documents Clearing is a trustworthy and experienced partner for businesses in Dubai and the surrounding region. Our mission is to make legal and administrative processes simpler for our clients. We aim to provide personalized guidance and expert assistance to empower our clients. We have been providing comprehensive document clearing and notary services for more than 15 years. Our services are designed to streamline complex legal procedures, ensuring efficiency and reliability in every transaction. "} ,
]







const page = () => {
  return (
    <div className='about-us'>

        <div className="intro" style={{ background: `url('${intro.src}')` }} >
            <div className="container">
                <h1 data-aos="fade-right" > About us </h1>
                <p data-aos="zoom-in" > Your Trusted  Partner for Premier Notary Public & Document Clearing Services in Dubai</p>
                <Link href='/contact-us' data-aos="fade-left"  className='btn2'> contact us </Link>
            </div>
        </div>

        <div className="boxes">
                {aboutUs.map((e,index)=>(
                    <div className="box" key={index}>
                        <div className="img" data-aos="zoom-in" > <Image src={e.img} alt={e.h3} /> </div>
                        <div className="text">
                            <div className="h3" data-aos="fade-left" > {e.h3} </div>
                            <div className="p" data-aos="fade-left" > {e.p} </div>
                        </div>
                    </div>
                ))}
        </div>


        <Footer />
    </div>
  )
}

export default page