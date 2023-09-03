import { animeT } from '@/types/indes'
import { Chip } from '@mui/joy'
import Image from 'next/image'
import React from 'react'
import { FaFire, FaPlay } from "react-icons/fa"
import { RxDotFilled } from "react-icons/rx"

export default function AnimeCard({ item, isPopular, pos }: { item: animeT, isPopular?: boolean, pos?: number }) {
    return (
        <div className='rounded-md overflow-hidden'>
            {isPopular && <div className='mb-1 flex items-center gap-2'>
                <div className='text-2xl font-semibold text-primary'>{pos && pos < 10 ? 0 : null}{pos}</div>
                <div className='line-clamp-1'>{item?.name}</div>
            </div>}
            <div className='relative h-[250px] group rounded-md overflow-hidden cursor-pointer'>
                {item?.isTrending && <div className='bg-[#dd3333] absolute top-1 left-1 z-[3]'><FaFire /></div>}
                <div className='absolute z-[2] invisible group-hover:visible top-0 left-0 h-full w-full bg-surface/70 grid place-content-center'><FaPlay className="text-2xl" /></div>
                <Image fill className='object-cover group-hover:scale-[1.1] transition-all z-[1]' src={item?.image} alt='image' />
                <div className='absolute bottom-0 right-0 z-[4]'>
                    <Chip color='warning' sx={{ padding: "5px 15px", borderRadius: 0, borderTopLeftRadius: "10px" }}>{item?.subOrDub}</Chip>
                </div>
            </div>
            <div className='flex justify-between mt-2'>
                <div className='flex gap-1 text-sm items-center text-white/50 font-medium'>
                    <div>{item?.type}</div>
                    <RxDotFilled />
                    <div>{item.eps}</div>
                </div>
                <div>
                    {item?.completed && <Chip size='sm' color='success'>Completed</Chip>}
                </div>
            </div>
        </div >
    )
}