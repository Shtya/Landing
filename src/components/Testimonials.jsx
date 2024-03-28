'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Img1 from '@/assets/users/1.jpg'
import Img2 from '@/assets/users/2.jpg'
import Img3 from '@/assets/users/3.jpg'
import Q from '@/assets/q.png'
import Image from 'next/image';


const testimoials = [
    {img:Img1 , h3:"Oliver Müller" ,    p:"Opening my Commercial Representative Office felt daunting at first, with all the paperwork and regulations to navigate. That's where Al Barshaa Al Moshriqa stepped in and truly made a difference. Their team was incredibly supportive, guiding me through each step with expertise and patience. They understood exactly what was needed and handled everything smoothly. I'm deeply thankful for their assistance in getting my office up and running.                                                                      "},
    {img:Img1 , h3:"Rajesh Kuma" ,      p:"Started using Al Barshaa Al Moshriqa for clearing my docs a year ago, and honestly, it's been awesome. Before, paperwork was just a big headache – too much confusion and it took forever. But with these guys, everything's changed. The process is quick, easy to understand, and whenever I need help, there’s always someone ready to lend a hand. Really, it’s been a huge relief finding them. They’ve seriously made dealing with documents a breeze                                                                     "},
    {img:Img2 , h3:"Alexei Ivanov" ,    p:"I would like to share my experience setting up my Limited Liability Company. Initially, it seemed not easy, but thanks to the exceptional guidance and support from Al Barshaa Al Moshriqa, the process became smooth and hassle-free. The professionalism and expertise of their team made all the difference, and I  recommend Al Barshaa Al Moshriqa to anyone seeking to establish their own LLC.                                                                                                                           "},
    {img:Img2 , h3:"Jean-Luc Moreau" ,  p:"I had to sort my residency visa and after a painfully slow and complicated process elsewhere, turning to Al Barshaa Al Moshriqa was a breath of fresh air. They handled everything with such speed and efficiency, it was like night and day compared to my previous experience. Their team made the whole process feel effortless, and their understanding and quick action really stood out. I’m truly satisfied and relieved  it’s been a smooth and fast experience. Highly recommend them for anyone needing visa services."},
    {img:Img3 , h3:"Khalid Al-Mutair" , p:"Owning a business in Saudi, I wanted to open a branch in the UAE but didn't know where to begin. Al Barshaa Al Moshriqa was a lifesaver. They handled the entire company formation process, making it hassle free. I appreciate their support and recommend them to anyone expanding to the UAE                                                                                                                                                                                                                                  "},
  ]

  var settings = {
    dots: true,
    slidesToScroll: 1 ,
    className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    lazyload: true,
    pauseOnHover: false ,
    adaptiveHeight: true,
    responsive: [
        {
          breakpoint: 4000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
    ]
  };

const Testimonials = () => {
  return (
    <div className="Testimonials">
        <div className="h1" data-aos="fade-up" > What our client say! </div>
        <Image src={Q} data-aos="zoom-in" className='q' alt="Qoutation" />
        <div className="container">
      <Slider {...settings}>
        {testimoials.map((e,index)=>(
                    <div className="box" key={index}>
                        <div data-aos="zoom-in" className="h3"> { e.h3}</div>
                        <div data-aos="zoom-in" className="p"> {e.p} </div>
                        <Image data-aos="zoom-in" src={Q} className='q2' alt={e.h3} />
                    </div>
                ))}
      </Slider>
      </div>
    </div>
  )
}

export default Testimonials