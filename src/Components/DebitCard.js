import React from 'react'

const DebitCard = () => {
  return (
    <div className='cardGroup'>
        <img 
          src={'https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FVisaLogo.png?alt=media&token=d6cac80d-a066-4388-97c2-9a57acfe4266'}
          alt='card_logo' 
          className='card_logo'
        />
        <img 
          src={'https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fchip.png?alt=media&token=401162f6-2dd2-4da4-bef7-6479c132789c'}
          alt='card_chip' 
          className='card_chip' 
        />

        <div className='card_number'>1234 5678 9874 5632</div>
        <div className='card_name'>Krishna</div>
        <div className='card_from'>10/22</div>
        <div className='card_to'>10/25</div>
        <div className='card_ring'></div>
    </div>
  )
}

export default DebitCard
