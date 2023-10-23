import React from 'react'
import { FooterListType } from '@/utils/types/type'

interface ChildComponentProps {
  FooterList: FooterListType;
}

export default function FooterComponent(props: ChildComponentProps) {
  return (
    <div>
      {props.FooterList.icon}
      <div className='inline'>
        <p>{props.FooterList.title}</p>
        <p>{props.FooterList.text}</p>
      </div>
    </div>
  )
}
