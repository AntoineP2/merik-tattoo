import React from 'react'
import { tattooImageFlashType } from '@/utils/types/type'


interface ChildComponentProps {
  tattooImage: tattooImageFlashType
}


export default function TattooImageFlashComponent(props: ChildComponentProps) {
  return (
    <div>
      <img
        src={props.tattooImage.url}
        className="w-80 transition ease-in-out duration-300 md:grayscale md:brightness-50 hover:grayscale-0 hover:brightness-100 hover:scale-105 rounded-lg shadow-md shadow-black"
      />
    </div>
  )
}
