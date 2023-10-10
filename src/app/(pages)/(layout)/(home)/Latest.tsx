"use client"
import { ANIMES } from '@/utils/constants'
import React from 'react'
import { Button } from '@nextui-org/button'
import AnimeCard from '@/app/components/AnimeCard'

export default function Latest() {
    return (
        <div className='mt-10'>
            <div className='text-2xl font-semibold mb-2'>Latest Release</div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-7'>
                {[...ANIMES, ...ANIMES, ...ANIMES].map((i, indx) => {
                    return <AnimeCard key={indx} anime={i} />
                })}
            </div>
            <div className='flex justify-center mt-6'>
                <Button variant='ghost' color='primary' className=''>Next</Button>
            </div>
        </div>
    )
}
