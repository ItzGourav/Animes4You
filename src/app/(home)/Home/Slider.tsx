"use client"
import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Button } from "@mui/joy"

export default function Slider() {
    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
    })
    return (
        <div>

            <div ref={ref} className="keen-slider">
                {
                    Array.from({ length: 6 }, (_, i) => i++).map((j) => {
                        return (
                            <div key={j} className="keen-slider__slide bg-primary py-5 px-2 md:p-5 rounded-md flex justify-between items-center">
                                <div className="flex justify-between items-center flex-wrap md:flex-nowrap gap-2">
                                    <div className="max-w-[85%]">
                                        <h1 className="text-2xl font-medium italic">One Piece</h1>
                                        <p className="text-sm line-clamp-2 md:line-clamp-none">Gol D. Roger was known as the <q>Pirate King,</q> the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World…</p>
                                    </div>
                                    <div>
                                        <Button className='rounded-full font-medium whitespace-nowrap hover:bg-surface py-5 px-7 bg-[#292929]'>
                                            Watch Now
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
