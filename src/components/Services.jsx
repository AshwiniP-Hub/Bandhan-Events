import React from 'react'
import service from  "../../public/services/service.jpg";
import decoration from  "../../public/services/birthday.jpg";
import mackeup from  "../../public/services/mackeup.jpg";
import costume from  "../../public/services/costume2.jpg";
import parking from  "../../public/services/parking1.jpg";
import stay from  "../../public/services/living2.jpg";
import destination from  "../../public/services/journal.jpg";
import catering from  "../../public/services/catering.png";
import travel from  "../../public/services/travel.jpg";

function Services() {
  return (
    <>
    <div>
     {/* image */}
     <div><img src={service} alt="" className='opacity-50 w-full' /></div>

     {/* Services */}
     <div className='uppercase font-semibold md:text-4xl text-2xl text-center mt-8'>Services</div>

     {/* two lines */}
     <div className="flex justify-center items-center text-center ">
      <div className="bg-gray-200 p-4  md:p-12 text-xl shadow-xl  mt-8 mx-4 md:mx-60 ">Discover what we can create together and how we can achieve the event you desire. <br />Tailored services for the realization of your wedding and other events, from total or partial planning to the coordination of your dream event in Maharashtra and Gao.</div>
     </div>

     {/* images */}
    <div>
        {/* img1 Destination Arrangement */}
        <div className='flex flex-col md:flex-row justify-between mx-10 my-5 md:mx-20 md:my-10 border-2 rounded-lg   '>
          <div className=''><img src={destination} alt="destination" className='rounded        h-[256px] w-[1024px] ' /></div>
          <div className='md:p-10 p-3'><p className='text-xl font-bold'>Destination Arrangement </p><p className='mt-2'>In Maharashtra, a picturesque hill station perfect for exchanging vows amidst serene lakes and lush greenery.In Goa, offering a blend of coastal beauty and Portuguese colonial architecture to create unforgettable moments for your special day.</p></div>
        </div>
        {/* img2 Decoration Arrangement */}
        <div className='flex flex-col md:flex-row justify-between mx-10 my-5 md:mx-20 md:my-10 border-2 rounded-lg   '>
          <div><img src={decoration} alt="decoration" className='rounded h-[256px] w-[1024px]  ' /></div>
          <div className='md:p-10 p-3'><p className='text-xl font-bold'>Decoration Arrangement</p><p className='mt-2'>At our service, we specialize in creating enchanting atmospheres for all your special event. Whether it's a wedding, birthday party, or private gathering, we offer a comprehensive range of decorations tailored precisely to your preferences.</p></div>
        </div>
        {/* img3 Stay Arrangement */}
        <div className='flex flex-col md:flex-row justify-between mx-10 my-5 md:mx-20 md:my-10 border-2 rounded-lg   '>
          <div><img src={stay} alt="stay" className='rounded h-[256px] w-[1024px]  ' /></div>
          <div className='md:p-10 p-3'><p className='text-xl font-bold'>Stay Arrangement</p><p className='mt-2'>Experience luxury and comfort with our wide range of accommodation options tailored to suit your preferences.Whether you desire opulence or simplicity, we guarantee a seamless and unforgettable experience from start to finish.</p></div>
        </div>
        {/* img4 Travelling Arrangement */}
        <div className='flex flex-col md:flex-row justify-between mx-10 my-5 md:mx-20 md:my-10 border-2 rounded-lg   '>
          <div><img src={travel} alt="travel" className='rounded h-[256px] w-[1024px]  ' /></div>
          <div className='md:p-10 p-3'><p className='text-xl font-bold'>Travelling Arrangement</p><p className='mt-2'>Embark on your journey hassle-free with our comprehensive transportation services tailored to your needs. With trusted partnerships with renowned travel agencies.we handle all aspects of transportation logistics with precision and care. </p></div>
        </div>
        {/* img5 Costume Arrangement */}
        <div className='flex flex-col md:flex-row justify-between mx-10 my-5 md:mx-20 md:my-10 border-2 rounded-lg   '>
          <div><img src={costume} alt="costume" className='rounded h-[256px] w-[1024px]'/></div>
          <div className='md:p-10 p-3'><p className='text-xl font-bold'>Costume Arrangement</p ><p className='mt-2'>Elevate your event with stunning attire. We ensure that your look is best for your special occasion. With access to the finest designers in our network, we guarantee quality and style that perfectly complements the theme and tone of your event.</p></div>
        </div>
        {/* img6 Mackeup Arrangement */}
        <div className='flex flex-col md:flex-row justify-between mx-10 my-5 md:mx-20 md:my-10 border-2 rounded-lg   '>
          <div><img src={mackeup} alt="mackeup" className='rounded h-[256px] w-[1024px]  ' /></div>
          <div className='md:p-10 p-3'><p className='text-xl font-bold'>Makeup Arrangement</p><p className='mt-2'>Indulge in a transformative beauty experience tailored specifically to your event with our esteemed makeup services.Committed to your well-being, we exclusively utilize natural products that are gentle on your skin, leaving you with radiant glow.</p></div>
        </div>
        {/* img7 Parking Arrangement */}
        <div className='flex flex-col md:flex-row justify-between mx-10 my-5 md:mx-20 md:my-10 border-2 rounded-lg   '>
          <div><img src={parking} alt="parking" className='rounded h-[256px] w-[1024px]  ' /></div>
          <div className='md:p-10 p-3'><p className='text-xl font-bold'>Parking Arrangement</p><p className='mt-2'>From  arranging parking for your guests to ensuring the safety and security of your vehicles, we provide a seamless experience from start to finish.You can enjoy peace of mind knowing that your vehicle is under our watchful eye throughout the event.</p></div>
        </div>
        {/* img8 Catering Arrangement */}
        <div className='flex flex-col md:flex-row justify-between mx-10 my-5 md:mx-20 md:my-10 border-2 rounded-lg   '>
          <div><img src={catering} alt="catering" className='rounded h-[256px] w-[1024px]  ' /></div>
          <div className='md:p-10 p-3'><p className='text-xl font-bold'>Catering Arrangement</p><p className='mt-2'>Whether you crave the richness of non-vegetarian dishes or the wholesome goodness of vegetarian cuisine, we cater to all dietary preferences with a diverse selection of delectable offerings.Sit back, savor every bite as we ensure that your event is delight for all.</p></div>
        </div>
       
    </div>
  </div>
    </>
  )
}

export default Services
