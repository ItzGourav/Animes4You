"use client"
import { animeT } from '@/types/indes'
import { Button, Divider, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { tv } from 'tailwind-variants'

export default function EpList({ anime }: { anime: animeT }) {
    const [allEps, setAllEps] = useState(Array.from({ length: anime?.eps }, (_, i) => i++))

    const [page, setPage] = React.useState(1);
    const rowsPerPage = 30;

    const pages = Math.ceil(allEps.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return allEps.slice(start, end);
    }, [page, allEps]);

    return (
        <div id='ep-list' className='my-7 py-1 bg-white/5 rounded-md'>
            <div className='font-semibold p-3 text-lg'>
                Watch {anime?.name}
            </div>
            <Divider />

            <div className='p-3 my-4'>
                <div className='flex gap-2 w-full'>
                    <Button as={Link} href={`/watch/${anime.slug}`} size='lg' color='primary' className={epBtnV()} >
                        <div>First Ep</div>
                        <div className='font-semibold text-xl'>Episode 1</div>
                    </Button>
                    <Button as={Link} href={`/watch/${anime.slug}`} size='lg' color='primary' className={epBtnV()} >
                        <div>Last Ep</div>
                        <div className='font-semibold text-xl'>Episode {anime?.eps}</div>
                    </Button>
                </div>
            </div>

            <div>
                <Table
                    isHeaderSticky
                    bottomContent={
                        pages ? <div className="flex w-full justify-center">
                            <Pagination
                                isCompact
                                showControls
                                showShadow
                                color="secondary"
                                page={page}
                                total={pages}
                                onChange={(page) => setPage(page)}
                            />
                        </div>
                            :
                            <></>
                    }
                    classNames={{
                        base: "max-h-[600px] relative bg-transparent",
                    }} aria-label="ep-list">
                    <TableHeader className='text-white/90'>
                        <TableColumn>EP</TableColumn>
                        <TableColumn>NAME</TableColumn>
                        <TableColumn>SUB/DUB</TableColumn>
                        <TableColumn>RELEASE DATE</TableColumn>
                    </TableHeader>
                    <TableBody >
                        {
                            items.map((i, indx) => {
                                return (
                                    <TableRow as={Link} className={` ${(i + 1) % 2 === 0 ? "bg-white/5 hover:bg-primary" : "hover:bg-primary"} hover:text-white/90 text-white/60 transition-all cursor-pointer`} key={i}>
                                        <TableCell className='py-4'>
                                            <Link className='underline decoration-primary decoration-2 text-lg' href={`/watch/${anime.slug}`}>
                                                {i + 1}
                                            </Link>
                                        </TableCell>
                                        <TableCell>{anime?.name}</TableCell>
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