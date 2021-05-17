import { forwardRef } from 'react'
import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'

export const Thumbnail = forwardRef(({result},ref) => {    
    const BASE_URL = "https://image.tmdb.org/t/p/original"
    return (
        <div ref={ref} key={result.popularity} className="p-4 group cursor-pointer transition duration-100 transform sm:hover:scale-105 hover:z-10">
            <Image 
                src={
                    `${BASE_URL}${result.poster_path}` 
                }
                
                height={1000}
                width={1920}
             />
             <div className="p-4">
                 <p className="truncate max-w-md">{result.overview}</p>
                 <h2 className="mt-1 text-2xl text-white transition-all ease-in duration-100 group-hover:font-bold">{result.title || result.original_name}</h2>
                 <p className="flex transition duration-100 opacity-0 group-hover:opacity-95">
                     {result.media_type && `${result.media_type}`+" "}
                     {result.release_date && `${result.release_date}`+" "}
                     <ThumbUpIcon height={30} className="h-5 w-5 mx-2" /> {result.vote_count}
                 </p>
             </div>
        </div>
    )
})
