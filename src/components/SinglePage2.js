import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
const SinglePage2 = () => {
return (
    <div>
        <Navbar/><br />
    <div className='text-center'><h2><b>About us</b></h2></div>
<div>
<div className='card ms-3 p-2'>
    <p className='w-50'>KFC entered Pakistan in 1997 and since then, it’s been a journey full of excitement and Finger Lickin’ goodness! The first KFC restaurant opened in Pakistan opened in Gulshan Iqbal, Karachi and now our Finger Lickin’ Chicken is available in 37 cities with over 128 restaurants! Being the most loved fast food chain in Pakistan, KFC leaves no stone unturned to provide its customers the most delicious chicken and an excellent dining experience.</p>
    <div className='card position-absolute top-0 end-0 me-3 h-100 p-3 redcard'>
        <div className='card-body bg-danger'>
        <p className=' redcardtext'><b> WE PRIDE OURSELVES ON USING QUALITY HALAL CHICKEN AND LOCAL INGREDIENTS FROM TRUSTED SUPPLIERS</b></p>
        </div>
    
    </div>
    </div>
        
    
    
    
    </div>
    
    <br /><br />
    <div className='card ms-5 me-5'>
            <div className='card-body'>
                <img src="https://www.kfcpakistan.com/static/media/history-img.599c12141403abf0beb5.png" alt="" />
                
            </div>
            <div><h1 className='position-absolute top-0 end-50 fs-3 '> <b className='text-center'>History</b></h1>
            <p className='position-absolute top-50 start-50 w-5' >It all started with Colonel Harland Sanders, the man who convinced the world by saying “We do chicken right!” Sanders took a great deal of time perfecting his iconic secret recipe of 11 herbs and spices, a legacy he’s brought to the world through KFC’s 10,000+ restaurants. Starting from outside of his gas station in Korbin, Kentucky to being a globally recognized face, we owe our success to the Colonel’s hard work and passion for sharing his love for chicken with the world!</p></div>
        </div>
        <br /><br />
<div className='card ms-3 me-3'>
    <div className='ms-5'><h2><b>Fast Facts About KFC Pakistan</b></h2></div>
<div className='card-body d-flex ms-5'>
    <div className='me-3'>
        <img src={"./Images/Pakistan.png"} alt="" />
        <h2>1997</h2>
        <p className=''>The first KFC restaurant in <br /> Pakistan opened in 1997 <br />and was located in Gulshan-e-Iqbal Karachi.</p>
    </div>
    <div className='me-3'>
        <img src={"./Images/KFC.png"} alt="" />
        <h2>128</h2>
        <p >Today KFC has grown to over <br /> 128  restaurants across the country</p>
    </div>
    <div className='me-3'>
        <img src={"./Images/Partener.png"} alt="" />
        <h2>8</h2>
        <p className=''>Giving back to the community,<br /> KFC runs 9 restaurants operated by <br /> deaf, Hearing With Heart team members</p>
    </div>
    <div className='ms-3'>
        <img src={"./Images/Donations.png"} alt="" />
        <h2>9000+</h2>
        <p>Our Finger Lickin’ Chicken is<br/> brought to you by the <br /> hardwork of a team of 9000+ <br /> people across Pakistan</p>
    </div>
</div>
</div>
<br />
<div className='d-flex justify-content-center'>
        <div className='card ms-5 me-3'>
            <img src="https://www.kfcpakistan.com/static/media/citizen.96455050a3fd03f4ae80.png"className='p2img4' alt="" />
        </div>
        <div className='card ms-4 me-4'>
            <img src="https://www.kfcpakistan.com/static/media/deaf.8affdbacc52b04c1fa12.jpeg" className='p2img4' alt="" />
        </div>
    </div>
<br /><br />
<div className='d-flex justify-content-center'>
        <div className='card ms-5 me-3'>
            <img src="https://www.kfcpakistan.com/static/media/orange.fdf7006b20f61e8cb4ce.png"className='p2img4' alt="" />
        </div>
        <div className='card ms-4 me-4'>
            <img src="https://www.kfcpakistan.com/static/media/cyte.5a383a40c92b2062984c.png" className='p2img4' alt="" />
        </div>
    </div>
<br />
    <Footer/>
    </div>

)
}

export default SinglePage2
