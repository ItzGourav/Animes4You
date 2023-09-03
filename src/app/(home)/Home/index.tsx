import React from 'react'
import Slider from './Slider'
import Popular from '../Popular'
import Latest from '../Latest'

export default function Home() {
    return (
        <div className='flex gap-2'>
            <div className='w-[75%]'>
                <Slider />
                <Popular />
                <Latest />
            </div>
            <div className='w-[25%] bg-white/5 h-[500px]'>

            </div>
        </div>
    )
}
