"use client"
import { animeT } from '@/types/indes'
import { Button, Divider, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import React from 'react'
import { tv } from 'tailwind-variants'

export default function EpList({ anime }: { anime: animeT }) {
    return (
        <div className='my-7 py-1  bg-white/5 rounded-md'>
            <div className='font-semibold p-3 text-lg'>
                Watch {anime?.name}
            </div>
            <Divider />

            <div className='p-3 my-4'>
                <div className='flex gap-2 w-full'>
                    <Button size='lg' color='primary' className={epBtnV()} >
                        <div>First Ep</div>
                        <div className='font-semibold text-xl'>Episode 1</div>
                    </Button>
                    <Button size='lg' color='primary' className={epBtnV()} >
                        <div>Last Ep</div>
                        <div className='font-semibold text-xl'>Episode {anime.eps}</div>
                    </Button>
                </div>
            </div>

            <div>
                <Table isStriped aria-label="Example static collection table">
                    <TableHeader>
                        <TableColumn>Ep</TableColumn>
                        <TableColumn>Name</TableColumn>
                        <TableColumn>SUB/DUB</TableColumn>
                        <TableColumn>Release Date</TableColumn>
                    </TableHeader>
                    <TableBody className='overflow-auto'>
                        {
                            Array.from({ length: anime.eps }, (_, i) => i++).map((i) => {
                                return (
                                    <TableRow key={i}>
                                        <TableCell>{i}</TableCell>
                                        <TableCell>{anime.name}</TableCell>
                                        <TableCell>{anime?.subOrDub}</TableCell>
                                        <TableCell>14, June 2022</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>

            </div>
        </div >
    )
}



const epBtnV = tv({
    base: "w-full h-auto p-4 flex flex-col items-center"
})