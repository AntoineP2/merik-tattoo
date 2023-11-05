"use client"
import TattooImageComponent from '@/components/tattoo/TattooImageComponent'
import React from 'react'
import axios from "axios";


export default function page() {
  // ------- VARIABLES -------

  const [tattooImages, setTattooImages] = React.useState([]);
  const [tattooImagesLoading, setTattooImagesLoading] = React.useState(true);

  // ------- FUNCTIONS -------
  const fetchTattooImages = async () => {
    try{
      
      const response = await axios.get("http://localhost:3005/api/v1/picture/getAllPicture");
      setTattooImages(response.data);  
    }
    catch(error){
      console.log(error)
    }
  };
  // ------- EFFECTS -------

  React.useEffect( () => {

    setTattooImagesLoading(true);
    fetchTattooImages();
    setTattooImagesLoading(false);

  }, [])

  return (
    <div>
      {tattooImagesLoading && <div>Chargement...</div>}
      {!tattooImagesLoading && <TattooImageComponent tattooImages={tattooImages} />}
    </div>
  )
}
