"use client"
import React from 'react'
import Image from 'next/image'
import { FlashThemeListType } from '../../utils/types/type';

interface ChildComponentProps {
    themeInfo: FlashThemeListType
}

export default function TattooThemeComponent(props: ChildComponentProps) {
    // --------- VARIABLE --------

    const [displayTitle, setDisplayTitle] = React.useState(true)

    // --------- Function --------

    const handleMouseEnter = () => {
        setDisplayTitle(false)
    }

    const handleMouseLeave = () => {
        setDisplayTitle(true)
    }
    return (
        <div className='flex items-center justify-center'>
            <Image
                src={props.themeInfo.url}
                alt={props.themeInfo.alt}
                width={500}
                height={300}
                className='brightness-50 transition ease-in-out duration-300 hover:brightness-100 hover:scale-105 rounded-lg shadow-md shadow-black'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            {displayTitle && <p className='absolute font-bold text-2xl'>{props.themeInfo.title}</p>}
        </div>
    )
}
