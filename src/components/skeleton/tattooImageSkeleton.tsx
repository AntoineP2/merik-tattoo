import React from 'react'
import { Skeleton } from '@mui/material';


export default function TattooImageSkeleton() {
    return (
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center md:flex-wrap">
            {Array(5).fill(0).map((_, index) => (<Skeleton variant='rectangular' width={320} height={320} key={index} />))}
            
        </div>
    )
}
