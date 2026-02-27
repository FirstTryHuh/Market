"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export default function FindingBar(props:{home:boolean}){
    const [Find,SetFind]=useState("")
    if(props.home){
        return ;
    }else{
    return (
        <div className='flex items-center border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all h-10 w-90 overflow-hidden'>
            <input onChange={((event)=>(SetFind(event.target.value)))} type="text" placeholder='What are you looking for?' className='outline-none text-sm flex-1 bg-transparent text-gray-700 placeholder-gray-400 px-4'/>
            <Link href={"/search/"+Find}><button className='text-gray-900 flex items-center justify-center h-full w-12 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 24 24" width="18" focusable="false" aria-hidden="true" style={{pointerEvents: 'none'}} ><path d="M11 2a9 9 0 105.641 16.01.966.966 0 00.152.197l3.5 3.5a1 1 0 101.414-1.414l-3.5-3.5a1 1 0 00-.197-.153A8.96 8.96 0 0020 11a9 9 0 00-9-9Zm0 2a7 7 0 110 14 7 7 0 010-14Z"></path></svg>
            </button></Link>
        </div>
    )}
}
