import React from 'react'

export default function Cast({ params }: { params: { slug: string } }) {
    let slug = params?.slug
    return (
        <div>
            {slug}
        </div>
    )
}
