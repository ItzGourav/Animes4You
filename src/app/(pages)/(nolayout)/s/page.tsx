"use client"
import AnimeCard from '@/app/components/AnimeCard'
import Filters from '@/app/components/Sidebar/Filters'
import { ANIMES } from '@/utils/constants'
import React from 'react'

export default function page() {
    return (
        <div>
            <Filters />
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3 gap-y-7 py-5'>
                {[...ANIMES, ...ANIMES, ...ANIMES].map((i, indx) => {
                    return <AnimeCard key={indx} anime={i} />
                })}
            </div>
        </div>
    )
}
