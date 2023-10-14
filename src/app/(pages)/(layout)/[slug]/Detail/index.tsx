"use client";
import { ANIMES } from "@/utils/constants";
import { Button, Chip } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { tv } from "tailwind-variants";
import Link from "next/link";
import SocialShare from "../../../../components/(anime)/SocialShare";
import Synopsis from "../../../../components/(anime)/Synopsis";
import CommentList from "../../../../components/(anime)/Commnets";
import AnimeMainInfo from "@/app/components/AnimeMainInfo";
import EpList from "./EpList";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";

export default function Detail({ slug }: { slug: string }) {
    const [detail, setDetail] = useState(
        ANIMES.filter((i) => i.slug === slug)[0]
    );
    const router = useRouter()

    return (
        detail ? <div>
            <AnimeMainInfo detail={detail} />
            <div className="bg-white/5 border-t border-t-white/20 p-4 flex flex-wrap gap-2">
                {detail?.tags?.map((i, indx) => {
                    return <Button as={Link} className="border text-white/60 hover:text-primary" href={`/tag/${i?.toLowerCase()}`} key={indx} size="sm" variant="bordered" radius="none" >{i}</Button>
                })}
            </div>
            <SocialShare image={detail?.image} />
            <Synopsis anime={detail} />
            <EpList anime={detail} />
            <CommentList />
        </div>
            :
            <div className="flex justify-center py-12 pb-20 text-center">
                <div>
                    <div className="relative h-72 aspect-video">
                        <Image fill src={"/images/404.png"} alt="404" />
                    </div>
                    <div>
                        <Button color="primary" onClick={() => router.push("/")} >Go Home</Button>
                    </div>
                </div>
            </div>
    );
}
