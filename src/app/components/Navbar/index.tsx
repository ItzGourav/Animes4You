"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { HiMenuAlt2, HiOutlineSearch } from "react-icons/hi"
import { FiStar } from "react-icons/fi"
import { Button, Input, Tooltip } from '@nextui-org/react';
import Link from 'next/link';

export default function Navbar() {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className="py-5 relative">
            <div className='flex justify-between'>
                <div className='flex items-center gap-2 md:gap-4'>
                    <div className='flex items-center gap-2 md:gap-4'>
                        <HiMenuAlt2 className="text-4xl" />
                        <Link href={"/"}>
                            <div className='relative h-12 w-36'>
                                <Image fill src={"/images/logo.png"} alt='animes4you-logo' />
                            </div>
                        </Link>
                    </div>
                    <Input placeholder='Search...' className='hidden md:flex' radius='full' size='lg' variant='flat' endContent={<HiOutlineSearch className="text-2xl" />} />
                </div>
                <div className='flex gap-3 items-center'>
                    <div onClick={() => setShowSearch(p => !p)} >
                        <HiOutlineSearch className="text-2xl md:hidden cursor-pointer" />
                    </div>
                    <Tooltip color='foreground' className='md:hidden' content="Surprise me">
                        <Button
                            color='primary'
                            variant='shadow'
                            radius='full'
                            size='lg'
                            className='w-auto min-w-0 px-unit-0 h-auto p-3 hover:scale-[0.98] transition-all'
                        >
                            <FiStar />
                            <span className='hidden md:block whitespace-nowrap '>
                                Surprise me
                            </span>
                        </Button>
                    </Tooltip>
                </div>
            </div>
            {
                showSearch &&
                <Input placeholder='Search...' variant='flat' size='lg' radius='full' className='p-4 rounded-full w-full' />
            }
        </div>
    )
}
