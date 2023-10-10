import React from 'react'
import WatchPageComponent from './(components)/WatchPageComponent'

export default function WatchPage({ params }: { params: { slug: string } }) {
    return (
        <div>
            <WatchPageComponent slug={params.slug} />
        </div>
    )
}
