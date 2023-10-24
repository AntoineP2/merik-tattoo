import React from 'react'
import { FooterListType } from '@/utils/types/type'

interface ChildComponentProps {
  FooterList: FooterListType;
}

export default function FooterComponent(props: ChildComponentProps) {
  return (
    <div className='flex items-center mb-5'>
      {props.FooterList.icon}
      <div className='inline-block ml-3'>
        <p className='font-bold'>{props.FooterList.title}</p>
        <p className='font-light text-sm'>{props.FooterList.text}</p>
      </div>
    </div>
  )
}
