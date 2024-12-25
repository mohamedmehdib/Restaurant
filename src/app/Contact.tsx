import React from 'react'
import { BiLogoFacebookCircle, BiLogoInstagram, BiMessage, BiPhone } from 'react-icons/bi'

export default function Contact() {
  return (
    <div id='contact'>
        <p className="text-3xl lg:text-4xl font-semibold text-center p-4 lg:p-5">Get in touch</p>
        <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 m-4 lg:m-5 cursor-pointer">
                <img className="rounded-xl w-full" src="/map.jpeg" alt="Map" />
            </div>
            <div className="bg-white/50 flex flex-col justify-center rounded-xl lg:w-1/2 space-y-6 lg:space-y-10 p-4 lg:p-5 m-4 lg:m-5">
                <a href='#' className='flex items-center space-x-4 lg:space-x-5 text-lg lg:text-xl text-gray-900 font-semibold'>
                    <BiPhone className='text-3xl lg:text-4xl'/>
                    <p>23 456 789</p>
                </a>
                <a href='#' className='flex items-center space-x-4 lg:space-x-5 text-lg lg:text-xl text-gray-900 font-semibold'>
                    <BiMessage className='text-3xl lg:text-4xl'/>
                    <p>contact@food.com</p>
                </a>
                <a href='#' className='flex items-center space-x-4 lg:space-x-5 text-lg lg:text-xl text-gray-900 font-semibold'>
                    <BiLogoInstagram className='text-3xl lg:text-4xl'/>
                    <p>Instagram</p>
                </a>
                <a href='#' className='flex items-center space-x-4 lg:space-x-5 text-lg lg:text-xl text-gray-900 font-semibold'>
                    <BiLogoFacebookCircle className='text-3xl lg:text-4xl'/>
                    <p>Facebook</p>
                </a>
            </div>
        </div>
    </div>
  )
}
