"use client"
import Filters from '@/app/components/Sidebar/Filters'
import React from 'react'

export default function page({ searchParams }: any) {
    console.log(searchParams, "searchParams")
    return (
        <div>
            <Filters isSearch={true} />
        </div>
    )
}
