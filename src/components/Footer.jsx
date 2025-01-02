import React from 'react'
import logo from "../../public/logo1.png";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";

function Footer() {
  return (
    <>
    <footer className='bg-base-300'>
      <div className='flex flex-col md:flex-row md:justify-between  gap-8 mx-20 p-8'>
        <div>
            <h6 className='text-xl font-bold uppercase mb-2'>Contacts</h6>
            <p className='text-lg'>+91 8990504213</p>
            <p className='text-lg link'>bandhan_events@gmail.com</p>
            <p className='text-lg link'>bandhan_events.com</p>
            <br />
           
            <h6 className='mb-2 text-xl font-bold uppercase '>Social</h6>
            <div className='flex gap-3 '><a href=""><FaSquareInstagram className='size-[32px]' /></a>
            <a href=""><FaFacebook className='size-[32px]'/></a>
            <a href=""><FaPinterest className='size-[32px] ' /></a></div>
        </div>
        <div>
            <h6 className='text-xl font-bold uppercase mb-2'>Information</h6>
            <p className='text-base md:text-lg '>Bandhan Events</p>
            <p className='text-base md:text-lg'>by Mr.Anasaheb Patil</p>
            <p className='text-base md:text-lg'>Privacy Policy</p>
            <p className='text-base md:text-lg'>Cookies Policy</p>
        </div>
        <div>
            <img src={logo} alt="logo"  className='w-[244px]' />
            <p className='text-lg'>@2024 reserved by <span className='font-semibold text-lg text-rose-600'>Bandhan Events</span>  </p>      
        </div>
      </div>


    </footer>
       
    </>
  )
}

export default Footer
