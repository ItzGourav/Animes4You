"use client";
import { GENRE, MEDIATYPES, SEASONS, SORT, STATUSES, STUDIOS } from '@/utils/constants';
import { Select, SelectItem } from '@nextui-org/select'
import React, { useEffect, useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { useRouter } from 'next/navigation';
import { filterLinkFormatter } from '@/utils/helpers';

export default function Filters({ isSearch = false }: { isSearch?: boolean }) {
    const router = useRouter()
    const [genre, setGenre] = useState<string[]>([])
    const [season, setSeason] = useState<string[]>([])
    const [studio, setStudio] = useState<string[]>([])
    const [status, setStatus] = useState([])
    const [type, setType] = useState([])
    const [order, setOrder] = useState([])

    function onSearch() {
        if (!isSearch) {
            router.push(filterLinkFormatter({ genre, order, season, status, type, studio }));
            // router.push(`/s`)
        }
    }

    return (
        <div className='bg-white/5 rounded-md'>

            <div className='p-2'>
                <div className={`grid grid-cols-2 md:grid-cols-4 ${isSearch ? "xl:grid-cols-4" : "xl:grid-cols-2"} gap-2`}>
                    <Select selectedKeys={genre} onSelectionChange={(e: any) => setGenre(Array.from(e))} radius='sm' classNames={{ helperWrapper: "h-auto py-1" }} size='sm' label="Genre" multiple items={GENRE} selectionMode='multiple'>
                        {GENRE.map((i) => (
                            <SelectItem key={i.value} value={i.value}>
                                {i.label}
                            </SelectItem>
                        ))}
                    </Select>
                    <Select selectedKeys={season} onSelectionChange={(e: any) => setSeason(Array.from(e))} radius='sm' classNames={{ helperWrapper: "h-auto py-1" }} size='sm' label="Season" multiple items={SEASONS} selectionMode='multiple'>
                        {SEASONS.map((i) => (
                            <SelectItem key={i.value} value={i.value}>
                                {i.label}
                            </SelectItem>
                        ))}
                    </Select>

                    <Select selectedKeys={studio} onSelectionChange={(e: any) => setStudio(Array.from(e))} radius='sm' classNames={{ helperWrapper: "h-auto py-1" }} size='sm' label="Studio" multiple items={STUDIOS} selectionMode='multiple'>
                        {STUDIOS.map((i) => (
                            <SelectItem key={i.value} value={i.value}>
                                {i.label}
                            </SelectItem>
                        ))}
                    </Select>

                    <Select selectedKeys={status} items={STATUSES} onSelectionChange={(e: any) => setStatus(Array.from(e))} radius='sm' size='sm' label="Status">
                        {STATUSES.map((i) => (
                            <SelectItem key={i.value} value={i.value}>
                                {i.label}
                            </SelectItem>
                        ))}
                    </Select>

                    <Select selectedKeys={type} items={MEDIATYPES} onSelectionChange={(e: any) => setType(Array.from(e))} radius='sm' size='sm' label="Type">
                        {MEDIATYPES.map((i) => (
                            <SelectItem key={i.value} value={i.value}>
                                {i.label}
                            </SelectItem>
                        ))}
                    </Select>
                    <Select selectedKeys={order} items={SORT} onSelectionChange={(e: any) => setOrder(Array.from(e))} radius='sm' size='sm' label="Order by">
                        {SORT.map((i) => (
                            <SelectItem key={i.value} value={i.value}>
                                {i.label}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
            </div>
            <div onClick={onSearch} className='flex justify-center rounded-b-md items-center gap-2 cursor-pointer py-2 bg-primary'>
                Search
                <RiSearchLine />
            </div>
        </div >
    )
}
