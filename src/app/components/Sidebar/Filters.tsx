"use client";
import { GENRE, MEDIATYPES, SEASONS, SORT, STATUSES, STUDIOS } from '@/utils/constants';
import { Select, SelectItem } from '@nextui-org/select'
import React, { useEffect, useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { useRouter } from 'next/navigation';

export default function Filters({ isSearch = false }: { isSearch?: boolean }) {
    const router = useRouter()
    const [genre, setGenre] = useState<any>(new Set([""]))
    const [season, setSeason] = useState(new Set([""]))
    const [studio, setStudio] = useState(new Set([""]))
    const [status, setStatus] = useState("")
    const [type, setType] = useState("")
    const [order, setOrder] = useState("")


    useEffect(() => {
        console.log("Order: ", order)
        console.log("genre: ", genre)
    }, [order, genre])

    return (
        <div className='bg-white/5 rounded-md'>
            <div className='p-2'>
                <div className={`grid grid-cols-2 md:grid-cols-4 ${isSearch ? "xl:grid-cols-4" : "xl:grid-cols-2"} gap-2`}>
                    <Select selectedKeys={genre} onSelectionChange={setGenre} radius='sm' classNames={{ helperWrapper: "h-auto py-1" }} size='sm' label="Genre" multiple items={GENRE} selectionMode='multiple'>
                        {GENRE.map((i) => (
                            <SelectItem key={i.value} value={i.value}>
                                {i.label}
                            </SelectItem>
                        ))}
                    </Select>
                    <Select selectedKeys={season} radius='sm' classNames={{ helperWrapper: "h-auto py-1" }} size='sm' label="Season" multiple items={SEASONS} selectionMode='multiple'>
                        {SEASONS.map((i) => (
                            <SelectItem key={i.value} value={i.value}>
                                {i.label}
                            </SelectItem>
                        ))}
                    </Select>
                    <Select selectedKeys={studio} radius='sm' classNames={{ helperWrapper: "h-auto py-1" }} size='sm' label="Studio" multiple items={STUDIOS} selectionMode='multiple'>
                        {STUDIOS.map((i) => (
                            <SelectItem key={i.value} value={i.value}>
                                {i.label}
                            </SelectItem>
                        ))}
                    </Select>

                    <Select selectedKeys={status} value={status} onSelectionChange={(e: any) => setStatus(e)} radius='sm' size='sm' label="Status">
                        {STATUSES.map((i) => (
                            <SelectItem key={i.value} value={i.value}>
                                {i.label}
                            </SelectItem>
                        ))}
                    </Select>
                    <Select selectedKeys={type} value={type} onSelectionChange={(e: any) => setType(e)} radius='sm' size='sm' label="Type">
                        {MEDIATYPES.map((i) => (
                            <SelectItem key={i.value} value={i.value}>
                                {i.label}
                            </SelectItem>
                        ))}
                    </Select>
                    <Select selectedKeys={order} value={order} onSelectionChange={(e: any) => setOrder(e)} radius='sm' size='sm' label="Order by">
                        {SORT.map((i) => (
                            <SelectItem key={i.value} value={i.value}>
                                {i.label}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
            </div>
            <div onClick={() => {
                if (!isSearch) {
                    router.push("/s")
                }
            }} className='flex justify-center rounded-b-md items-center gap-2 cursor-pointer py-2 bg-primary'>
                Search
                <RiSearchLine />
            </div>
        </div >
    )
}
