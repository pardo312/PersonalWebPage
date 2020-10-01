import React from 'react'
import './Pages.css';

function Home() {
    return (
        <div className="home">
            <div className="container" >
                <h1 className="title">Daniel Pardo</h1>
                <h2 className="subTitle">
                    <br/> Bienvenidos a mi pagina web
                    <br/>
                    <br/>
                </h2>
                <div className="row" >
                    <div class="col-xl-6 paragraph">
                        <div class="content" style={{width:"90%"}}>
                            <img class="card-img" src="https://i.imgur.com/zFWSXIt.jpg" alt="profileImg"/> 
                        </div>
                    </div>
                    <div class="col-xl-6 paragraph">
                        <p>
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

export default Home
