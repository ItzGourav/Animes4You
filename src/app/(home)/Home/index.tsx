import React from 'react'
import Slider from './Slider'
import Popular from '../Popular'
import Latest from '../Latest'

export default function Home() {
    return (
        <div className='flex flex-col xl:flex-row gap-2'>
            <div className='xl:w-[75%]'>
                <Slider />
                <Popular />
                <Latest />
            </div>
            <div className='xl:w-[25%] bg-white/5 h-[500px]'>

            </div>
        </div>
    )
}
