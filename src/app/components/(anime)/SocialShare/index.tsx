"use client"
import React, { useEffect, useState } from 'react'
import { FacebookIcon, FacebookShareButton, PinterestIcon, PinterestShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share"

export default function SocialShare({ isWidthFull = true, iconSize = 40, image }: { isWidthFull?: boolean; iconSize?: number; image: string }) {
    const [url, setUrl] = useState("")

    useEffect(() => {
        if (typeof window !== "undefined") {
            setUrl(window.location.href)
        }
    }, [])

    return (
        <div className={`flex ${isWidthFull ? "w-full my-7" : "w-fit"} justify-center`}>
            <div className={`${isWidthFull ? "space-x-2" : "space-x-1"}`}>
                <FacebookShareButton url={url} >
                    <FacebookIcon round size={iconSize} />
                </FacebookShareButton>
                <TwitterShareButton url={url} >
                    <TwitterIcon round size={iconSize} />
                </TwitterShareButton>
                <WhatsappShareButton url={url}>
                    <WhatsappIcon round size={iconSize} />
                </WhatsappShareButton>
                <PinterestShareButton media={image} url={url}>
                    <PinterestIcon round size={iconSize} />
                </PinterestShareButton>
            </div>
        </div>
    )
}
