"use client"
import { ANIMES } from '@/utils/constants';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import TopBar from './TopBar';
import AnimeMainInfo from '@/app/components/AnimeMainInfo';
import Synopsis from '@/app/components/(anime)/Synopsis';
import CommentList from '@/app/components/(anime)/Commnets';
import Player from './Player';

export default function WatchPageComponent({ slug }: { slug: string }) {
    const [detail, setDetail] = useState(
        ANIMES.filter((i) => i.slug === slug)[0]
    );

    const router = useRouter()
    return (
        <div>
            <TopBar anime={detail} />
            <Player anime={detail.slug} />
            <AnimeMainInfo detail={detail} />
            <Synopsis anime={detail} />
            <CommentList />
        </div>
    )
}
