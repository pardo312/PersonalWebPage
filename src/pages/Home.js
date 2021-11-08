import React from 'react'
import './Pages.css';

function Home() {
    return (
        <div className="home">
            <div className="container" >
                <h1 className="banner">Daniel Pardo </h1>
                <h2 className="title center">
                    <br/> Bienvenidos a mi pagina web
                    <br/>
                    <br/>
                </h2>
                <div className="row" >
                    <div className="col-xl-6 col-sm-12">
                        <div className="content center" >
                            <img className="card-img center" style={{maxWidth:"30vw"}} src="https://i.imgur.com/zFWSXIt.jpg" alt="profileImg"/> 
                        </div>
                    </div>
                    <div className="col-xl-6 col-12">
                        <p className="paragraph">
                        Desde que tengo memoria me apasionan los videojuegos. 
                        Me encantaba la forma en que me apoyaban en los momentos más difíciles de mi vida,
                        para seguir luchando contra los obstáculos. A determinar. Por eso mi sueño es
                        convertirme en diseñador de videojuegos, para llevar a la gente el mismo apoyo
                        que mis héroes hicieron cuando yo estaba abajo.
                        </p>
                    </div>
                    <div className="col-xl-12">
                        <p className="title center" ><b><i ></i>Habilidades</b></p>
                    </div>
                    {/* Barras de habilidades */}
                    <div className="col-xl-12">
                        <p className="subtitle aling-Left" >Desarrollo de juegos/Coding</p>
                    </div>
                    <div className="col-xl-12 barFrame">
                        <div className="barValue" style={{width: "75%"}}>75%</div>
                    </div>

                    <div className="col-xl-12">
                        <br/><p className="subtitle aling-Left" >Desarrollo web</p>
                    </div>
                    <div className="col-xl-12 barFrame">
                        <div className="barValue" style={{width: "50%"}}>50%</div>
                    </div>

                    <div className="col-xl-12">
                        <br/><p className="subtitle aling-Left" >Modelado 3D</p>
                    </div>
                    <div className="col-xl-12 barFrame">
                        <div className="barValue" style={{width: "30%"}}>30%</div>
                    </div>

                    <div className="col-xl-12">
                        <br/><p className="subtitle aling-Left" >Produccion musical</p>
                    </div>
                    <div className="col-xl-12 barFrame">
                        <div className="barValue" style={{width: "10%"}}>10%</div>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Home
