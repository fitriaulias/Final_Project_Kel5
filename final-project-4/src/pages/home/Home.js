import React, { useEffect, useState } from "react"
import "./Styles.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import Popular from "../popularSection/Popular";
import Top from "../topRatedSection/Top";

const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=0c873b2ec7784a2c491aa22480b584df&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} key={movie.id} >
                                <div className="posterImage">
                                    <img 
                                        src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} 
                                        alt='posterImage'
                                    />
                                </div>
                                <div className="poster-overlay">
                                    <div className="poster-title">{movie ? movie.original_title: ""}</div>
                                    <div className="poster-release">
                                        {movie ? movie.release_date : ""}
                                        <br/>
                                        <span className="poster-rating">
                                            {movie ? movie.vote_average :""}
                                        </span>
                                    </div>
                                    <div className="poster-desc">{movie ? movie.overview.slice(0,190)+"..." : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <Popular/>
                <Top/>
            </div>
        </>
    )
}

export default Home