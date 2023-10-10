import AnimeCard from '@/app/components/AnimeCard'
import { ANIMES } from '@/utils/constants'
import React from 'react'

export default function Author({ params }: { params: { slug: string } }) {
    let slug = params?.slug
    return (
        <div>
            <div className='text-[15px]'>
                Author:  <span className='capitalize text-primary font-medium text-xl'>{slug.replaceAll("-", " ")}</span>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3 gap-y-7 py-5'>
                {[...ANIMES].map((i, indx) => {
                    return <AnimeCard key={indx} anime={i} />
                })}
            </div>
        </div>
    )
}
