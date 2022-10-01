import React from 'react'
import './scss/References/References.scss';

function References() {
    return (
        <div >
            <div id="carouselExampleControls" class="carousel slide sliderCarousel" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active ">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#777" data-darkreader-inline-fill="" ></rect>
                            <text x="50%" y="50%" fill="#555" dy=".3em" data-darkreader-inline-fill="" >Comentario numero bla bla</text>
                        </svg>
                    </div>
                    <div class="carousel-item">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#777" data-darkreader-inline-fill="" ></rect>
                            <text x="50%" y="50%" fill="#555" dy=".3em" data-darkreader-inline-fill="" >Comentario numero bla bla</text>
                        </svg>
                    </div>
                    <div class="carousel-item">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#777" data-darkreader-inline-fill="" ></rect>
                            <text x="50%" y="50%" fill="#555" dy=".3em" data-darkreader-inline-fill="" >Comentario numero bla bla</text>
                        </svg>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div >
    )
}

export default References