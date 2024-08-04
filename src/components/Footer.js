import React from 'react'
import {FaXTwitter} from 'react-icons/fa6';
import {BiLogoLinkedin} from 'react-icons/bi'
import {BsInstagram} from 'react-icons/bs'

export default function Footer() {
  return (
    <div className='w-full h-96 bg-green rounded-tl-3xl rounded-tr-3xl flex flex-row footer'>
        <div className="social w-1/5 h-full">
            <img className="inline mt-8 mx-auto" src={require(`../images/logo/logo192.png`)} alt="logo" />
            <div className="social-links">
                <div className='flex flex-row justify-center gap-4 mt-4'>
                    <a target='_blank' href='https://x.com/stars_vet' className="bg-teal w-12 h-12 rounded-full flex justify-center items-center flex-col "><FaXTwitter className='w-3/5 h-3/5'/></a>
                    <a target='_blank' href='https://www.linkedin.com/in/stars-vet-animal-and-bird-clinic-a254aa274' className="bg-teal w-12 h-12 rounded-full flex justify-center items-center flex-col"><BiLogoLinkedin className='w-3/5 h-3/5'/></a>
                    <a target='_blank' href='https://www.instagram.com/stars_vet' className="bg-teal w-12 h-12 rounded-full flex justify-center items-center flex-col"><BsInstagram className='w-3/5 h-3/5'/></a>
                </div>
            </div>
        </div>
        <div className="links w-2/5 py-10 px-12">
            <h3 className='text-4xl text-left font-semibold text-teal mb-8'> Learn More</h3>
            <ul>
                <li className='text-teal my-2 text-left text-lg' ><a href="#" className='hover:font-semibold' >About Us</a></li>
                <li className='text-teal my-2 text-left text-lg' ><a href="#" className='hover:font-semibold' >Species We Treat</a></li>
                <li className='text-teal my-2 text-left text-lg' ><a href="#" className='hover:font-semibold' >Services</a></li>
                <li className='text-teal my-2 text-left text-lg' ><a href="#" className='hover:font-semibold' >FAQ</a></li>
                <li className='text-teal my-2 text-left text-lg' ><a href="#" className='hover:font-semibold' >Contact Us : 9257695551, 1414519298</a></li>
            </ul>
        </div>
    </div>
  )
}
