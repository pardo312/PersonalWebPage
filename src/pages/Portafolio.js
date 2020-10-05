import React, { Component } from 'react';
import Slider from '../components/NetflixSlider'

function Portafolio() {
    const movies = [
        {
          id: 1,
          image: '/images/BoomAwayBanner.jpeg',
          imageBg: '/images/BoomAwayContent.png',
          title: 'BoomAway'
        },
        {
          id: 2,
          image: '/images/SummerGameBanner.png',
          imageBg: '/images/SummerGameContent.png',
          title: 'SummerGame'
        },
        {
          id: 3,
          image: '/images/slide3.jpg',
          imageBg: '/images/slide3b.webp',
          title: 'The rain',
        },
        {
          id: 4,
          image: '/images/slide4.jpg',
          imageBg: '/images/slide4b.webp',
          title: 'Sex education'
        }
      ];
      
    return (
        <div className="portafolio">
            <div className="app">
                <Slider>
                {movies.map(movie => (
                    <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
                ))}
                </Slider>
               </div>
        </div>
    )
}

export default Portafolio
