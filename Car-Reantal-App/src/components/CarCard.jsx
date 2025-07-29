import React from 'react'

const CarCard = ({Car}) => {

  const currency = import.meta.env.VITE_CURRENCY
  return (
    <div className='group rounded-xl overflow-hidden shadow-lg hove:-translate-y-1
    transition-all duration-500 cursor-pointer'>
     
     <div>
      <img src={CarCard.image} alt="Car Image" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' />
      {CarCard.isAvailable && <p>Available Now</p>}

      <div className='absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm
      text-white px-3 py-2 rounded-lg'>
        <span className='font-semibold'>{currency}{Car.pricePerDay}</span>
        <span className='text-sm text-white/80'> / day</span>
        

      </div>
     </div>
    </div>
  )
}

export default CarCard