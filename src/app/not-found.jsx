import Link from 'next/link'
import React from 'react'
export const metadata = {
  title: "Error | 404",
  description: ".....",
};
const error = () => {
  return (
   <div className="error">
        <h4 data-aos="fade-up"> oops  <h3 > 404 - the page can't be found</h3> </h4>
       
        <Link href="/" data-aos="fade-up" className="btn"> Go To homepage</Link>
   </div>
  )
}

export default error