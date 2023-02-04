import React from 'react'

const Navbar = () => {
  return (
    <div className = ' justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>DocAI</h1>
    <ul className='flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Foundation</li>
        <li className='p-4'>Resource</li>
        <li className='p-4'>Contact</li>
    </ul>
    </div>
  )
}

export default Navbar