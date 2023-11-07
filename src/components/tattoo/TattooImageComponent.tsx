import React from 'react'
import {tattooImageType} from '@/utils/types/type'

interface ChildComponentProps {
  tattooImages : tattooImageType[]
}


export default function TattooImageComponent(props : ChildComponentProps) {
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center justify-center md:flex-wrap ">
      {props.tattooImages.map((tattooImage: tattooImageType) => (<img src={tattooImage.Picture[0].url} key={tattooImage.id} className="w-80 h-80 transition ease-in-out duration-300 md:sepia hover:sepia-0 hover:scale-105 rounded-lg shadow-md shadow-black" />))}
    </div>
  )
}
