import React from 'react'
import Slider from "react-slick";
import axios from 'axios';
import  { useEffect, useState } from 'react';
import Movies from './Movies';

export default function FreeTV() {
    const settings = { //slider settings
        dots: false,
        infinite: true,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 8, //show 8 sliders
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
          {
            breakpoint: 1024, //1024px show 5 sliders
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600, //600px show 3 sliders
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480, // 480px show 2 sliders
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };

      const[list,setList] = useState()

      useEffect(() => { //pulling api with axios
        axios.get(`
        https://api.themoviedb.org/3/tv/popular?api_key=f000342215d4041012d38b11e9731a31&language=tr-TR&page=1`)
        .then(({data}) => setList(data.results))
        .catch((err) => console.log(err))
      }, []);

      
    return (
        <div className='container mx-auto p-1'>
       <Slider {...settings}>         
            {
            list && list.map((movie) => <Movies list={movie}/>) // Pulling and returning the necessary data from the movies component
            }
        </Slider>
        </div>
    )
}