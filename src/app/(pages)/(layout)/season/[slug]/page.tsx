import React from 'react'

export default function Season({ params }: { params: { slug: string } }) {
    let slug = params?.slug
    return (
        <div>
            {slug}
        </div>
    )
}
