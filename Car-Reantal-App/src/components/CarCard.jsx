import React from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const CarCard = ({ car }) => {
  const currency = import.meta.env.VITE_CURRENCY;

  if (!car) return null; // safeguard in case car is not passed

  const navigate = useNavigate();

  return (
    <div onClick={()=>{navigate(`/car-details/${car._id}`); scroll(0,0)}} className='group rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer bg-white'>
      
      {/* image wrapper with relative for overlay */}
      <div className='relative h-48 sm:h-60'>
        <img 
          src={car.image} 
          alt="Car" 
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' 
        />

        {/* availability badge */}
        {car.isAvailable && (
          <span className='absolute top-3 left-3 bg-green-600 text-white text-xs font-medium px-2 py-1 rounded-md'>
            Available Now
          </span>
        )}

        {/* price overlay */}
        <div className='absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg'>
          <span className='font-semibold'>{currency}{car.pricePerDay}</span>
          <span className='text-sm text-white/80'> / day</span>
        </div>
      </div>

      {/* card content */}
      <div className='p-4 sm:p-5'>
        <div className='flex justify-between items-start mb-2'>
          <div>
            <h3 className='text-lg font-medium'>{car.brand} {car.model}</h3>
            <p className='text-gray-500 text-sm'>{car.category} • {car.year}</p>
          </div>
        </div>

        {/* feature grid */}
        <div className='mt-4 grid grid-cols-2 gap-y-3 text-gray-600 text-sm'>
          <div className='flex items-center gap-2'>
            <img src={assets.users_icon} alt="Seats" className='h-4 w-4' />
            <span>{car.seating_capacity} Seats</span>
          </div>

          <div className='flex items-center gap-2'>
            <img src={assets.fuel_icon} alt="Fuel" className='h-4 w-4' />
            <span>{car.fuel_type}</span>
          </div>

          <div className='flex items-center gap-2'>
            <img src={assets.car_icon} alt="Transmission" className='h-4 w-4' />
            <span>{car.transmission}</span>
          </div>

          <div className='flex items-center gap-2'>
            <img src={assets.location_icon} alt="Location" className='h-4 w-4' />
            <span>{car.location}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarCard

