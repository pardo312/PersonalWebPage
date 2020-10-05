import React from 'react';
import Slider from '../components/NetflixSlider'

function Portafolio() {
    const movies = [
        {
          id: 1,
          image: '/images/BoomAwayBanner.jpeg',
          imageBg: '/images/BoomAwayContent.png',
          title: 'BoomAway',
          description: 'Videojuego de puzzle en el cual el personaje tenga control de diferentes herramientas explosivas para concatenar acciones que lo lleven a alcanzar el final de los niveles. ',
          link: 'https://boomawayinc.itch.io/boomaway'
        },
        {
          id: 2,
          image: '/images/SummerGameBanner.png',
          imageBg: '/images/SummerGameContent.png',
          title: 'SummerGame',
          description: 'Juego de derrapes y velocidad.',
          link:"https://jiufen.itch.io/summergame"
        },
        {
          id: 3,
          image: '/images/CatequilBanner.jpg',
          imageBg: '/images/CatequilContent.jpg',
          title: 'La Leyenda de Catequil',
          description: 'First person shooter, que cuenta la historia del dios inca ubicado al sur de colombia, Catequil. ',
          link: "https://jiufen.itch.io/la-leyenda-de-catequil"
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
