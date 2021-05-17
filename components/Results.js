import React from 'react'
import { Thumbnail } from './Thumbnail'

export const Results = ({results}) => {
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex">
            {results?.map((result,index) => (
                <Thumbnail key={result.id} result={result}/>
            ))}    
        </div>
    )
}
