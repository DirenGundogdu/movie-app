import React from 'react'
import Slider from "react-slick";
import axios from 'axios';
import  { useEffect, useState } from 'react';
import Movies from './Movies';

export default function Carousel() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 8,
        slidesToScroll: 8,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };

      const[list,setList] = useState()

      useEffect(() => {
        axios.get(`
        https://api.themoviedb.org/3/movie/popular?api_key=f000342215d4041012d38b11e9731a31&language=tr-TR&page=1`)
        .then(({data}) => setList(data.results))
        .catch((err) => console.log(err))
      }, []);
    return (
        <div className='container mx-auto p-1'>
       <Slider {...settings}>         
            {
            list && list.map((movie) => <Movies list={movie}/>)
            }
        </Slider>
        </div>
    )
}



// https://api.themoviedb.org/3/tv/popular?api_key=f000342215d4041012d38b11e9731a31&language=tr-TR&page=1  tv popular api
// -------------------------------------------------------------------------------------------------------------------

// https://api.themoviedb.org/3/tv/on_the_air?api_key=f000342215d4041012d38b11e9731a31&language=tr-TR&page=1 onTV Televizyonda yayınlanan API!!!!!!!!!

// https://api.themoviedb.org/3/movie/popular?api_key=f000342215d4041012d38b11e9731a31&language=tr-TR&page=1 for rent kiralık API!!!!!!!
//https://api.themoviedb.org/3/discover/movie?api_key=f000342215d4041012d38b11e9731a31&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate for rent kiralık API!!!!!!!

// https://api.themoviedb.org/3/movie/now_playing?api_key=f000342215d4041012d38b11e9731a31&language=tr-TR&page=1 in theaters sinemalarda API !!!!!!