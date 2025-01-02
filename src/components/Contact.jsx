import React from 'react'
import wedding from '../../public/wedding.jpg'
import Button from './Button'

function Contact() {
  return (
    <>
    <div className='mt-8'>
      {/* img */}
      <div><img src={wedding} alt="" className='w-full opacity-50'  /></div>
      {/* contact us */}
      <div className='uppercase font-semibold md:text-4xl text-xl text-center mt-8'>CONTACT ME ABOUT YOUR EVENT</div>
      {/* two lines */}
      <div></div><div className="flex justify-center items-center text-center ">
      <div className="bg-gray-200 p-4  md:p-12 text-xl shadow-xl text-center mt-8 mx-4 md:mx-60 ">I can’t wait to help you planning your ideal event in Maharashtra and Gao soon! <br /> Please, fill out the form below or write me at <span className='text-indigo-800 link'>bandhan_events.com </span> <br /> I will do my best to respond within 24 hours - if you don't hear from me within a couple of days, be sure to check your spam folder or follow up with another request at <span className='text-indigo-800 link'>bandhan_events@gmail.com </span></div>
     </div>
      {/* Looking forward to hearing from you! */}
      <div className='uppercase font-semibold md:text-2xl text-lg text-center mt-8'>Looking forward to hearing from you!</div>
      {/* from */}
      <div className='flex justify-center items-center mx-10 '>
      <form action="" className=' m-10 md:px-24 px-10 py-8 bg-gray-200 shadow-xl'>
          <div className='md:flex md:gap-10   '>
            <div>
            {/* name */}
            <span className='text-xl font-semibold'>Name</span><br /> 
            <input className=' border-2 md:w-80 md:h-10' type="text" name="" id="" /><br /><br />
             {/* address */}
             <span className='text-xl font-semibold'>Address</span><br />
            <input className='  border-2 md:w-80 md:h-10 ' type="text" name="" id="" /> <br /><br />
            {/*What's app no. */}
            <span className='text-xl font-semibold' >What's App  No.</span><br />
            <input className=' border-2 md:w-80 md:h-10 ' type="number" name="" id="" /> <br /><br />
             {/* name of event */}
             <span className='text-xl font-semibold' >Name Of Event</span><br />
            <input className='  border-2 md:w-80 md:h-10 ' type="text" name="" id="" /> <br /><br />
            {/* guests */}
            <span className='text-xl font-semibold' >Guests</span><br />
            <select className="form-select  border-2 block w-40 mt-1">
                <option>0-50</option>
                <option>50-100</option>
                <option>100-200</option>
                <option>200-500</option>
                <option>500+</option>
            </select><br />
            </div>

            <div>
               {/* email */}
            <span className='text-xl font-semibold' >Email</span><br />
            <input className='  border-2 md:w-80 md:h-10' type="email" name="" id="" /> <br /><br />
             {/* mobile no. */}
             <span className='text-xl font-semibold' >Mobile No.</span><br />
            <input className=' border-2 md:w-80 md:h-10 ' type="number" name="" id="" /> <br /><br />
              {/* Date of event */}
              <span className='text-xl font-semibold' >Date of Event</span><br />
            <input className='  border-2 md:w-80 md:h-10 ' type="date" name="" id="" /> <br /><br />
             {/* preferred destination */}
             <span className='text-xl font-semibold' >Preferred Destination</span><br />
            <input className='  border-2 md:w-80 md:h-10 ' type="text" name="" id="" /> <br /><br />
            {/* budget */}
            <span className='text-xl font-semibold' >Budget</span><br />
            <select className="form-select  border-2 block w-40 mt-1">
                <option>20k-50k</option>
                <option>50k-1lakh</option>
                <option>1lakh-5lakh</option>
                <option>5lakh-10lakh</option>
                <option>More</option>
            </select><br />
            </div>

          </div>

            {/*your message */}
            <span className='text-xl font-semibold' >Your Message</span><br />
            <textarea className=' border-2 flex justify-center items-center w-full md:h-20' name="" id="" placeholder='Enter your message'/><br />
            
            {/* send button */}
            <div className='flex justify-center items-center'>
            <Button>Send</Button> 
            </div>
         

      </form>
      </div>
 

    </div>
    </>
  )
}

export default Contact
