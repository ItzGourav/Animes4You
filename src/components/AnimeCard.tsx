import { animeT } from '@/types/indes'
import Image from 'next/image'
import React from 'react'

export default function AnimeCard({ item, isPopular, pos }: { item: animeT, isPopular?: boolean, pos?: number }) {
    return (
        <div>
            {isPopular && <div className='mb-1'>
                <div className='text-xl font-semibold'>{pos && pos < 10 ? 0 : null}{pos}</div>
                <div>{item?.name}</div>
            </div>}
            <div className='relative h-[250px]'>
                <Image fill className='object-cover' src={item?.image} alt='image' />
            </div>
            <div>

            </div>
        </div>
    )
}