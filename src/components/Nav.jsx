import React, {useState} from 'react'
import Button from './Button'
import logo2 from '../../public/logo2.png'

function Navbar() {
    let Links = [
        {name:"HOME",link:"/"},
        {name:"ABOUT",link:"/About"},
        {name:"SERVICE",link:"/Services"},
        {name:"EVENTS",link:"/Function"},
        {name:"DESTINATIONS",link:"/Destination"},
        {name:"CONTACT",link:"/Contact"},
    ]
    const [open, setOpen] = useState(false);
  return (
    <>
    <div className='shadow-md w-full fixed top-0 left-0 right-0 z-50 bg-white'>
    {/* <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-lg h-16 fixed top-0 left-0 right-0 z-50 bg-white'>     */}
        <div className='md:flex items-center justify-between  py-[23px] md:px-10 px-7'>
            <div className=' flex items-center justify-start '>
            <img src={logo2} alt="logo" className='w-[60px] h-[40px]' />
            <div className='font-bold text-2xl cursor-pointer text-rose-400'>
               Bandhan Events
            </div>
        </div>
            
            <div onClick={()=>setOpen(!open)} className=' text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close-outline':'menu-outline'}></ion-icon>
            {/* <ion-icon name="close-outline"></ion-icon> */}
            
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 font-semibold absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0 ` }>
                {
                    Links.map((Links)=>(
                    <li key={Links.name} className='md:ml-8 text-xl md:my-0 my-7'>
                        <a href={Links.link}className='text-gray-600 hover:text-gray-300 duration-500 cursor-pointer' >{Links.name}</a>
                    </li>          
                ))
                } 
                {/* <Button>Read more</Button>  
                <Button to="/Login">LOGIN</Button>
                 */}
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar
