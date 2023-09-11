"use client"
import { animeT } from '@/types/indes'
import { ANIMES } from '@/utils/constants'
import { Chip, Divider, Tab, Tabs } from '@nextui-org/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import StarRatings from 'react-star-ratings';

enum filterE {
    WEEKLY = "weekly",
    MONTHLY = "monthly",
    ALL = "all",
}


type compT = "popular" | "new"

export default function SeriesComp({ type }: { type: compT }) {
    const [filter, setFilter] = useState<any>(filterE.WEEKLY)

    return (
        <div className='bg-white/5 rounded-md'>
            <div className='text-xl font-semibold p-3 '><span className='capitalize'>{type}</span> Series</div>

            <div className='w-full'>
                <Tabs
                    classNames={{
                        base: "w-full",
                        tabList: "w-full"
                    }}
                    variant='underlined'
                    color='primary'
                    aria-label="Options"
                    selectedKey={filter}
                    onSelectionChange={setFilter}
                >
                    <Tab key="weekly" title="Weekly" />
                    <Tab key="monthly" title="Monthly" />
                    <Tab key="all" title="All" />
                </Tabs>

            </div>
            {ANIMES.map((i, indx) => {
                return (
                    <React.Fragment key={indx}>
                        <Divider className='opacity-30' />
                        <Item type={type} i={i} pos={indx + 1} ></Item>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

const Item = ({ i, pos, type }: { i: animeT, pos: number, type: compT }) => {
    return <div className='flex items-center gap-4 p-3'>
        {type === "popular" && <div>
            <Chip variant='bordered' radius='none' color='primary' className='aspect-square border-[1px] rounded-sm'>{pos}</Chip>
        </div>}
        <div className='relative aspect-square w-[60px] flex-shrink-0 rounded-md overflow-hidden'><Image className='object-cover' src={i?.image} alt="anime-img" fill /></div>
        <div className='text-sm space-y-1'>
            <div className='font-medium'>{i?.name}</div>
            <div className=''><span className='text-white/30 font-normal'>Genre: </span>{i?.genre.join(", ")}</div>
            {type === 'popular' && <StarRatings
                rating={+i?.rating}
                starRatedColor="blue"
                numberOfStars={6}
                name='rating'
            />}
            {type === "new" &&
                <div className=' text-primary'>Mappa Studios</div>
            }
        </div>
    </div>
}