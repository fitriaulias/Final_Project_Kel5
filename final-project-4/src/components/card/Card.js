import React from "react"
import "react-loading-skeleton/dist/skeleton.css";
import "./Styles.css"
import { Link } from "react-router-dom"

const Cards = ({movie}) => {

    return(
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img 
                    className="img" 
                    src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} 
                    alt="card_img"
                />
                <div className="overlay">
                    <div className="card-title">{movie?movie.original_title:""}</div>
                    <div className="rating">
                        {movie?movie.vote_average:""}
                    </div>
                    <div className="description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
   )
}

export default Cards