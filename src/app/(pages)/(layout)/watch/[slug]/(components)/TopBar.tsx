"use client"
import { animeT } from '@/types/indes'
import { Chip } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { tv } from 'tailwind-variants'
import { PiDotOutlineFill } from "react-icons/pi"

export default function TopBar({ anime }: { anime: animeT }) {
    return (
        <div className='bg-white/5 p-3 rounded-md mb-4'>
            <div className='space-y-1'>
                <div className='underline text-xl font-medium decoration-primary'>
                    [Watch] {anime?.name} episode {anime?.eps}
                </div>
                <div className='text-xs text-white/40 flex items-center font-light gap-1'>
                    <Chip color='warning' >{anime?.subOrDub}</Chip>
                    <div>Released on September 26, 2023</div>
                    <PiDotOutlineFill />
                    <div>6 views</div>
                    <PiDotOutlineFill />
                    <div>Posted by <Link className={LinkV({ class: "capitalize font-medium text-sm" })} href={`/author/${anime?.author}`}>{anime?.author}</Link></div>
                    <PiDotOutlineFill />
                    <div>Series: <Link className={LinkV({ class: "capitalize font-medium text-sm" })} href={`/${anime?.slug}`}>{anime?.slug?.replaceAll("-", " ")}</Link></div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}


const LinkV = tv({ base: "text-primary hover:text-white/80 hover:underline decoration-primary transition-all" })
