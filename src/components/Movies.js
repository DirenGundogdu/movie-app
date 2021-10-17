import React from 'react'
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar"; 

export default function Movies({list}) {
  let perc = () => {
    return (list && list.vote_average * 10);
  };
 
    const props = {
        percent: perc(), // is require
        colorCircle: "#081c22",
        fontColor: "#fff",
        fontSize: "1.6rem",
        fontWeight: 400,
        size: 40,
        stroke: 5,
        strokeBottom: 10,
        speed: 5000,
        cut: 0,
        rotation: -90,
        fill: "#081c22",
        unit: '%',
        textPosition: "0.35em",
        number: true,
        linearGradient: ["#1ed5a9 ","#1ed5a9"]
      };
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w200/${list && list.poster_path}`} alt=""
            className='w-36 h-56 rounded-lg' />
            <div className='absolute top-[198px] ml-2'>
            <CircularProgressBar {...props} ></CircularProgressBar>
            </div>
            <div className='mt-4'>
            <h2 className='font-bold w-32'>{list && list.original_title}</h2>
            <p className='text-gray-700 text-opacity-50'>{list && list.release_date}</p>
            </div>

          </div>
    )
}
