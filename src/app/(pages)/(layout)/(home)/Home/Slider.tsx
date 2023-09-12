"use client"
import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Button } from "@nextui-org/react"

export default function Slider() {
    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,

    }, [
        (slider) => {
            let timeout: ReturnType<typeof setTimeout>
            let mouseOver = false
            function clearNextTimeout() {
                clearTimeout(timeout)
            }
            function nextTimeout() {
                clearTimeout(timeout)
                if (mouseOver) return
                timeout = setTimeout(() => {
                    slider.next()
                }, 2000)
            }
            slider.on("created", () => {
                slider.container.addEventListener("mouseover", () => {
                    mouseOver = true
                    clearNextTimeout()
                })
                slider.container.addEventListener("mouseout", () => {
                    mouseOver = false
                    nextTimeout()
                })
                nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
        },
    ]
    )
    return (
        <div>

            <div ref={ref} className="keen-slider">
                {
                    Array.from({ length: 6 }, (_, i) => i++).map((j) => {
                        return (
                            <div key={j} className="keen-slider__slide relative min-w-full rounded-md flex justify-between items-center">
                                <div className="absolute top-0 left-0 w-full h-full blur-[6px] z-[-1] bg-[url('/images/op-banner.jpg')] bg-center bg-no-repeat bg-cover"></div>
                                <div className="flex justify-between py-5 px-2 md:p-5 items-center flex-wrap bg-black/70 md:flex-nowrap gap-2">
                                    <div className="max-w-[85%]">
                                        <h1 className="text-2xl font-medium italic">One Piece</h1>
                                        <p className="text-sm line-clamp-2 md:line-clamp-none">Gol D. Roger was known as the <q>Pirate King,</q> the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World…</p>
                                    </div>
                                    <div>
                                        <Button size="lg" className='rounded-full whitespace-nowrap hover:shadow-xl hover:shadow-primary/40 hover:bg-primary/90 bg-primary/60'>
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
