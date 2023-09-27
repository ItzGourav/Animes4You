"use client";
import { animeT } from "@/types/indes";
import { ANIMES } from "@/utils/constants";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";

export default function Detail({ slug }: { slug: string }) {
    const [detail, setDetail] = useState(
        ANIMES.filter((i) => i.slug === slug)[0]
    );
    const [isBookmarked, setIsBookmarked] = useState(false);
    return (
        <div>
            <div className="flex gap-4 bg-white/5 p-4 rounded-sm">
                <div className="basis-[15%]">
                    <div className="relative max-w-[150px] rounded-sm overflow-hidden aspect-[0.69]">
                        <Image fill src={detail?.image} alt="anime-poster" />
                    </div>
                    <div className="bg-black/90 my-3 p-3">
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
                    <div className="text-sm font-light text-white/80 " >Watch full episodes {detail?.name}, download {detail?.name} english subbed, {detail?.name} eng sub, download {detail?.name} eng sub, stream {detail?.name} at Animes4You.
                        {detail?.name}</div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}
