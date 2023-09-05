import React from 'react'
import Slider from './Slider'
import Popular from '../Popular'
import Latest from '../Latest'
import Recommendation from '../Recommendation'
import Sidebar from './Sidebar'

export default function Home() {
    return (
        <div className='flex flex-col xl:flex-row gap-2'>
            <div className='xl:w-[75%]'>
                <Slider />
                <Popular />
                <Latest />
                <Recommendation />
            </div>
            <div className='xl:w-[25%] h-[500px]'>
                <Sidebar />
            </div>
        </div>
    )
}
