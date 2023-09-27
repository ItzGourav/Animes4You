import React from 'react'
import Detail from './Detail'

export default function page({ params }: { params: { slug: string } }) {
    return (
        <Detail slug={params?.slug} />
    )
}
