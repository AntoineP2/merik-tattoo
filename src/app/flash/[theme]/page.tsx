import React from 'react'
import TattooImageComponent from '@/components/tattoo/TattooImageComponent'

//<div>My Post: {params.theme}</div>

export default function page({ params }: { params: { theme: string } }) {
  return (
    <div>My Post: {params.theme}</div>
  )
}
