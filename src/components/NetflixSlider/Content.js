import React from 'react';
import IconCross from './../Icons/IconCross';
import './Content.scss';

const Content = ({ movie, onClose }) => (
  <div id="portfolioContent"className="content">
    <div className="content__background">
      <div className="content__background__shadow" />
      <div
        className="content__background__image"
        style={{ 'background-image': `url(${process.env.PUBLIC_URL+movie.imageBg})` }}
      >
          <video className="content__background__video" src={process.env.PUBLIC_URL+ movie.video}  width="100%" height="100%" loop="true" autoplay="autoplay">
          Your browser does not support the video tag.
          </video>
      </div>
      
    </div>
    <div className="content__area">
      <div className="content__area__container">
        <div className="content__title">{movie.title}</div>
        <div className="content__description">{movie.description} <br/><a href={movie.link} target="_blank" rel="noopener noreferrer">{movie.link}</a></div>
      </div>
      <button className="content__close" onClick={onClose}>
        <IconCross />
      </button>
    </div>
  </div>
);

export default Content;
