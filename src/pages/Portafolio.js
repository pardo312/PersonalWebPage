import React from 'react';
import Slider from '../components/NetflixSlider'
import './scss/Global.scss';
import './scss/Portfolio/Portfolio.scss';
import dataPortfolioBlender from '../data/PortfolioBlender.json';
import dataPortfolioGames1 from '../data/PortfolioGames1.json';
import dataPortfolioGames2 from '../data/PortfolioGames2.json';
import dataPortfolioGames3 from '../data/PortfolioGames3.json';
import dataPortfolioWork1 from '../data/PortfolioWork1.json';

function Portafolio() {
  return (
    <div id="portfolio" className="portafolio">
      <div >
        <p className="title">The journey</p>
        <p className="subtitle">My progamming projects</p>
        <Slider>
          {dataPortfolioGames1.Games.map(Game => (
            <Slider.Item movie={Game} key={Game.id}>item1</Slider.Item>
          ))}
        </Slider>
        <Slider>
          {dataPortfolioGames2.Games.map(Game => (
            <Slider.Item movie={Game} key={Game.id}>item1</Slider.Item>
          ))}
        </Slider>
        <Slider>
          {dataPortfolioGames3.Games.map(Game => (
            <Slider.Item movie={Game} key={Game.id}>item1</Slider.Item>
          ))}
        </Slider>
        <p className="subtitle">Programming for others</p>
        <Slider>
          {dataPortfolioWork1.Games.map(Game => (
            <Slider.Item movie={Game} key={Game.id}>item1</Slider.Item>
          ))}
        </Slider>
        <p className="subtitle">3D Modeling</p>
        <Slider>
          {dataPortfolioBlender.Blender.map(BlenderItem => (
            <Slider.Item movie={BlenderItem} key={BlenderItem.id}>item1</Slider.Item>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Portafolio
