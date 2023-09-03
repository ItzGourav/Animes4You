"use client";
import { Button, Input } from '@mui/joy'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { HiMenuAlt2, HiOutlineSearch } from "react-icons/hi"
import { FiStar } from "react-icons/fi"

export default function Navbar() {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="py-5 relative">
            <div className='flex justify-between'>
                <div className='flex items-center gap-2 md:gap-4'>
                    <div className='flex items-center gap-2 md:gap-4'>
                        <HiMenuAlt2 className="text-4xl" />
                        <div className='relative h-12 w-40'>
                            <Image fill src={"/images/logo.png"} alt='animes4you-logo' />
                        </div>
                    </div>
                    <Input placeholder='Search...' variant='soft' className='p-4 hidden md:flex rounded-full w-full max-w-md bg-white/5' endDecorator={<HiOutlineSearch className="text-2xl" />} />
                </div>
                <div className='flex gap-3 items-center'>
                    <div onClick={() => setShowSearch(p => !p)} >
                        <HiOutlineSearch className="text-2xl md:hidden cursor-pointer" />
                    </div>
                    <Button className='rounded-full py-4 bg-primary hover:bg-primary/80' >
                        <FiStar />
                        <span className='hidden md:ml-2 md:block whitespace-nowrap '>
                            Surprise me
                        </span>
                    </Button>
                </div>
            </div>
            {
                showSearch &&
                <Input placeholder='Search...' variant='soft' className='p-4 rounded-full w-full max-w-md bg-[#1b1b1b] absolute z-30 -bottom-10 right-0 sm:right-10 ' endDecorator={<HiOutlineSearch className="text-2xl" />} />
            }
        </div>
    )
}
