'use client' ;
import React from 'react'

const A = ({idx}) => {

    const handelShow = (index)=>{
        let i = document.querySelector(`.services-page .i-${index}`)
        let p = document.querySelector(`.services-page .p-${index}`)
        p.classList.toggle("show")
        i.classList.toggle('x')
    }

  return (
    <i  onClick={_=>handelShow(idx)} className={`bx bx-plus i-${idx}`}></i>
  )
}

export default A