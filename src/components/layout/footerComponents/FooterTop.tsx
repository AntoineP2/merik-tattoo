import React from 'react'
import FooterComponent from '../../FooterComponent'
import { FooterListType } from '@/utils/types/type'

interface ChildComponentProps {
    FooterList: FooterListType[];
}

export default function FooterTop(props: ChildComponentProps) {
    return (
        <div className="flex md:justify-around md:flex-row flex-col">
            {props.FooterList.map((item, index) => (
                <FooterComponent FooterList={item} key={index} />
            ))}
        </div>
    )
}
