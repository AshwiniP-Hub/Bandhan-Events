import React from 'react'
import about1 from "../../public/about/about1.jpg";
import about2 from "../../public/about/about2.jpg";

function About() {
  return (
    <>
      <div>
        {/* image */}
        <div><img src={about1} alt="" className='opacity-50' /></div>

        {/* About us */}
        <div className='uppercase  font-semibold md:text-4xl text-2xl text-center mt-8'>About us</div>

        {/* two lines */}
        <div className="flex justify-center items-center ">
          <div className="bg-gray-200 p-4 text-lg mt-6 font-semibold shadow-xl">No Stress, Just Joy!</div>
        </div>

        <div className="flex justify-center items-center ">
          <div className="bg-gray-200 p-4 text-lg font-semibold shadow-xl mx-8 mt-6">“Love your life, perfect your life and beautify all things in your life"</div>
        </div>

        {/* our story */}
        <div className='uppercase font-semibold md:text-4xl text-2xl text-center mt-8'>Our story</div>

        {/* image */}
        <div className="flex items-center mx-4 justify-center mt-8">
          <img src={about2} alt="" />
        </div>

        {/* story */}
        <div className="flex justify-center items-center text-center ">
          <div className="bg-gray-200 md:p-12 p-4 text-lg font-semibold text-justify  shadow-2xl mx-5  mt-8 md:mx-60"> Once upon a time, in the bustling world of event planning, there was a team brought together by destiny and shared dreams. <br /> Each member brought their own unique tale of transformation and determination to the table, weaving a tapestry of experiences that formed the foundation of their collaborative journey.
Among them was Anasaheb Patil, a visionary with a passion for orchestrating unforgettable weddings and events.<br /> His story echoed with the resonance of courage and commitment, as he fearlessly embraced the challenge of reshaping his life to pursue his true calling.<br /> Guided by the wisdom gained from a mentorship with one of Maharashtra's and Gao's esteemed Destination Wedding Planners, and other all events ,Anasaheb journey illuminated the path for his fellow team members.
As they embarked on this collective adventure, they understood that time was not just a fleeting concept, but a precious resource to be cherished and utilized wisely.<br /> Bound by their shared dedication to crafting timeless moments and managing their endeavors with unwavering efficiency, the team embraced each day with gratitude and purpose.
With Anasaheb leadership and the shared belief that fate had brought them together for a reason, the team set forth to revolutionize the world of wedding planning and other events.<br /> Theirs was a story of courage, camaraderie, and the profound belief that every journey begins with a single step towards greatness. <br />And so, armed with passion and perseverance, they embarked on their quest to create beauty, one celebration at a time.

          </div>
        </div>

      </div>
    </>
  )
}

export default About
