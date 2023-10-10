import { Avatar, Divider, Input } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { BiSad } from 'react-icons/bi';
import { FiDelete } from 'react-icons/fi';
import { RiDeleteBack2Fill, RiDeleteBackLine, RiDeleteBin2Fill } from 'react-icons/ri';

export default function CommentList() {
    const [list, setList] = useState([] as { text: string, id: number }[])
    const [val, setVal] = useState("")


    function timeAgo(timestamp: number) {
        const currentTimestamp = new Date().getTime();
        const timeDifference = currentTimestamp - timestamp;

        // Define time intervals in milliseconds
        const minute = 60 * 1000;
        const hour = 60 * minute;
        const day = 24 * hour;

        if (timeDifference < minute) {
            return 'Just now';
        } else if (timeDifference < hour) {
            const minutesAgo = Math.floor(timeDifference / minute);
            return `${minutesAgo} min ago`;
        } else if (timeDifference < day) {
            const hoursAgo = Math.floor(timeDifference / hour);
            return `${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
        } else {
            // Handle cases for days, weeks, etc. if needed
            const daysAgo = Math.floor(timeDifference / day);
            return `${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
        }
    }
    return (
        <div className='my-6 pb-3 bg-white/5 rounded-md '>
            <div className='text-lg font-semibold p-3'>Comments</div>
            <Divider />
            <div className='p-3'>
                <div>
                    <Input variant='underlined' color='primary' classNames={{
                    }} value={val} onChange={(e) => setVal(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                setList((p) => [{ text: val, id: Date.now() }, ...(p || [])])
                                setVal("")
                            }
                        }}
                        placeholder='Leave a comment' />
                </div>
            </div>

            {
                list?.length === 0 && <div className='flex flex-col items-center my-5 text-white/80'><BiSad className="text-2xl" /> No Comments Yet</div>
            }

            {list.map((i, indx) => {
                return <div className='p-3 bg-white/[6%] mx-3 mb-3 rounded-md' key={indx}>
                    <div className='flex gap-2 items-start'>
                        <div>
                            <Avatar size='sm' />
                        </div>
                        <div>
                            <div className='text-sm'>
                                <div>{indx % 2 === 0 ? "Toji" : "Gojo"}</div>
                                <div className='text-xs text-white/50'>{timeAgo(i?.id)}</div>
                            </div>
                            <div className='mt-2'>{i.text}</div>
                        </div>
                        <div className='ml-auto'>
                            <div onClick={() => setList((p) => p.filter((j) => j.id !== i.id))}>
                                <RiDeleteBin2Fill className="hover:text-red-600 cursor-pointer transition-all" />
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}