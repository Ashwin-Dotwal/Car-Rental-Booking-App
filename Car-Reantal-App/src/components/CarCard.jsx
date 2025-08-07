import React from 'react'
import { assets} from '../assets/assets';
const CarCard = ({Car}) => {

  const currency = import.meta.env.VITE_CURRENCY
  return (
    <div className='group rounded-xl overflow-hidden shadow-lg hove:-translate-y-1
    transition-all duration-500 cursor-pointer'>
     
     <div>
      <img src={Car.image} alt="Car Image" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' />
      {Car.isAvailable && <p>Available Now</p>}

      <div className='absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm
      text-white px-3 py-2 rounded-lg'>
        <span className='font-semibold'>{currency}{Car.pricePerDay}</span>
        <span className='text-sm text-white/80'> / day</span>
        

      </div>
     </div>

      <div className='p-4 sm:p-5'>

        <div className='flex justify-between items-start mb-2'>
         <div>
            <h3 className='text-lg font-medium'>{car.brand} {car.model} </h3>
            <p className='text-muted-foreground text-sm'>{car.category} . {car.yerar}</p>
         </div>
        </div>

        <div className='mt-4 grid grid-cols-2 gap-y-2 text-gray-600'>
          <img src={assets.users_icon} alt="" className='h-4 mr-2' />
        </div>
      </div>

    </div>
  )
}

export default CarCard