"use client"
import React from 'react'
import TattooThemeComponent from '@/components/tattoo/TattooThemeComponent'
import TattooImageSkeleton from '@/components/skeleton/tattooImageSkeleton';
import axios from "axios";


//naruto-flash-theme
export default function page() {
  // --------- VARIABLE --------
  const [flashThemeList, setFlashThemeList] = React.useState([]);
  const [flashThemeListLoading, setFlashThemeListLoading] = React.useState(true);

  // --------- Function --------
  const fetchThemeImages = async () => {
    try {

      const response = await axios.get("http://localhost:3005/api/v1/picture/getThemeImage");
      setFlashThemeList(response.data);
      setFlashThemeListLoading(false);
    }
    catch (error) {
      console.log(error)
    }
  };

  // --------- EFFECTS --------

  React.useEffect(() => {
    setFlashThemeListLoading(true);
    fetchThemeImages();
  }, [])


  return (
    <div>
      <div className="flex items-center justify-center mb-7"><h1 className='font-bold text-xl'>FLASH DISPONIBLES</h1></div>
      <div className='flex flex-col md:flex-row gap-5 items-center justify-center md:flex-wrap'>
        {flashThemeListLoading && <TattooImageSkeleton />}
        {!flashThemeListLoading && flashThemeList.map((themeInfo, index) => (<TattooThemeComponent themeInfo={themeInfo} key={index} />))}
      </div>
    </div>

  )
}
