import FormRegular from '@/components/booking/FormRegular'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className='flex justify-center items-center'><h2 className='pb-5 text-lg font-bold'>Remplis le formulaire !</h2></div>
            <FormRegular />
        </div>
    )
}

export default page