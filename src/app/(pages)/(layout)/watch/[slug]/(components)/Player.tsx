import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { BsFillCaretLeftFill, BsFillCaretRightFill, BsViewList } from 'react-icons/bs'

export default function Player({ anime }: { anime: string }) {
    return (
        <div className='w-full my-5'>
            <iframe className='aspect-video w-full'
                src={`${anime !== "kimetsu-no-yaiba" ? "https://rapid-cloud.co/embed-6-v2/bQxd0Wg4NGEh?z=&autoPlay=1&oa=0" : "https://rapid-cloud.co/embed-6-v2/kYzuSGcc9KIE?z=&autoPlay=1&oa=0"}`} //op
            />
            <div className='flex pt-3 gap-4'>
                <Button variant='flat' radius='sm' size='lg' className='w-full text-white/70'><BsFillCaretLeftFill />Prev</Button>
                <Button as={Link} href={`/${anime}#ep-list`} variant='flat' color='primary' radius='sm' size='lg' className='w-full'><BsViewList />All Episodes </Button>
                <Button variant='flat' radius='sm' size='lg' className='w-full text-white/70'>Next<BsFillCaretRightFill /></Button>
            </div>
        </div>
    )
}
