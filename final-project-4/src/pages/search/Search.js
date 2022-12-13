import React, { useState, useEffect } from "react";
import Cards from "../../components/card/Card";

export default function Search( {search} ) {
    const [ searchData, setSearchData ] = useState({})

    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=0c873b2ec7784a2c491aa22480b584df&query=${search}&language=en-US`)
      .then(res => res.json())
      .then(data => setSearchData(data))
    }, [search])

    console.log(search)

    return(
        <>
            <div className="movie-list" style={{paddingTop: '80px'}}>
                <h2 className="list-title">Your search results <b>{search}</b> <p>{searchData.total_results}</p></h2>
                <div className="list-card">
                    {
                        searchData.results?.map(movie => (
                            <Cards movie={movie} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}