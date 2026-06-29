import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroBanner() {
  return (
    <section className='relative  h-screen' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        <div className='absolute inset-0 bg-black/30'></div>
        <div className='relative max-w-7xl text-center mx-auto flex flex-col justify-center items-center h-full'>
            <h1 className='text-5xl font-bold text-white pb-5'>Welcome Rohit Nigam</h1>
            <p className='text-lg text-gray-300'>Discover the latest news and insights</p>
            <div>
                <button className='bg-blue-600 text-white px-6 py-3 rounded-md mt-5 hover:bg-blue-700 transition duration-300'><Link to='/blog'>View Posts</Link></button>
                <button className='bg-gray-600 text-white px-6 py-3 rounded-md mt-5 hover:bg-gray-700 transition duration-300 ml-4'><Link to='/about'>Learn More</Link></button>
            </div>
        </div>
    </section>
  )
}
