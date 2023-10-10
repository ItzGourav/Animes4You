"use client"
import AnimeCard from '@/app/components/AnimeCard';
import { ANIMES } from '@/utils/constants';
import { Tab, Tabs } from '@nextui-org/tabs';
import React, { useState } from 'react'

export default function Recommendation() {
    const [filter, setFilter] = useState<any>("")
    const TABS = [
        { label: "Ecchi", value: "ecchi" },
        { label: "Parody", value: "parody" },
        { label: "Reincarnation", value: "reincarnation" },
        { label: "Shonen", value: "shonen" },
        { label: "SLice of life", value: "slice-of-life" }
    ]

    return (
        <div className="flex flex-wrap gap-4 py-10">
            <div className='w-full rounded-md bg-white/5'>
                <Tabs
                    classNames={{
                        base: "w-full",
                        tabList: "w-full"
                    }}
                    variant='underlined'
                    color='primary'
                    aria-label="Options"
                    selectedKey={filter}
                    onSelectionChange={setFilter}
                >
                    {TABS.map((i, indx) => {
                        return <Tab key={i.value} title={i.label} />
                    })}
                </Tabs>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
                {ANIMES.map((i, indx) => {
                    return <AnimeCard key={indx} anime={i} pos={indx + 1} />
                })}
            </div>
        </div>
    );
}
