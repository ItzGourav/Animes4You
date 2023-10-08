"use client"
import React, { useEffect, useState } from 'react'
import { FacebookIcon, FacebookShareButton, PinterestIcon, PinterestShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share"

export default function SocialShare({ image }: { image: string }) {
    const [url, setUrl] = useState("")

    useEffect(() => {
        if (typeof window !== "undefined") {
            setUrl(window.location.href)
        }
    }, [])

    return (
        <div className='flex w-full justify-center my-7'>
            <div className='space-x-3'>
                <FacebookShareButton url={url} >
                    <FacebookIcon round size={40} />
                </FacebookShareButton>
                <TwitterShareButton url={url} >
                    <TwitterIcon round size={40} />
                </TwitterShareButton>
                <WhatsappShareButton url={url}>
                    <WhatsappIcon round size={40} />
                </WhatsappShareButton>
                <PinterestShareButton media={image} url={url}>
                    <PinterestIcon round size={40} />
                </PinterestShareButton>
            </div>
        </div>
    )
}
