"use client"
import {useState, useEffect} from 'react'
import TattooImageFlashComponent from '@/components/tattoo/TattooImageFlashComponent'
import axios from 'axios';
import TattooImageSkeleton from '@/components/skeleton/tattooImageSkeleton';
import { tattooFlashType } from '@/utils/types/type';

//<div>My Post: {params.theme}</div>

export default function Page({ params }: { params: { theme: string } }) {
  // ------- VARIABLES -------
  const [tattooFlash, setTattooFlash] = useState<tattooFlashType[]>([{ // On initialise le state avec un tableau vide de type tattooFlashType
    name: "",
    Picture: []
  }]);
  const [tattooFlashLoading, setTattooFlashLoading] = useState(true);
  const [title, setTitle] = useState("");

  // ------- FUNCTIONS -------

  const fetchTattooFlash = async () => {
    try {
      const response = await axios.get(`http://localhost:3005/api/v1/picture/getFlashTattoByThemeId?themeId=${params.theme}`);
      if (response.data.length > 0) { // On vérifie si les données reçues ne sont pas vides
        setTattooFlash(response.data);
        setTitle(response.data[0].name);
      }
      setTattooFlashLoading(false);
    }
    catch (error) {
      console.log(error)
    }
  }

  // ------- EFFECTS -------
  useEffect(() => {
    setTattooFlashLoading(true);
    fetchTattooFlash();

  }, [])


  return (
    <div>
      <div className="flex items-center justify-center mb-7"><h1 className='font-bold text-xl'>{title} Flash</h1></div>
      {tattooFlashLoading && <TattooImageSkeleton />}
      <div className="flex flex-col md:flex-row gap-5 items-center justify-center md:flex-wrap ">
        {!tattooFlashLoading && (tattooFlash[0].Picture.map((tattooImage, index) => (<TattooImageFlashComponent tattooImage={tattooImage} key={index} />)))}
        {!tattooFlashLoading && tattooFlash[0].Picture.length == 0 && <div className="flex items-center justify-center mb-7"><h1 className='font-bold text-xl'>No tattoo found</h1></div>}
      </div>

    </div>
  )
}
