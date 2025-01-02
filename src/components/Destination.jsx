import React from 'react'
import destination from "../../public/destination/destination.jpg";

function Destination() {
  return (
   <>
   <div>
   {/* img  */}
   <div><img src={destination} alt="event" className='w-full opacity-50' /></div>
   {/* our Destinatins  */}
   <div className='uppercase font-semibold md:text-4xl text-2xl text-center mt-8'>Our Destinations</div>
   {/* two lines  */}
   <div></div><div className="flex justify-center items-center text-center ">
      <div className="bg-gray-200 p-4  md:p-12 text-xl shadow-xl text-justify mt-8 mx-4 md:mx-60 ">Discover unparalleled venues for weddings and all special occasions in Maharashtra and Goa through our meticulously curated destination list. Our portfolio features the finest and most unforgettable locations, where your events will unfold amidst the perfect blend of nature's beauty, rich history, and artistic charm. Let us help you frame your most exciting day against the stunning backdrop of Maharashtra and Goa.</div>
     </div>
   {/* Maharatra destinations  */}
   <div className='uppercase font-semibold md:text-3xl text-xl text-center mt-8'>Destinations in Maharashtra</div>
   <div className='md:grid md:grid-cols-3 gap-4 flex flex-col  md:mx-20 md:my-10 m-5 '>
        {/* img1 */}
            <div className=" h-[243px] w-[324px]  bg-cover bg-center opacity-50 hover:opacity-100 rounded-xl " style={{ backgroundImage: "url('kolhapur1.jpg') " }}>
                    <div className=' flex flex-col justify-center items-center  ' >
                        <p className='text-white text-4xl mt-32 font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>Kolhapur</p>
                        <p className='text-white text-2xl  font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>15+ Destinatins</p>
                    </div>
                </div>
                
        {/* img2 */}
            <div className=" h-[243px] w-[324px]  bg-cover bg-center opacity-50 hover:opacity-100 rounded-xl " style={{ backgroundImage: "url('mumbai.png') " }}>
                    <div className=' flex flex-col justify-center items-center  ' >
                        <p className='text-white text-4xl mt-32 font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>Mumbai</p>
                        <p className='text-white text-2xl  font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>15+ Destinatins</p>
                    </div>
                </div>

                {/* img3 */}
            <div className=" h-[243px] w-[324px]  bg-cover bg-center opacity-50 hover:opacity-100 rounded-xl " style={{ backgroundImage: "url('sangli.jpg') " }}>
                    <div className=' flex flex-col justify-center items-center  ' >
                        <p className='text-white text-4xl mt-32 font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>Sangli</p>
                        <p className='text-white text-2xl  font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>15+ Destinatins</p>
                    </div>
                </div>

                {/* img4 */}
            <div className=" h-[243px] w-[324px]  bg-cover bg-center opacity-50 hover:opacity-100 rounded-xl " style={{ backgroundImage: "url('satara1.jpg') " }}>
                    <div className=' flex flex-col justify-center items-center  ' >
                        <p className='text-white text-4xl mt-32 font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>Satara</p>
                        <p className='text-white text-2xl  font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>15+ Destinatins</p>
                    </div>
                </div>

                {/* img5 */}
            <div className=" h-[243px] w-[324px]  bg-cover bg-center opacity-50 hover:opacity-100 rounded-xl " style={{ backgroundImage: "url('nashik.png') " }}>
                    <div className=' flex flex-col justify-center items-center  ' >
                        <p className='text-white text-4xl mt-32 font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>Nashik</p>
                        <p className='text-white text-2xl  font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>15+ Destinatins</p>
                    </div>
                </div>

                {/* img6 */}
            <div className=" h-[243px] w-[324px]  bg-cover bg-center opacity-50 hover:opacity-100 rounded-xl " style={{ backgroundImage: "url('pune.jpg') " }}>
                    <div className=' flex flex-col justify-center items-center  ' >
                        <p className='text-white text-4xl mt-32 font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>Pune</p>
                        <p className='text-white text-2xl  font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>15+ Destinatins</p>
                    </div>
                </div>

                {/* img7 */}
            <div className=" h-[243px] w-[324px]  bg-cover bg-center opacity-50 hover:opacity-100 rounded-xl " style={{ backgroundImage: "url('NaviMumbai.png') " }}>
                    <div className=' flex flex-col justify-center items-center  ' >
                        <p className='text-white text-4xl mt-32 font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>Navi Mumbai</p>
                        <p className='text-white text-2xl  font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>15+ Destinatins</p>
                    </div>
                </div>

         

   </div>
   {/* Gao destinations  */}
   <div className='uppercase font-semibold md:text-3xl text-xl text-center mt-8'>Destinations in Gao</div>
   <div className='md:grid md:grid-cols-3 gap-4 flex flex-col  md:mx-20 md:my-10 m-5 '>
        {/* img1 */}
            <div className=" h-[243px] w-[324px]  bg-cover bg-center opacity-50 hover:opacity-100 rounded-xl " style={{ backgroundImage: "url('gao2.jpg') " }}>
                    <div className=' flex flex-col justify-center items-center  ' >
                        <p className='text-white text-4xl mt-32 font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>Pernem</p>
                        <p className='text-white text-2xl  font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>15+ Destinatins</p>
                    </div>
                </div>
                
        {/* img2 */}
            <div className=" h-[243px] w-[324px]  bg-cover bg-center opacity-50 hover:opacity-100 rounded-xl " style={{ backgroundImage: "url('gao3.jpg') " }}>
                    <div className=' flex flex-col justify-center items-center  ' >
                        <p className='text-white text-4xl mt-32 font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>Cavelossim</p>
                        <p className='text-white text-2xl  font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>15+ Destinatins</p>
                    </div>
                </div>

                {/* img3 */}
            <div className=" h-[243px] w-[324px]  bg-cover bg-center opacity-50 hover:opacity-100 rounded-xl " style={{ backgroundImage: "url('gao4.jpg') " }}>
                    <div className=' flex flex-col justify-center items-center  ' >
                        <p className='text-white text-4xl mt-32 font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>Majorda</p>
                        <p className='text-white text-2xl  font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>15+ Destinatins</p>
                    </div>
                </div>

                {/* img4 */}
            <div className=" h-[243px] w-[324px]  bg-cover bg-center opacity-50 hover:opacity-100 rounded-xl " style={{ backgroundImage: "url('gao6.jpg') " }}>
                    <div className=' flex flex-col justify-center items-center  ' >
                        <p className='text-white text-4xl mt-32 font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>Kolve</p>
                        <p className='text-white text-2xl  font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>15+ Destinatins</p>
                    </div>
                </div>

                {/* img5 */}
            <div className=" h-[243px] w-[324px]  bg-cover bg-center opacity-50 hover:opacity-100 rounded-xl " style={{ backgroundImage: "url('gao7.jpg') " }}>
                    <div className=' flex flex-col justify-center items-center  ' >
                        <p className='text-white text-4xl mt-32 font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>Vasco Da Gama</p>
                        <p className='text-white text-2xl  font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>15+ Destinatins</p>
                    </div>
                </div>

                {/* img6 */}
            <div className=" h-[243px] w-[324px]  bg-cover bg-center opacity-50 hover:opacity-100 rounded-xl " style={{ backgroundImage: "url('gao10.jpg') " }}>
                    <div className=' flex flex-col justify-center items-center  ' >
                        <p className='text-white text-4xl mt-32 font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>Agonda</p>
                        <p className='text-white text-2xl  font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>15+ Destinatins</p>
                    </div>
                </div>

                {/* img7 */}
            <div className=" h-[243px] w-[324px]  bg-cover bg-center opacity-50 hover:opacity-100 rounded-xl " style={{ backgroundImage: "url('gao11.jpg') " }}>
                    <div className=' flex flex-col justify-center items-center  ' >
                        <p className='text-white text-4xl mt-32 font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>Vagator</p>
                        <p className='text-white text-2xl  font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>15+ Destinatins</p>
                    </div>
                </div>

         

   </div>

   {/* Our Special destinations */}
   <div className='uppercase font-semibold md:text-3xl text-xl text-center mt-8'>Our Special destinations</div>
   <div className='md:grid md:grid-cols-3 gap-4 flex flex-col  md:mx-20 md:my-10 m-5 '>
        {/* img1 */}
            <div className=" h-[243px] w-[324px]  bg-cover bg-center opacity-50 hover:opacity-100 rounded-xl " style={{ backgroundImage: "url('dapoli.jpg') " }}>
                    <div className=' flex flex-col justify-center items-center  ' >
                        <p className='text-white text-4xl mt-32 font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>Dapoli</p>
                        <p className='text-white text-2xl  font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>15+ Destinatins</p>
                    </div>
                </div>
                
        {/* img2 */}
            <div className=" h-[243px] w-[324px]  bg-cover bg-center opacity-50 hover:opacity-100 rounded-xl " style={{ backgroundImage: "url('ganpatipule2.jpg') " }}>
                    <div className=' flex flex-col justify-center items-center  ' >
                        <p className='text-white text-4xl mt-32 font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>Ganpatipule</p>
                        <p className='text-white text-2xl  font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>15+ Destinatins</p>
                    </div>
                </div>

                {/* img3 */}
            <div className=" h-[243px] w-[324px]  bg-cover bg-center opacity-50 hover:opacity-100 rounded-xl " style={{ backgroundImage: "url('karjat2.jpg') " }}>
                    <div className=' flex flex-col justify-center items-center  ' >
                        <p className='text-white text-4xl mt-32 font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>Karjat</p>
                        <p className='text-white text-2xl  font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>15+ Destinatins</p>
                    </div>
                </div>

                {/* img4 */}
            <div className=" h-[243px] w-[324px]  bg-cover bg-center opacity-50 hover:opacity-100 rounded-xl " style={{ backgroundImage: "url('khandala.jpg') " }}>
                    <div className=' flex flex-col justify-center items-center  ' >
                        <p className='text-white text-4xl mt-32 font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>Khandala</p>
                        <p className='text-white text-2xl  font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>15+ Destinatins</p>
                    </div>
                </div>

                {/* img5 */}
            <div className=" h-[243px] w-[324px]  bg-cover bg-center opacity-50 hover:opacity-100 rounded-xl " style={{ backgroundImage: "url('lonavala.jpg') " }}>
                    <div className=' flex flex-col justify-center items-center  ' >
                        <p className='text-white text-4xl mt-32 font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>Lonavala</p>
                        <p className='text-white text-2xl  font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>15+ Destinatins</p>
                    </div>
                </div>

                {/* img6 */}
            <div className=" h-[243px] w-[324px]  bg-cover bg-center opacity-50 hover:opacity-100 rounded-xl " style={{ backgroundImage: "url('mahableshwer.jpg') " }}>
                    <div className=' flex flex-col justify-center items-center  ' >
                        <p className='text-white text-4xl mt-32 font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>Mahableshwer</p>
                        <p className='text-white text-2xl  font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>15+ Destinatins</p>
                    </div>
                </div>

                {/* img7 */}
            <div className=" h-[243px] w-[324px]  bg-cover bg-center opacity-50 hover:opacity-100 rounded-xl " style={{ backgroundImage: "url('matheran.jpg') " }}>
                    <div className=' flex flex-col justify-center items-center  ' >
                        <p className='text-white text-4xl mt-32 font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>Matheran</p>
                        <p className='text-white text-2xl  font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>15+ Destinatins</p>
                    </div>
                </div>

                      {/* img8 */}
            <div className=" h-[243px] w-[324px]  bg-cover bg-center opacity-50 hover:opacity-100 rounded-xl " style={{ backgroundImage: "url('Panchgani.jpg') " }}>
                    <div className=' flex flex-col justify-center items-center  ' >
                        <p className='text-white text-4xl mt-32 font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>Panchgani</p>
                        <p className='text-white text-2xl  font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>15+ Destinatins</p>
                    </div>
                </div>

                      {/* img9 */}
            <div className=" h-[243px] w-[324px]  bg-cover bg-center opacity-50 hover:opacity-100 rounded-xl " style={{ backgroundImage: "url('ratnagiri.png') " }}>
                    <div className=' flex flex-col justify-center items-center  ' >
                        <p className='text-white text-4xl mt-32 font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>Ratnagiri</p>
                        <p className='text-white text-2xl  font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>15+ Destinatins</p>
                    </div>
                </div>

                      {/* img10 */}
            <div className=" h-[243px] w-[324px]  bg-cover bg-center opacity-50 hover:opacity-100 rounded-xl " style={{ backgroundImage: "url('sindhudurg.jpg') " }}>
                    <div className=' flex flex-col justify-center items-center  ' >
                        <p className='text-white text-4xl mt-32 font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>Sindhudurg</p>
                        <p className='text-white text-2xl  font-extrabold hover:text-orange-600  duration-100 cursor-pointer'>15+ Destinatins</p>
                    </div>
                </div>
   </div>
    </div>
    </>
  )
}

export default Destination
