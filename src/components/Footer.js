import React from 'react'

export default function Footer() {
  return (
    <div className='w-full h-96 bg-green rounded-tl-3xl rounded-tr-3xl flex flex-row footer'>
        <div className="social w-1/5 h-full">
            <img className="inline mt-8 mx-auto" src="logo192.png" alt="logo" />
            <div className="social-links">
                <ul className='flex flex-row justify-center gap-4 mt-4'>
                    <li className="bg-teal w-12 h-12 rounded-full">l</li>
                    <li className="bg-teal w-12 h-12 rounded-full">l</li>
                    <li className="bg-teal w-12 h-12 rounded-full">l</li>
                </ul>
            </div>
        </div>
        <div className="links w-2/5 py-10 px-12">
            <h3 className='text-4xl text-left font-semibold text-teal mb-8'> Learn More</h3>
            <ul>
                <li className='text-teal my-2 text-left text-lg' ><a href="#" className='hover:font-semibold' >About Us</a></li>
                <li className='text-teal my-2 text-left text-lg' ><a href="#" className='hover:font-semibold' >Species We Treat</a></li>
                <li className='text-teal my-2 text-left text-lg' ><a href="#" className='hover:font-semibold' >Services</a></li>
                <li className='text-teal my-2 text-left text-lg' ><a href="#" className='hover:font-semibold' >FAQ</a></li>
                <li className='text-teal my-2 text-left text-lg' ><a href="#" className='hover:font-semibold' >Contact Us</a></li>
            </ul>
        </div>
    </div>
  )
}
