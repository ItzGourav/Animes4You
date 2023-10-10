"use client"
import { animeT } from '@/types/indes'
import { linkFormatter } from '@/utils/helpers'
import { Chip } from '@nextui-org/chip'
import { Button, Tooltip } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFire, FaPlay } from "react-icons/fa"
import { RxDotFilled } from "react-icons/rx"
import { TbListDetails } from "react-icons/tb"

export default function AnimeCard({ anime, isPopular, pos }: { anime: animeT, isPopular?: boolean, pos?: number }) {

    const ttContent = <div className='w-full'>
        <div className='underline decoration-primary decoration-2'>{anime?.name}</div>
        <div className='flex text-sm py-1 items-center justify-between'>
            <div>24 min. </div>
            <Chip color='primary'>{anime?.type}</Chip>
        </div>
        <div className='text-[13px] py-2 opacity-70'>{anime?.desc}</div>
        <div className='text-sm'>
            <div>Status: <span className='text-xs opacity-70'>{anime?.status}</span></div>
            <div>Genre: {anime?.genre?.map((g, indx) => {
                return <Link href={`/genre/${linkFormatter(g)}`} key={indx} className='text-xs opacity-70 hover:opacity-[1] hover:text-primary transition-all underline decoration-primary'>{g}{indx !== anime?.genre.length - 1 ? ", " : "."}</Link>
            })}</div>
            <div>Studio: <Link href={`/studio/${linkFormatter(anime?.studio)}`} className='text-xs opacity-70 hover:opacity-[1] hover:text-primary transition-all underline decoration-primary'>{anime?.studio}</Link></div>
        </div>
        <Button as={Link} href={`/${anime?.slug}`} startContent={<TbListDetails className="text-xl" />} color='primary' variant='flat' className='border font-medium border-primary w-full h-auto py-2 my-2'>More Detail</Button>
    </div >

    return (
        <div className='rounded-md overflow-hidden'>
            {isPopular && <div className='mb-1 flex items-center gap-2'>
                <div className='text-2xl font-semibold text-primary'>{pos && pos < 10 ? 0 : null}{pos}</div>
                <div className='line-clamp-1'>{anime?.name}</div>
            </div>}
            <Tooltip className='max-w-[300px] min-w-[250px] shadow-xl shadow-primary/30 border border-primary bg-surface/[95%] p-4'
                placement='bottom' offset={-120} content={ttContent}>
                <div className='relative aspect-[0.89] sm:aspect-[0.69] group rounded-md overflow-hidden cursor-pointer'>
                    {anime?.isTrending && <div className='bg-[#dd3333] p-[6px] absolute top-1 left-1 z-[3] rounded-full text'><FaFire /></div>}
                    <Link href={`/watch/${anime?.slug}`}>

                        <div className='absolute z-[2] invisible group-hover:visible top-0 left-0 h-full w-full bg-surface/70 grid place-content-center'><FaPlay className="text-2xl" /></div>
                    </Link>

                    <Image fill className='object-cover group-hover:scale-[1.1] transition-all z-[1]' src={anime?.image} alt='image' />
                    <div className='absolute top-0 right-0 z-[4] '>
                        <Chip color='warning' radius='none' className='px-1 rounded-bl-xl'>{anime?.subOrDub}</Chip>
                    </div>
                    {!isPopular && <div className='text-sm bg-black/80 flex justify-center items-center px-2 py-1 sm:py-3 absolute bottom-0 left-0 w-full z-[2]'>
                        <div className='line-clamp-1'>{anime?.name}</div>
                    </div>}
                </div>
            </Tooltip>
            <div className='flex justify-between mt-2'>
                <div className='flex md:gap-1 text-xs md:text-sm items-center text-white/50 font-medium'>
                    <div>{anime?.type}</div>
                    <RxDotFilled />
                    <div>{anime?.eps}</div>
                </div>
                <div>
                    {anime?.completed && <Chip size='sm' variant='flat' className='text-xs font-medium' color='success'>Completed</Chip>}
                </div>
            </div>
        </div >
    )
}