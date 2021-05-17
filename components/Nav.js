import React from 'react'
import requests from '../utils/requests'
import { useRouter } from 'next/router'
export const Nav = () => {
    const router = useRouter()
    return (
        <nav className="relative mb-7">
            <div className="flex overflow-x-scroll scrollbar-hide">
                {Object.entries(requests).map(([key,{title,url}]) => (
                    <h2 key={key} className="px-10 text-xl whitespace-nowrap cursor-pointer hover:text-white transition duration-100 transform hover:scale-125"
                        onClick={() => router.push(`/?genre=${key}`)}
                    >{title}</h2>
                ))}  
            </div>
        </nav>
    )
}
