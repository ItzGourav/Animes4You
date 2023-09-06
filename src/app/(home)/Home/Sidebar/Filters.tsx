"use client";
import { GENRE, MEDIATYPES, SEASONS, SORT, STATUSES, STUDIOS } from '@/utils/constants';
import { Select, SelectItem } from '@nextui-org/select'
import React from 'react'
import { RiSearchLine } from 'react-icons/ri'

export default function Filters() {
    return (
        <div className='bg-white/5 rounded-md'>
            <div className='p-2'>
                <div className='grid grid-cols-2 gap-2'>
                    <Select radius='sm' classNames={{ helperWrapper: "h-auto py-1" }} size='sm' label="Genre" multiple items={GENRE} selectionMode='multiple'>
                        {GENRE.map((i) => (
                            <SelectItem key={i.value} value={i.value}>
                                {i.label}
                            </SelectItem>
                        ))}
                    </Select>
                    <Select radius='sm' classNames={{ helperWrapper: "h-auto py-1" }} size='sm' label="Season" multiple items={SEASONS} selectionMode='multiple'>
                        {SEASONS.map((i) => (
                            <SelectItem key={i.value} value={i.value}>
                                {i.label}
                            </SelectItem>
                        ))}
                    </Select>
                    <Select radius='sm' classNames={{ helperWrapper: "h-auto py-1" }} size='sm' label="Studio" multiple items={STUDIOS} selectionMode='multiple'>
                        {STUDIOS.map((i) => (
                            <SelectItem key={i.value} value={i.value}>
                                {i.label}
                            </SelectItem>
                        ))}
                    </Select>

                    <Select radius='sm' size='sm' label="Status">
                        {STATUSES.map((i) => (
                            <SelectItem key={i.value} value={i.value}>
                                {i.label}
                            </SelectItem>
                        ))}
                    </Select>
                    <Select radius='sm' size='sm' label="Type">
                        {MEDIATYPES.map((i) => (
                            <SelectItem key={i.value} value={i.value}>
                                {i.label}
                            </SelectItem>
                        ))}
                    </Select>
                    <Select radius='sm' size='sm' label="Order by">
                        {SORT.map((i) => (
                            <SelectItem key={i.value} value={i.value}>
                                {i.label}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
            </div>
            <div className='flex justify-center rounded-b-md items-center gap-2 py-2 bg-primary'>
                Search
                <RiSearchLine />
            </div>
        </div>
    )
}
