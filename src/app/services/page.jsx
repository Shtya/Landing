import Footer from '@/components/Footer'
import React from 'react'
import intro from '@/assets/bg/4.jpg' ;
import A from './A';

export const metadata = {
    title: "Top Document Clearing &  Notary Public Services in Dubai    ",
    description: "We provide Document Clearing & Notary Public Services in Dubai and assist you in attesting your documents. The easy process of attesting your certification    ",
  };




const Serv0 = [
  /*  1   */  {h3:"Legal Consultation" ,                                 p:"Navigate legal intricacies with a comprehensive consultation from seasoned UAE law experts tailored to your needs."},
  /*  2   */  {h3:"Company Formation" ,                                  p:"Facilitating seamless company formation in the UAE with over 15 years of unmatched expertise and a deep understanding of local regulations"},
  /*  3   */  {h3:"Residency Visa (All Typs) Services" ,                 p:"Specializing in all UAE residency visa services, we provide detailed guidance and efficient processing to meet every client's specific needs"},
  /*  4   */  {h3:"Businessmen & Businesswomen" ,                        p:"Tailored services for businessmen and businesswomen, ensuring seamless business operations and support in the UAE's dynamic market environment"},
  /*  5   */  {h3:"License Approval Services" ,                          p:"We provide comprehensive license approval services for commercial, professional, and individual needs, ensuring compliance and successful market integration."},
  /*  6   */  {h3:"Local Service Agent" ,                                p:"We offer local service agent solutions, connecting businesses with the right local expertise and resources for seamless operations in the UAE"},
  /*  7   */  {h3:"Commercial License Renewal, Freezing, Cancellation" , p:"We specialize in managing commercial license renewals, freezing, and cancellations, offering a streamlined process for businesses in the UAE"},
  /*  8   */  {h3:"Rental Disputes" ,                                    p:"We handle rental disputes with a focus on mediation and resolution, leveraging our expertise to protect your interests in the UAE property marke"},
  /*  9   */  {h3:"Typing English-Arabic" ,                              p:"We offer professional typing services for English-Arabic documents, ensuring accuracy and efficiency to meet your needs"},
  /*  10  */  {h3:"Legal Translation" ,                                  p:"We provide legal translation services for all document types, ensuring accuracy and compliance with UAE legal standards"},
  ]
  
  
  const Serv1  =[	
  /*  1   */ {h3:"POAs (Powers of Attorney)"  ,                         p:"We offer specialized services in drafting and managing Powers of Attorney, tailored to safeguard your legal and financial interests in the UAE" , } ,
  /*  2   */ {h3:"Legal Notices"  ,                                     p:"We craft and deliver legal notices with precision, ensuring clear communication and legal compliance for your business needs" , } ,
  /*  3   */ {h3:"Declarations"  ,                                      p:"We expertly prepare and manage declarations for various purposes, ensuring they meet the UAE's legal requirements with precision and clarity" , } ,
  /*  4   */ {h3:"Last Wil"  ,                                          p:"We provide comprehensive services for drafting all types of Last Will documents, ensuring clarity and legality according to UAE regulations" , } ,
  /*  5   */ {h3:"Eviction Letters"  ,                                  p:"We specialize in drafting eviction letters, combining legal expertise with a strategic approach to support landlords' rights" , } ,
  /*  6   */ {h3:"Undertaking Letters"  ,                               p:"We provide professional drafting of undertaking letters, ensuring your commitments are clearly articulated and legally sound in the UAE contex" , } ,
  /*  7   */ {h3:"NOCs (No Objection Certificates)"  ,                  p:"We facilitate the issuance of NOCs, ensuring a smooth process for obtaining No Objection Certificates for diverse requirements in the UAE" , } ,
  /*  8   */ {h3:"MOAs (Memorandum of Association)"  ,                  p:"We specialize in drafting Memorandum of Association documents, tailored to establish clear corporate frameworks and comply with UAE regulations." , } ,
  /*  9   */ {h3:"Shareholder Resolution of Company"  ,                 p:"We expertly craft shareholder resolutions for companies, ensuring they align with corporate goals and adhere to UAE legal standards" , } ,
  /*  10  */ {h3:"Sale Share Contract & Amendment"  ,                   p:"We specialize in drafting sale share contracts and amendments, ensuring clear terms and legal compliance for transactions in the UAE" , } ,
  /*  11  */ {h3:"Local Agent Contracts"  ,                             p:"We prepare and manage local agent contracts, ensuring they meet your business needs while complying with UAE legal requirements" , } ,
  ]
  
  const Serv2 = [ 
     {h3:'MOFA (Ministry of Foreign Affairs) Attestation'   ,           p:"We handle MOFA attestation processes, ensuring your documents are officially recognized and valid within the UAE and abroad "} ,
     {h3:'Attestation of non-Muslim wills'   ,                          p:"Providing attestation services for non-Muslim wills, ensuring they meet legal standards and are respected in the UAE's legal system "} ,
     {h3:'Attestation of Signatures'   ,                                p:"Expertise in signature attestation, guaranteeing the authenticity of your documents for official and legal use in the UA "} ,
     {h3:'True Copy Attestation'   ,                                    p:"Specializing in true copy attestation, ensuring copies of your documents are certified as accurate and legitimate for use in the UAE "} ,

  
  ]
  
  

const page = () => {

   


  return (
    <div className='services-page'>
      
      <div className="intro" style={{ background: `url('${intro.src}')` }} >
            <div className="container">
                <h1  data-aos="fade-right"  > Services</h1>
                <p data-aos="fade-right" >Premier Notary Public & Document Clearing Services in Dubai. Fast & Easy process of attesting your certification.</p>
            </div>
      </div>

            <div className="service-boxes">


            <div className="h2" data-aos='fade-up'  > document clearing services</div>

            <div className="Serv0-boxes">
                {Serv0.map((e,index)=> (
                    <div className="box" key={index} data-aos="fade-up" data-aos-delay={`${index}0`}  >
                        <div className="group"> <div className="h3"> {e.h3} </div> <A idx={index} />   </div>
                        <div className={`p p-${index}`}> {e.p} </div>
                    </div>
                ))}
            </div>

            <div className="h2" data-aos='fade-up'  > Notary services</div>

            <div className="Serv1-boxes">
                {Serv1.map((e,index)=> (
                    <div className="box" key={index} data-aos="fade-up" data-aos-delay={`${index}0`}  >
                        <div className="group"> <div className="h3"> {e.h3} </div>  <A idx={index + 15} /> </div>
                        <div className={`p p-${index + 15}`}> {e.p} </div>
                    </div>
                ))}
            </div>


            <div className="h2" data-aos='fade-up' > Attestation Services</div>

            <div className="Serv2-boxes">
                {Serv2.map((e,index)=> (
                    <div className="box" key={index} data-aos="fade-up" data-aos-delay={`${index}0`}  >
                        <div className="group"> <div className="h3"> {e.h3} </div> <A idx={index + 30} /> </div>
                        <div className={`p p-${index + 30}`}> {e.p} </div>
                    </div>
                ))}
            </div>

        </div>



      <Footer />
    </div>
  )
}

export default page