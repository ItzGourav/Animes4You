"use client"
import { animeT } from '@/types/indes'
import { Chip } from '@nextui-org/chip'
import { Button, Tooltip } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import { FaFire, FaPlay } from "react-icons/fa"
import { RxDotFilled } from "react-icons/rx"
import { TbListDetails } from "react-icons/tb"

export default function AnimeCard({ item, isPopular, pos }: { item: animeT, isPopular?: boolean, pos?: number }) {

    const ttContent = <div className='w-full'>
        <div className='underline decoration-primary decoration-2'>{item?.name}</div>
        <div className='flex text-sm py-1 items-center justify-between'>
            <div>24 min. </div>
            <Chip color='primary'>{item?.type}</Chip>
        </div>
        <div className='text-[13px] py-2 opacity-70'>{item.desc}</div>
        <div className='text-sm'>
            <div>Status: <span className='text-xs opacity-70'>{item?.status}</span></div>
            <div>Genre: <span className='text-xs opacity-70'>{item?.genre.join(", ")}</span></div>
            <div>Studio: <span className='text-xs opacity-70'>{item?.studio}</span></div>
        </div>
        <Button startContent={<TbListDetails className="text-xl" />} color='primary' variant='flat' className='border font-medium border-primary w-full h-auto py-2 my-2'>More Detail</Button>
    </div>

    return (
        <div className='rounded-md overflow-hidden'>
            {isPopular && <div className='mb-1 flex items-center gap-2'>
                <div className='text-2xl font-semibold text-primary'>{pos && pos < 10 ? 0 : null}{pos}</div>
                <div className='line-clamp-1'>{item?.name}</div>
            </div>}
            <Tooltip className='max-w-[300px] min-w-[250px] shadow-2xl shadow-primary/40 backdrop-blur-lg border border-primary bg-black/50 p-4'
                classNames={{ base: " backdrop-blur-md" }}
                placement='bottom' offset={-120} content={ttContent}>
                <div className='relative aspect-[0.89] sm:aspect-[0.69] group rounded-md overflow-hidden cursor-pointer'>
                    {item?.isTrending && <div className='bg-[#dd3333] p-[6px] absolute top-1 left-1 z-[3] rounded-full text'><FaFire /></div>}
                    <div className='absolute z-[2] invisible group-hover:visible top-0 left-0 h-full w-full bg-surface/70 grid place-content-center'><FaPlay className="text-2xl" /></div>
                    <Image fill className='object-cover group-hover:scale-[1.1] transition-all z-[1]' src={item?.image} alt='image' />
                    <div className='absolute top-0 right-0 z-[4] '>
                        <Chip color='warning' radius='none' className='px-1 rounded-bl-xl'>{item?.subOrDub}</Chip>
                    </div>
                    {!isPopular && <div className='text-sm bg-black/80 flex justify-center items-center px-2 py-1 sm:py-3 absolute bottom-0 left-0 w-full z-[2]'>
                        <div className='line-clamp-1'>{item?.name}</div>
                    </div>}
                </div>
            </Tooltip>
            <div className='flex justify-between mt-2'>
                <div className='flex md:gap-1 text-xs md:text-sm items-center text-white/50 font-medium'>
                    <div>{item?.type}</div>
                    <RxDotFilled />
                    <div>{item.eps}</div>
                </div>
                <div>
                    {item?.completed && <Chip size='sm' variant='flat' className='text-xs font-medium' color='success'>Completed</Chip>}
                </div>
            </div>
        </div >
    )
}