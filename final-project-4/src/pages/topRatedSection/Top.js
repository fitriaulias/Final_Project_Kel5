import React, {useEffect, useState} from "react"
import "./Styles.css"
import { useParams } from "react-router-dom"
import Cards from "../../components/card/Card"

const Top = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "top_rated"}?api_key=0c873b2ec7784a2c491aa22480b584df&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie-list">
            <h2 className="list-title">{(type ? type : "Top Rated Movies").toUpperCase()}</h2>
            <div className="list-card">
                {
                    movieList.map(movie => (
                        <Cards key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default Top;