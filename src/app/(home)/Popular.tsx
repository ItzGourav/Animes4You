import { ANIMES } from '@/utils/constants'
import React from 'react'
import AnimeCard from '../components/AnimeCard'
import { Button } from '@nextui-org/button'

export default function Popular() {
    return (
        <div className='mt-10'>
            <div className='text-2xl font-semibold mb-3'>Popular Today</div>
            <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
                {ANIMES.map((i, indx) => {
                    return <AnimeCard key={indx} item={i} isPopular={true} pos={indx + 1} />
                })}
            </div>
        </div>
    )
}
