import React from 'react'
import Image from 'next/image'
import { flashThemeList } from '@/utils/list/FlashThemeList'
import TattooThemeComponent from '@/components/tattoo/TattooThemeComponent'


//naruto-flash-theme
export default function page() {
  // --------- VARIABLE --------


  // --------- Function --------



  return (
    <div>
       <div className="flex items-center justify-center mb-7"><h1 className='font-bold text-xl'>FLASH DISPONIBLES</h1></div>
      <div className='flex flex-col md:flex-row gap-5 items-center justify-center md:flex-wrap'>
        {flashThemeList.map((themeInfo, index) => ( <TattooThemeComponent themeInfo={themeInfo} key={index} />))}
      </div>
    </div>

  )
}
