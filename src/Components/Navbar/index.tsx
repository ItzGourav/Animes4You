import { Button, Input } from '@mui/joy'
import Image from 'next/image'
import React from 'react'
import { HiMenuAlt2, HiOutlineSearch } from "react-icons/hi"
import { FiStar } from "react-icons/fi"

export default function Navbar() {
    return (
        <div className="max-w-screen-xl mx-auto py-5">
            <div className='flex justify-between'>
                <div className='flex items-center gap-4'>
                    <HiMenuAlt2 className="text-6xl" />
                    <div className='relative h-12 w-56'>
                        <Image fill src={"/images/logo.png"} alt='animes4you-logo' />
                    </div>
                    <Input placeholder='Search...' variant='soft' className='p-4 rounded-full w-full max-w-md bg-white/5' endDecorator={<HiOutlineSearch className="text-2xl" />} />
                </div>
                <div>
                    <Button className='rounded-full py-4 bg-primary hover:bg-primary/80' startDecorator={<FiStar />}>
                        Surprise me
                    </Button>
                </div>
            </div>
        </div>
    )
}
