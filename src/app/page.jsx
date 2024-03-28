import "../style/style.css"
import ImgCover from "../assets/bgCover.jpg" 
import intro from "@/assets/bg/6.jpg";
import Image from "next/image";
import Img2 from "../assets/icon/2.png"
import Img3 from "../assets/icon/3.png"
import Img4 from "../assets/icon/4.png"
import Img5 from "../assets/icon/5.png"


import ImgWhy1 from "../assets/why-icon/1.png"
import ImgWhy2 from "../assets/why-icon/3.png"
import ImgWhy3 from "../assets/why-icon/4.png"
import aboutus from "../assets/about-us/1.jpg"
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/Contact-us"
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Top Notary Public & Document Clearing Services in Dubai, UAE  ",
  description: "We provide Notary Public & Document Clearing Services in Dubai, UAE. Fast & Easy process of attesting your certification.Book Your Free Constitutional Now  ",
};



const about = [
  {h1: "Company Overview" , p : "Al Barshaa Al Moshriqa Documents Clearing has provided comprehensive document clearing and notary services in Dubai for over 15 years. As a trusted partner for numerous businesses across the region, our expertise lies in simplifying complex legal processes, ensuring efficiency and reliability in every transaction."},
  {h1: "Our Mission" , p : "We strive to empower our clients by simplifying legal and administrative processes and providing personalized guidance and expert assistance. Our goal is to reduce the obstacles related to legal documentation, allowing individuals and businesses to focus on their core competencies and achieve peace of mind."},
  {h1: "Our Values" , p : "Our core values are integrity, excellence, and commitment. We are committed to providing our clients with top-notch services while maintaining transparency in all our dealings. We strive to innovate and constantly exceed our clients' expectations. "},
]

const why = [
  { img:ImgWhy1 , h1:"High-Quality Services" , p:"We guarantee the highest quality standards in all our services, from consultation to execution."},
  { img:Img5 , h1:"Competitive Pricing" , p:"Offering the best prices in the market, we focus on delivering exceptional value to our clients."},
  { img:ImgWhy2 , h1:"Easy & Efficient Service Process" , p:"Our process simplifies your access to services, ensuring high efficiency without complications."},
  { img:ImgWhy3 , h1:"Online Service Availability" , p:"Our online services offer convenience and speed, maintaining precision and professionalism."},

]





export default function Home() {
  return (

    <main>
      
      <section className="intro" style={{backgroundImage:`url('${intro.src}')`}} >
        <div className="container">
            <div data-aos="fade-right" className="text">
              <h3>Simplify Your Legal Needs</h3>
              <h4> with Expert Document Clearing Services in Dubai - Trusted by Businesses for Over 15 Years</h4>
              <div className="group-btn">
                <a className="btn" href="/services">Discover Our Services</a>
                <a className="btn" href="/contact-us" > Contact Us </a>
              </div>
            </div>

            <div data-aos="fade-left" className="img">
              <Image src={ImgCover} alt="ImgCover" />
            </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <ul>
            <li data-aos="fade-up" data-aos-delay="200" > <Image src={Img2} alt="200+ Trusted Clients" /> <span>200+ Trusted Clients</span> </li>
            <li data-aos="fade-up" data-aos-delay="300" > <Image src={Img3} alt="15+ Years of Expertise" /> <span>15+ Years of Expertise</span> </li>
            <li data-aos="fade-up" data-aos-delay="400" > <Image src={Img4} alt="700+ Successful Cases" /> <span>700+ Successful Cases</span> </li>
            <li data-aos="fade-up" data-aos-delay="500" > <Image src={Img5} alt="Competitive Pricing" /> <span>Competitive Pricing</span> </li>
          </ul>
        </div>
      </section>

      <section className="about2">
        <div className="h1" data-aos="zoom-in" > about us</div>
        <div className="container">
          <div className="img" data-aos="slide-right"> <div className="bgCover"> <Image src={aboutus} alt="about-us" /></div> </div>
          <ul>
            {about.map((e,index)=> (<li key={index} data-aos="fade-up"> <h3 className="h3">{e.h1}</h3> <p className="p"> {e.p} </p> </li> ) )}
          </ul>
        </div>
      </section>


      <section className="why">
          <div className="h1" data-aos="fade-up"> why choose us?</div>
        <div className="container">
          {why.map((e,index)=>(
              <div className="box" data-aos="fade-up" data-aos-delay={`${index}00`}  key={index}>
              <Image src={e.img} alt={e.h1} />
              <h3 className="h3"> {e.h1} </h3>
              <p className="p"> {e.p} </p>
              </div>
            ))}
        </div>
      </section>

      <Services />


      <Testimonials />

      <ContactUs />

      <Footer />

    </main>
  );
}
