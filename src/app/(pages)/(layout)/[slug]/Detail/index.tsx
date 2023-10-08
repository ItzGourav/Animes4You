"use client";
import { animeT } from "@/types/indes";
import { ANIMES } from "@/utils/constants";
import { Button, Chip } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { BsFillBookmarkFill, BsBookmark, BsFillSquareFill } from "react-icons/bs";
import { tv } from "tailwind-variants";
import Link from "next/link";
import SocialShare from "./SocialShare";
import Synopsis from "./Synopsis";
import EpList from "./EpList";
import CommentList from "./Commnets";

export default function Detail({ slug }: { slug: string }) {
    const [detail, setDetail] = useState(
        ANIMES.filter((i) => i.slug === slug)[0]
    );
    const [isBookmarked, setIsBookmarked] = useState(false);
    return (
        <div>
            <div className="flex gap-4 bg-white/5 p-4 rounded-sm">
                <div className="basis-[18%]">
                    <div className="relative max-w-[180px] rounded-sm overflow-hidden aspect-[0.69]">
                        <Image fill src={detail?.image} alt="anime-poster" />
                    </div>
                    <div className="bg-black/50 rounded-md text-center my-3 p-3">
                        <div>Rating {detail?.rating}</div>
                        <div>
                            <StarRatings
                                rating={+detail?.rating / 2}
                                starDimension="17px"
                                starRatedColor="#f5c60d"
                                starEmptyColor="#ffffff61"
                                starSpacing="1px"
                                numberOfStars={5}
                                name="rating"
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <Button
                            radius="sm"
                            onClick={() => setIsBookmarked((p) => !p)}
                            className={`w-full ${isBookmarked ? "bg-gray-400/70" : "bg-primary"}`}
                            startContent={
                                isBookmarked ? <BsFillBookmarkFill /> : <BsBookmark />
                            }
                        >
                            {isBookmarked ? "Bookmarked" : "Bookmark"}
                        </Button>
                    </div>
                </div>
                <div className="flex-1">
                    <div className=" mb-3 font-medium text-2xl underline decoration-primary">{detail?.name}</div>
                    <div className="text-sm font-light text-white/80 " >Watch full episodes <span className="font-semibold">{detail.name}</span>, download {detail?.name} english subbed, {detail?.name} eng sub, download {detail?.name} eng sub, stream {detail?.name} at Animes4You.
                        {detail?.name}</div>
                    <div className="flex flex-wrap justify-between gap-20">
                        <div className="max-w-40%">
                            <div className={itemV()}><BsFillSquareFill className={iconsV()} />status: {detail?.status}</div>
                            <div className={itemV()}><BsFillSquareFill className={iconsV()} />Studio: <Link className={LinkV()} href={`/studio/${detail?.studio}`}>{detail?.studio}</Link></div>
                            <div className={itemV()}><BsFillSquareFill className={iconsV()} />Released: 2007</div>
                            <div className={itemV()}><BsFillSquareFill className={iconsV()} />Duration: 24 min. per ep.</div>
                            <div className={itemV()}><BsFillSquareFill className={iconsV()} />Season: Winter 2007</div>
                            <div className={itemV()}><BsFillSquareFill className={iconsV()} />Country: Japan</div>
                            <div className={itemV()}><BsFillSquareFill className={iconsV()} />Type: {detail?.type}</div>
                            <div className={itemV()}><BsFillSquareFill className={iconsV()} />Episodes: {detail?.eps}</div>
                        </div>
                        <div className="max-w-[40%]">
                            <div className={itemV()}><BsFillSquareFill className={iconsV()} />Censor: Censored</div>
                            <div className={itemV()}><BsFillSquareFill className={iconsV()} />Director: {detail?.director?.map((i) =>
                                <Link key={i} className={LinkV()} href={`/director/${i.replaceAll(" ", "-")}`}>{i}</Link>
                            )}
                            </div>
                            <div className={itemV()}><BsFillSquareFill className={iconsV()} />Casts: {detail?.cast?.map((i, indx) =>
                                <Link key={i} className={LinkV()} href={`/cast/${i.replaceAll(" ", "-")}`}>{i}{indx === detail?.cast?.length - 1 ? "." : ","}</Link>
                            )}</div>
                            <div className={itemV()}><BsFillSquareFill className={iconsV()} />Posted by: wish</div>
                            <div className={itemV()}><BsFillSquareFill className={iconsV()} />Released on: September 12, 2023</div>
                            <div className={itemV()}><BsFillSquareFill className={iconsV()} />Updated on: September 12, 2023</div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                        {detail?.genre?.map((i, indx) => {
                            return <Button as={Link} href={`/genre/${i?.toLowerCase()}`} key={indx} size="sm" variant="flat" radius="sm" color="primary">{i}</Button>
                        })}
                    </div>
                    <div className="text-sm font-light text-white/80 my-3">
                        Watch streaming <span className="font-semibold">{detail.name}</span> English Subbed on Animes4You. You can also download free {detail.name} Eng Sub, don&apos;t forget to watch online streaming of various quality 720P 360P 240P 480P according to your connection to save internet quota, {detail.name} on Animes4You MP4 MKV hardsub softsub English subbed is already contained in the video.
                    </div>
                </div>
            </div>
            <div className="bg-white/5 border-t border-t-white/20 p-4 flex flex-wrap gap-2">
                {detail?.tags?.map((i, indx) => {
                    return <Button as={Link} className="border text-white/60 hover:text-primary" href={`/tag/${i?.toLowerCase()}`} key={indx} size="sm" variant="bordered" radius="none" >{i}</Button>
                })}
            </div>
            <SocialShare image={detail?.image} />
            <Synopsis anime={detail} />
            {/* <EpList anime={detail} /> */}
            <CommentList />
        </div>
    );
}


const iconsV = tv({ base: "text-[6px] text-primary" })
const itemV = tv({ base: "flex flex-wrap items-center gap-1 my-1 text-sm " })
const LinkV = tv({ base: "text-primary hover:text-white/80 hover:underline decoration-primary transition-all" })
