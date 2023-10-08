import { Divider, Input } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

export default function CommentList() {
    const [list, setList] = useState([] as { text: string, id: number }[])
    const [val, setVal] = useState("")

    useEffect(() => {
        console.log(list, "list")
    }, [list])
    return (
        <div className='my-6 bg-white/5 rounded-md '>
            <div className='text-lg font-semibold p-3'>Comments</div>
            <Divider />
            <div className='p-3'>
                <div>
                    <Input variant='underlined' color='primary' classNames={{
                    }} value={val} onChange={(e) => setVal(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                setList((p) => [...(p || []), { text: val, id: Date.now() }])
                            }
                        }}
                        placeholder='Leave a comment' />
                </div>
            </div>

            {list.map((i, indx) => {
                return <div key={indx}>{i.text}</div>
            })}
        </div>
    )
}