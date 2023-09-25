"use client";
import { GENRE, MEDIATYPES, SEASONS, SORT, STATUSES, STUDIOS } from '@/utils/constants';
import { Select, SelectItem } from '@nextui-org/select'
import React, { useEffect, useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { useRouter } from 'next/navigation';
import { filterLinkFormatter } from '@/utils/helpers';
import { useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Filters() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const [genre, setGenre] = useState<string[]>(searchParams?.get('genre')?.split(",") || [])
    const [season, setSeason] = useState<string[]>(searchParams?.get('season')?.split(",") || [])
    const [studio, setStudio] = useState<string[]>(searchParams?.get('studio')?.split(",") || [])
    const [status, setStatus] = useState(searchParams?.get('status')?.split(",") || [])
    const [type, setType] = useState(searchParams?.get('type')?.split(",") || [])
    const [order, setOrder] = useState(searchParams?.get('order')?.split(",") || [])

    return (
        <div className='bg-white/5 rounded-md'>

            <div className='p-2'>
                <div className={`grid grid-cols-2 md:grid-cols-4 ${pathname.includes("/s") ? "xl:grid-cols-4" : "xl:grid-cols-2"} gap-2`}>
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

            <Link href={filterLinkFormatter({ genre, order, season, status, type, studio })}>
                <div className='flex justify-center rounded-b-md items-center gap-2 cursor-pointer py-2 bg-primary'>
                    Search
                    <RiSearchLine />
                </div>
            </Link>

        </div >
    )
}
