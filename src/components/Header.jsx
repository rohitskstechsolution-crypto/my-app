import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='bg-blue-800 py-5 sticky top-0 z-50'>
            <div className='max-w-7xl px-6 m-auto flex justify-between items-center'>
                <div className='logo text-3xl text-white font-bold'>
                    Rohit Nigam
                </div>
                <div className='navbar'>
                    <ul className='nav flex gap-8 font-bold text-white'>
                        <li className='hover:text-black'><Link to='/'>Home</Link></li>
                        <li className='hover:text-black'><Link to='/about'>About Us</Link></li>
                        <li className='hover:text-black'><Link to='#'>Services</Link></li>
                        <li className='hover:text-black'><Link to='/blog'>Blog</Link></li>
                        <li className='hover:text-black'><Link to='#'>Contact Us</Link></li>
                    </ul>
                </div>
                <button className='bg-black text-white p-3 rounded-md hover:bg-white hover:text-black'><Link to='/about'>Get Started</Link></button>
            </div>
        </header>
    )
}
