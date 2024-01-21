"use client"
import TattooImageComponent from '@/components/tattoo/TattooImageComponent'
import {useState, useEffect} from 'react'
import axios from "axios";
import TattooImageSkeleton from '@/components/skeleton/tattooImageSkeleton';


export default function Page() {
  // ------- VARIABLES -------

  const [tattooImages, setTattooImages] = useState([]);
  const [tattooImagesLoading, setTattooImagesLoading] = useState(true);

  // ------- FUNCTIONS -------
  const fetchTattooImages = async () => {
    try{
      
      const response = await axios.get("http://localhost:3005/api/v1/picture/getAllPicture");
      setTattooImages(response.data);  
      setTattooImagesLoading(false);
    }
    catch(error){
      console.log(error)
    }
  };
  // ------- EFFECTS -------

  useEffect( () => {

    setTattooImagesLoading(true);
    fetchTattooImages();
    

  }, [])

  //<TattooImageComponent tattooImages={tattooImages} />
  return (
    <div>
      <div className="flex items-center justify-center mb-7"><h1 className='font-bold text-xl'>TATTOO RECENT</h1></div>
      
      {tattooImagesLoading && <TattooImageSkeleton />}
      <div className="flex flex-col md:flex-row gap-5 items-center justify-center md:flex-wrap ">
      {!tattooImagesLoading && (tattooImages.map((tattooImage, index) => (<TattooImageComponent tattooImage={tattooImage} key={index} />)))}
      </div>
      
    </div>
  )
}
