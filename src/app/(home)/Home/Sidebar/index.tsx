import React from 'react'
import Filters from './Filters'
import SeriesComp from './SeriesComp'

export default function Sidebar() {
    return (
        <div className='space-y-5'>
            <Filters />
            <SeriesComp type='popular' />
            <SeriesComp type='new' />
        </div>
    )
}
