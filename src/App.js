import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Loginform from './components/Loginform'
import SinglePage from './components/SinglePage'
import SinglePage2 from './components/SinglePage2'
import SinglePage3 from './components/SinglePage3'
import SinglePage4 from './components/SinglePage4'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='/userlogin' element={<Loginform/>}/>
        <Route path='/re-order' element={<SinglePage/>}/>
        <Route path='about-us' element={<SinglePage2/>} />
        <Route path='terms-&-conditions' element={<SinglePage3/>}/>
        <Route path='re-order-history' element={<SinglePage4/>}/>
      </Routes>
    </div>
  )
}

export default App

