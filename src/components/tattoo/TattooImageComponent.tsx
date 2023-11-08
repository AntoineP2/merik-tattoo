import React from 'react'
import { tattooImageType } from '@/utils/types/type'


interface ChildComponentProps {
  tattooImage: tattooImageType
}


export default function TattooImageComponent(props: ChildComponentProps) {
  return (
    <div>
      <img src={props.tattooImage.Picture[0].url} key={props.tattooImage.id} className="w-80 h-80 transition ease-in-out duration-300 md:sepia hover:sepia-0 hover:scale-105 rounded-lg shadow-md shadow-black" />
    </div>
  )
}
