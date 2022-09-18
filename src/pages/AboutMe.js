import React from 'react'
import './scss/Pages.scss';

function AboutMe() {
    return (
        <div className="aboutMe ">
            <div className="container" >
                <h1 className="banner">The story </h1>
                <h2 className="title center">
                    <br /> Bienvenidos a mi pagina web
                    <br />
                    <br />
                </h2>
                <div className="row" >
                    <div className="col-xl-6 col-sm-12">
                        <div className="content center" >
                            <img className="card-img center" style={{ maxWidth: "30vw" }} src="https://i.imgur.com/zFWSXIt.jpg" alt="profileImg" />
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
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
