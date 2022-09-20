import React from 'react';
import Slider from '../components/NetflixSlider'
import './scss/Global.scss';
import dataPortfolioBlender from '../data/PortfolioBlender.json';
import dataPortfolioGames1 from '../data/PortfolioGames1.json';
import dataPortfolioGames2 from '../data/PortfolioGames2.json';

function Portafolio() {
  return (
    <div className="portafolio">
      <div className="app">
        <p className="title">The journey</p>
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
          {dataPortfolioBlender.Blender.map(BlenderItem => (
            <Slider.Item movie={BlenderItem} key={BlenderItem.id}>item1</Slider.Item>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Portafolio
