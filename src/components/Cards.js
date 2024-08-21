import React from 'react'
import './style.css'
const Cards = () => {
  return (
    <div>
        <div className='d-flex'>
      <div className=' card1' >
        <img src="https://www.kfcpakistan.com/images/e4986260-cf96-11ee-8038-67d7d7e3f40f-Untitleddesign(1)-2024-02-20022228.png" alt="" className='img1' />
        <div className='card-body ms-5'><p className='cardtext'><b>Promotion</b></p>
        <p className='redline1'></p>
      </div>
      </div>
      <div className='card1' >
        <img src="https://www.kfcpakistan.com/images/12dd14f0-c523-11ee-a0b2-43ac3530dd54-KRUNCH-590X480-2024-02-06190812.png" alt="" className='img1' />
        <div className='card-body ms-5'><p className='cardtext'><b>Everyday Value</b></p>
      </div>
      </div>
      <div className='card1' >
        <img src="https://www.kfcpakistan.com/images/afc536d0-ff99-11ed-a006-17c81341cbe8-Signaturebox-2023-05-31095826.png" alt="" className='img1' />
        <div className='card-body ms-5'><p className='cardtext'><b>Signature-Boxes</b></p>
      </div>
      </div>
      <div className='card1' >
        <img src="https://www.kfcpakistan.com/images/afc4e8b0-ff99-11ed-8640-872ee63b5da0-Sharing-2023-05-31095826.png" alt="" className='img1' />
        <div className='card-body ms-5'><p className='cardtext'><b>Sharing</b></p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Cards
