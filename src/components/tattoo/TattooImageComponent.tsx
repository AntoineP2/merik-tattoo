import React from 'react'
import {tattooImageType} from '@/utils/types/type'

interface ChildComponentProps {
  tattooImages : tattooImageType[]
}


export default function TattooImageComponent(props : ChildComponentProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:flex-wrap ">
      {props.tattooImages.map((tattooImage: tattooImageType) => (<img src={tattooImage.Picture[0].url} key={tattooImage.id} className="w-80 h-80 " />))}
    </div>
  )
}
