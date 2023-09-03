import AnimeCard from '@/components/AnimeCard'
import { ANIMES } from '@/utils/constants'
import React from 'react'

export default function Latest() {
    return (
        <div className='mt-10'>
            <div className='text-2xl font-semibold mb-2'>Latest Release</div>
            <div className=' grid grid-cols-5 gap-3'>
                {ANIMES.map((i, indx) => {
                    return <AnimeCard key={indx} item={i} />
                })}
            </div>
        </div>
    )
}
