import React from 'react'
import Button from '../ButtonComponent/Index'

const Banner = () => {
  return (
    <section className="bg-blue-900">
    <div className="container">
    <div className="w-[479px] py-[144px] text-white">
      <h1 className="text-[54px] font-normal leading-[75px] mb-8">360º Retail Journey with Sekel Tech</h1>
      <p className="text-base font-normal leading-[22px] mb-8">Explore Sekel Tech's transformative journey, from forming connections to supercharging data and unleashing demand. Discover the power of Retail AI ? </p>   
      <div className="flex gap-4">
        <input type="email" placeholder="enter your email" className="text-white placeholder:text-white leading-5 py-2 px-8 border border-1 border-white  rounded-full bg-whites-10 bg-opacity-10 focus:ring-0 focus:outline-none focus-visible:ring-0"/> 
        <Button filled data="Get started" clsStyle="py-3"/>
      </div>
    </div>

    </div>
  </section>
  )
}

export default Banner
