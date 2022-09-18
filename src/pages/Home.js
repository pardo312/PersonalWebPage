import React from 'react'
import './scss/Home.scss';

function Home() {
    return (
        <div className="home">
                <h1 className="title">
                    <img className="dragon-left" src={process.env.PUBLIC_URL + "/images/Home/Dragon1.png"} alt="Dragon" />
                    Daniel Pardo
                    <img className="dragon-right" src={process.env.PUBLIC_URL + "/images/Home/Dragon1.png"} alt="Dragon" /></h1>
                <h2 className="text center">
                    Jiufen
                </h2>
                <img className="mountains" src={process.env.PUBLIC_URL + "/images/Home/MountainsParallax.png"} alt="Mountains" />
        </div >
    )
}

export default Home
