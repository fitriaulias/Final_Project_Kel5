import React, { useState, useEffect } from "react"
import axios from 'axios'


export default Posts = (what) => {
    let url = 'https://newsapi.org/v2/everything?' + 'q="' + what + '"apiKey=e3cc0b43bdf04e9dbd8a27da31fbefc2' 
    const [APIData,  setAPIData] = useState([])
    useEffect(()=> {
        axios.get(url)
        .then((response) => {setAPIData(response.data)
        })
    }, [])
}