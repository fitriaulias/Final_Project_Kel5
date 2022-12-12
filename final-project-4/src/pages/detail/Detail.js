import React, {useEffect, useState} from "react"
import "./Style.css"
import { useParams } from "react-router-dom"

const Detail = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

    return (
        <div className="movie">
            <div className="intduce">
                <img 
                    className="backdrop" 
                    alt='backdrop'
                    src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} 
                />
            </div>
            <div className="detail">
                <div className="detailRight">
                    <div className="detailRightTop">
                        <div className="title">
                            {currentMovieDetail ? currentMovieDetail.original_title : ""}
                        </div>
                        <div className="detail-rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                        </div>  
                        <div className="duration">
                            {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
                        </div>
                        <div className="release">
                            {currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}
                        </div>
                        <div className="genre">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie-genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    <div className="link">
                        {
                            currentMovieDetail && currentMovieDetail.imdb_id && 
                            <a 
                                href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} 
                                target="blank" style={{textDecoration: "none"}}>
                                    <p><span className="movie-button">
                                            Movie Trailer
                                            <i className="newTab fas fa-external-link-alt"></i>
                                        </span>
                                    </p>
                            </a>
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Detail