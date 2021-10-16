import React from 'react'

export default function Movies({list}) {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w200/${list && list.poster_path}`} alt=""
            className='w-36 h-56  rounded' />
            <h2 className='font-bold w-34'>{list && list.original_title}</h2>
            <p className='text-gray-700 text-opacity-50'>{list && list.release_date}</p>

          </div>
    )
}
