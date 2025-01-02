import React from 'react'

function Button(props) {
  return (
    <>
    <div>
    <button className='bg-indigo-600 text-white py-2 text-xl font-semibold px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'>
            {props.children}
        </button>
    </div>
       
    </>
  )
}

export default Button
