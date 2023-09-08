"use client"
import { animeT } from '@/types/indes'
import { ANIMES } from '@/utils/constants'
import { Chip, Divider } from '@nextui-org/react'
import React from 'react'
import { BiSolidChevronRight } from 'react-icons/bi'

export default function OnGoing() {
    return (
        <div className='bg-white/5 rounded-md'>
            <div className='text-xl font-semibold p-3 '>OnGoing Series</div>
            {ANIMES.map((i, indx) => {
                return (<React.Fragment key={indx}>
                    <Divider className='opacity-30' />
                    <Item i={i} ></Item>
                </React.Fragment>)
            })}
        </div>
    )
}

const Item = ({ i }: { i: animeT }) => {
    return (
        <div className='flex items-center gap-3 p-2 hover:bg-white/10 transition-all cursor-pointer group'>
            <div>
                <BiSolidChevronRight className="group-hover:text-primary group-hover:translate-x-[2px] transition-all cursor-pointer" />
            </div>
            <div className='text-sm'>{i?.name}</div>
            <Chip radius='sm' size='sm' className='text-xs ml-auto whitespace-nowrap' color='primary'>Episode {i?.eps}</Chip>
        </div>
    )
}
