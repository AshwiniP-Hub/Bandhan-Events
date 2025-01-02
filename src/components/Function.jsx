import React from 'react'
import wedding from '../../public/events/wedding.jpg';
import engegement from '../../public/events/ring_ceremony.jpg';
import baras from '../../public/events/baras.png';
import javal from '../../public/events/javal.jpg';
import bachlorparty from '../../public/events/bachlor_party.png';
import birthdayparty from '../../public/events/birthday_party.jpg';
import babyshower from '../../public/events/baby_shower.jpg';
import officeparty from '../../public/events/office_party.jpg';
import event from '../../public/events/event.jpg';

const Function = () => {
  return (
    <>
    <div>
        {/* image */}
        <div><img src={event} alt="event" className='w-full opacity-50' /></div>
        {/* Event list */}
        <div className='uppercase font-semibold md:text-4xl text-2xl text-center mt-8'>Event List</div>
        {/* two lines */}
        <div></div><div className="flex justify-center items-center text-center ">
      <div className="bg-gray-200 p-4  md:p-12 text-xl shadow-xl text-justify mt-8 mx-4 md:mx-60 ">Absolutely! Crafting unforgettable events that become cherished memories is our specialty. At Bandhan Events, we understand that events aren't just functions, they're pivotal moments in the tapestry of our lives. That's why we take pride in curating experiences that are not only flawlessly executed but also deeply meaningful. From intimate gatherings to grand celebrations, every detail is meticulously planned to ensure your event is nothing short of extraordinary. Trust us to turn your vision into a reality, creating moments that will be treasured for a lifetime.</div>
     </div>
        {/* images */}
        <div>  
           {/* Wedding  */}
            <div className='flex flex-col md:flex-row justify-between mx-10 my-5 md:mx-20  md:my-10 border-2 rounded-lg '>
               <div className=''><img src={wedding} alt="wedding" className='rounded h-[256px] w-[1024px] ' /></div>
               <div className='md:p-10 p-3'><p className='text-xl font-bold'>Wedding </p><p className='mt-2'>From the moment you entrust us with your wedding arrangements, we are here to bring your vision to life. With our expertise and attention to detail, you can relax and enjoy every moment, knowing that your wedding is in capable hands.</p>
               </div>
            </div>
          {/* Engegement  */}
          <div className='flex flex-col md:flex-row justify-between mx-10 my-5 md:mx-20  md:my-10 border-2 rounded-lg '>
               <div className=''><img src={engegement} alt="engegement" className='rounded h-[256px] w-[1024px] ' /></div>
               <div className='md:p-10 p-3'><p className='text-xl font-bold'>Engegment</p><p className='mt-2'>At Bandhan Events, we take immense pride in orchestrating enchanting engagement ceremonies that encapsulate the essence of love and commitment.your engagement celebration will be a cherished memory that you'll treasure forever.</p>
               </div>
            </div>

        {/* Birthday party  */}
        <div className='flex flex-col md:flex-row justify-between mx-10 my-5 md:mx-20  md:my-10 border-2 rounded-lg '>
               <div className=''><img src={birthdayparty} alt="birthdayparty" className='rounded h-[256px] w-[1024px] ' /></div>
               <div className='md:p-10 p-3'><p className='text-xl font-bold'>Birthday Party</p><p className='mt-2'>We believe that your birthday deserves to be celebrated in the most special way possible.From selecting the perfect theme and decor to  delectable menu, we take care of every detail so you can focus on enjoying your special day to the fullest. </p>
               </div>
            </div>

        {/* office gathering / privet party */}
        <div className='flex flex-col md:flex-row justify-between mx-10 my-5 md:mx-20  md:my-10 border-2 rounded-lg '>
               <div className=''><img src={officeparty} alt="officeparty" className='rounded h-[256px] w-[1024px] ' /></div>
               <div className='md:p-10 p-3'><p className='text-xl font-bold'>Office Gathering/ Privet Party</p><p className='mt-2'>Whether you're planning an office gathering or a private party, we are here to make it an unforgettable experience.Let us turn  your office gathering or a private party into a memorable occasion, shared moments, that will strengthen bonds.</p>
               </div>
            </div>

        {/* Naming ceremony */}
        <div className='flex flex-col md:flex-row justify-between mx-10 my-5 md:mx-20  md:my-10 border-2 rounded-lg '>
               <div className=''><img src={baras} alt="baras" className='rounded h-[256px] w-[1024px] ' /></div>
               <div className='md:p-10 p-3'><p className='text-xl font-bold'>Naming Ceremony</p><p className='mt-2'>We understand the significance of welcoming a new life into the world. Our expert team is dedicated to creating a magical and heartfelt baby naming ceremony that  celebrates this joyous occasion in the most beautiful way to possible.</p>
               </div>
            </div>

        {/* Baby shower */}
        <div className='flex flex-col md:flex-row justify-between mx-10 my-5 md:mx-20  md:my-10 border-2 rounded-lg '>
               <div className=''><img src={babyshower} alt="babyshower" className='rounded h-[256px] w-[1024px] ' /></div>
               <div className='md:p-10 p-3'><p className='text-xl font-bold'>Baby Shower</p><p className='mt-2'> We're here to ensure that your baby shower is a joyous and memorable occasion for all. Whether you envision a whimsical and colorful celebration or a sophisticated affair, we'll handle every aspect with care and attention to detail.</p>
               </div>
            </div>

        {/* Baby first haircut */}
        <div className='flex flex-col md:flex-row justify-between mx-10 my-5 md:mx-20  md:my-10 border-2 rounded-lg '>
               <div className=''><img src={javal} alt="javal" className='rounded h-[256px] w-[1024px] ' /></div>
               <div className='md:p-10 p-3'><p className='text-xl font-bold'>Baby First Haircut</p><p className='mt-2'>We are committed to ensuring that this milestone is celebrated with love, joy, and reverence.From the moment you entrust us with the planning of this special event, our dedicated team will work  with you to create a memories.</p>
               </div>
            </div>

        {/* Bachlor party */}
        <div className='flex flex-col md:flex-row justify-between mx-10 my-5 md:mx-20  md:my-10 border-2 rounded-lg '>
               <div className=''><img src={bachlorparty} alt="bachlorparty" className='rounded h-[256px] w-[1024px] ' /></div>
               <div className='md:p-10 p-3'><p className='text-xl font-bold'>Bachlor Party</p><p className='mt-2'> We specialize in creating unforgettable bachelor parties. Ensuring that everyone involved has a night to remember. Whether you're celebrating the groom-to-be, the bride-to-be. You can trust us to create unforgettable memories. </p>
               </div>
            </div>

            </div>
           {/* message  */}
           <div></div><div className="flex justify-center items-center text-center ">
      <div className="bg-gray-200 p-2  md:p-6 md:text-xl font-semibold shadow-xl text-justify mt-6 mx-4 md:mx-60 ">Feel free to entrust us with the organization of any of your events.</div>
     </div>
     <br />
    </div>

    </>
  )
}

export default Function
