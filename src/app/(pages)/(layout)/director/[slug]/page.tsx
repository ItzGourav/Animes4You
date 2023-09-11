import React from 'react'

export default function Director({ params }: { params: { slug: string } }) {
    let slug = params?.slug
    return (
        <div>
            {slug}
        </div>
    )
}
