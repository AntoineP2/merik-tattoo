import BookingChoice from '@/components/booking/BookingChoice'
import React from 'react'

export default function page() {
  return (
    <div>
      <div className='flex justify-center items-center'><h2 className='pb-5 text-lg font-bold'>Choisis ton type de tatouage !</h2></div>
      <BookingChoice />
    </div>
  )
}
