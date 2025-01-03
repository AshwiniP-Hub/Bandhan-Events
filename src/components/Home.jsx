import React from 'react'
import homebg from "../../public/homebg3.jpg";

const Home = () => {
  return (
    <>
      <div className=''>
        {/* image */}
        <div className=''>
          <img src={homebg} alt="" className='w-full opacity-50' />

        </div>
        {/* event Planning */}
        <p className='text-center font-semibold text-3xl mt-8 uppercase  '>Events Planning and Management</p>

        <div class="flex justify-center items-center text-center ">
          <div className="bg-gray-200 mx-4 p-4 md:p-12 md:text-xl mt-4  shadow-xl md:mt-8 md:mx-60">
            Welcome to <span className='font-semibold '>Bandhan Events</span> , where we transform your events into unforgettable experiences.
            With a passion for creativity and a commitment to excellence, we specialize in crafting tailor-made events that exceed expectations.
            Our team of experienced professionals brings expertise in every aspect of event management, from concept development to flawless execution. We perform all <span className='font-semibold'>rituals as per Hindu tradition.</span>
            We organize all kinds of events like weddings, engagements, birthday parties, naming ceremonies,baby shower and others, catering to all kinds of functions.
            Offering the best prices and optimal locations, we ensure your event is both <span className='font-semibold'>memorable and cost-effective.</span>
          </div>
        </div>
        {/* FEATURED CONTENTS */}

        <p className='text-center uppercase mb-8 mt-6 text-3xl font-semibold'>Featurd Content</p>
        {/* img1 */}
        <div className='flex flex-col items-center gap-6 md:flex-row md:items-center justify-center'>
          <div className='flex flex-col  gap-6'>
            <div className=" size-[340px] bg-cover bg-center opacity-50 hover:opacity-100   rounded-xl " style={{ backgroundImage: "url('services.jpg') " }}>
              <div className=' flex flex-col justify-center items-center  ' >
                <p className='text-white text-4xl mt-32 font-extrabold hover:text-rose-600  duration-100 cursor-pointer'>Services</p>
                <div className='  '>
                  <a href="/Services"> <button className=' border-2 p-1 uppercase text-white hover:bg-white hover:text-zinc-600 mt-4 '>Discover More</button></a>

                </div>
              </div>
            </div>
            {/* img2 */}
            <div className=" size-[340px] bg-cover bg-center opacity-50 hover:opacity-100   rounded-xl " style={{ backgroundImage: "url('aboutUs.jpg') " }}>
              <div className=' flex flex-col justify-center items-center  ' >
                <p className='text-white text-4xl mt-32 font-extrabold hover:text-rose-600 duration-100 cursor-pointer'>About Us</p>
                <div className='  '>
                  <a href="/About">
                    <button className=' border-2 p-1 uppercase text-white hover:bg-white hover:text-zinc-600 mt-4 '>Discover More</button>
                  </a>

                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-6'>
            {/* img3 */}
            <div className=" size-[340px] bg-cover bg-center opacity-50 hover:opacity-100   rounded-xl " style={{ backgroundImage: "url('journal.jpg') " }}>
              <div className=' flex flex-col justify-center items-center  ' >
                <p className='text-white text-4xl mt-32 font-extrabold hover:text-rose-600  duration-100 cursor-pointer'>Destinations</p>
                <div className='  '>
                  <a href="/Destination">
                    <button className=' border-2 p-1 uppercase text-white hover:bg-white hover:text-zinc-600 mt-4 '>Discover More</button>
                  </a>

                </div>
              </div>
            </div>
            {/* img4 */}
            <div className=" size-[340px] bg-cover bg-center opacity-50 hover:opacity-100   rounded-xl " style={{ backgroundImage: "url('gallary.jpg') " }}>
              <div className=' flex flex-col justify-center items-center  ' >
                <p className='text-white text-4xl mt-32 font-extrabold hover:text-rose-600  duration-100 cursor-pointer'>Events</p>
                <div className='  '>
                  <a href="/Function">
                    <button className=' border-2 p-1 uppercase text-white hover:bg-white hover:text-zinc-600 mt-4 '>Discover More</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
