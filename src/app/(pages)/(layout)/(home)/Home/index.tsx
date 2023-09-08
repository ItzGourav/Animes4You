import React from 'react'
import Slider from './Slider'
import Popular from '../Popular'
import Latest from '../Latest'
import Recommendation from '../Recommendation'

export default function Home() {
    return (
        <div className=''>
            <Slider />
            <Popular />
            <Latest />
            <Recommendation />
        </div>
    )
}
