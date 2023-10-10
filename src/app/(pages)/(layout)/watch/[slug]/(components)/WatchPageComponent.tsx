"use client"
import { ANIMES } from '@/utils/constants';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import TopBar from './TopBar';
import AnimeMainInfo from '@/app/components/AnimeMainInfo';

export default function WatchPageComponent({ slug }: { slug: string }) {
    const [detail, setDetail] = useState(
        ANIMES.filter((i) => i.slug === slug)[0]
    );

    const router = useRouter()
    return (
        <div>
            <TopBar anime={detail} />
            <AnimeMainInfo detail={detail} />
        </div>
    )
}
