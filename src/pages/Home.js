import React from 'react'
import './scss/Home/Home.scss';

function Home() {
    return (
        <div id="home" className="home">
            <h1 className="title">
                <img className="dragon-left" src={process.env.PUBLIC_URL + "/images/Home/Dragon1.png"} alt="Dragon" />
                Daniel Pardo
                <img className="dragon-right" src={process.env.PUBLIC_URL + "/images/Home/Dragon1.png"} alt="Dragon" /></h1>
            <h2 className="text center">
                Jiufen
            </h2>
            <div className='lowerImagesParent'>
                <img className="gamesImages1" src={process.env.PUBLIC_URL + "/images/Home/LR.png"} alt="LaReconstruccion" />
                <img className="gamesImages2" src={process.env.PUBLIC_URL + "/images/Home/BA.png"} alt="BoomAway" />
                <img className="gamesImages3" src={process.env.PUBLIC_URL + "/images/Home/JG.png"} alt="JiufenGames" />
                <img className="gamesImages4" src={process.env.PUBLIC_URL + "/images/Home/LLDC.png"} alt="LaLeyendaDeCatequil" />
                <img className="gamesImages5" src={process.env.PUBLIC_URL + "/images/Home/SG.png"} alt="SummerGame" />
            </div>
            <div className='separatorMountains' >
                <img className="mountains" src={process.env.PUBLIC_URL + "/images/Home/MountainsParallax.png"} alt="Mountains" />
            </div>
        </div >
    )
}

export default Home
