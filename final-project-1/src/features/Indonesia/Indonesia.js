import { useDispatch, useSelector } from 'react-redux';
import { fetchIndonesia } from './indonesiaSlice';
import { useEffect } from 'react';


const IndonesiaNews = () => {
    const allNewsIndonesia = useSelector((state) => state.indonesia.indonesiaState);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchIndonesia())
    })
    
    return (
        <div className='container'>
            <h1>Post</h1>
           
            {
                    allNewsIndonesia.map((news, index) => (
                    <div key={index}>
                        <p>{news.title}</p>
                        <p>{news.author}</p>
                        <p>{news.publishedAt}</p>
                        <p>{news.description}</p>
                        <img src={news.urlToImage} alt='indonesia news' />
                   </div>
                    ))
                }
              
          
                
                
        </div>
    )
}

export default IndonesiaNews;