import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './home/Homepage'
import Aboutpage from './about/Aboutpage'
import Servicepage from './services/Servicepage'
import Eventpage from './event/Eventpage'
import Destinationpage from './destination/Destinationpage'
import Contactpage from './contact/Contactpage'

const App = () => {
  return (
    <>
    <Routes>
    <Route path='/'element={<Homepage/>} />
    <Route path='/About'element={<Aboutpage/>} />
    <Route path='/Services'element={<Servicepage/>} />
    <Route path='/Function'element={<Eventpage/>} />
    <Route path='/Destination'element={<Destinationpage/>} />
    <Route path='/Contact'element={<Contactpage/>} />
    </Routes>
    </>
  )
}

export default App
