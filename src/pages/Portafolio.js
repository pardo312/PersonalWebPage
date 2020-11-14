import React from 'react';
import Slider from '../components/NetflixSlider'
import './Pages.css';

function Portafolio() {
    const Games = [
        {
          id: 1,
          image: '/images/LaRecostruccionBanner.jpg',
          title: 'La Reconstruccion',
          description: 'Desde falsos positivos, hasta asesinato de líderes sociales, reconstruyamos la historia tergiversada, hallemos la verdad, para que puedan descansar en paz. ',
          link: "https://angegrohl.itch.io/la-reconstruccion",
          video:'/images/LaReconstruccion.mp4'
        },
        {
          id: 2,
          image: '/images/BoomAwayBanner.jpeg',
          imageBg: '/images/BoomAwayContent.png',
          title: 'BoomAway',
          description: 'Videojuego de puzzle en el cual el personaje tenga control de diferentes herramientas explosivas para concatenar acciones que lo lleven a alcanzar el final de los niveles. ',
          link: 'https://boomawayinc.itch.io/boomaway',
          video:''
        },
        {
          id: 3,
          image: '/images/SummerGameBanner.png',
          imageBg: '/images/SummerGameContent.png',
          title: 'SummerGame',
          description: 'Juego de derrapes y velocidad.',
          link:"https://jiufen.itch.io/summergame",
          video:''
        },
        {
          id: 4,
          image: '/images/LasPeripeciasEnLaCatedral.png',
          imageBg: '/images/LasPeripeciasEnLaCatedralBG.png',
          title: 'Las Peripecias En La Catedral',
          description: 'Manuel Tolsá tiene que recolectar escombros de la catedral durante el sismo de 2017 y recuperar los pedazos de la Esperanza para poder hacer la restauración de esta!',
          link:"https://soequelle.itch.io/las-peripecias-en-la-catedral",
          video:''
        },
        {
          id: 5,
          image: '/images/CatequilBanner.jpg',
          imageBg: '/images/CatequilContent.jpg',
          title: 'La Leyenda de Catequil',
          description: 'First person shooter, que cuenta la historia del dios inca ubicado al sur de colombia, Catequil. ',
          link: "https://jiufen.itch.io/la-leyenda-de-catequil",
          video:''
        },
        {
          id: 6,
          image: '/images/PingPong.png',
          imageBg: '/images/PingPongContent.png',
          title: 'Ping Pong',
          description: 'Juego de ping pong desarrollado en html y javascrpit',
          link: "https://pingpongjiufen.netlify.app/",
          video:''
        }
      ];
      const Blender = [
        {
          id: 1,
          image: '/images/SeashackModelBanner.png',
          imageBg: '',
          title: 'Choza en el mar',
          description: 'Choza en el mar utilizando tecnicas de escultura basica para las rocas, uso de curvas para las cuerdas y aplicacion de modelado 3d para los demas objetos y animales',
          link: '',
          video:'/images/SeaShackModel.mp4'
        },
        {
          id: 2,
          image: '/images/Pozo.jpeg',
          imageBg: '/images/Pozo.jpeg',
          title: 'Pozo',
          description: 'Pozo utilizando tecnicas de modelado 3d y conocimiento de herramientas de blender',
          link: '',
          video:''
        }
      ];
      
    return (
        <div className="portafolio">
            <div className="app">
            <p className="banner" style={{marginTop:"38px"}}>Portaforlio</p>
                <p className="title">Juegos</p>
                <Slider>
                {Games.map(Game => (
                    <Slider.Item movie={Game} key={Game.id}>item1</Slider.Item>
                ))}
                </Slider>
                <p className="title">Modelado 3D</p>
                <Slider>
                {Blender.map(BlenderItem => (
                    <Slider.Item movie={BlenderItem} key={BlenderItem.id}>item1</Slider.Item>
                ))}
                </Slider>
                
               </div>
        </div>
    )
}

export default Portafolio
