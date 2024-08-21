import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import './style.css'
import Cards from './Cards'
import Cards2 from './Cards2'
import Card3 from './Card3'
import Card4 from './Card4'
import Footer from './Footer'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
    <br />
    <div className='btn1'>
        <Link to="/re-order">
        <button className='btn btn-danger w-50' ><b>REORDER</b></button></Link>
        </div>
        <div className='head fs-2 '><b>EXPLORE MENU</b></div>
        <Cards/>
        <div className='head2 fs-2 '><b>BEST SELLERS</b></div>
        <Cards2/>
        <div className='head3 fs-2 '><b>TOP DEALS</b></div>
        <Card3/>
        <br /><br />
        <Card4/>
        <br />
        <Footer/>
    </>
  )
}

export default Home
