import { useDispatch, useSelector } from 'react-redux';
import { fetchIndonesia } from './indonesiaSlice';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination';


const IndonesiaNews = () => {
    const allNewsIndonesia = useSelector((state) => state.indonesia.indonesiaState);
    const dispatch = useDispatch();

    //pagination
    const [ currentPage, setCurrentPage ] = useState(1)
    
    useEffect(() => {
        dispatch(fetchIndonesia())
    }, [dispatch])

    const postPerPage = 40; // atur sesuai keinginan
    const totalNews = allNewsIndonesia.length
    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage
    const filterAllNewsIndonesia = allNewsIndonesia.slice(firstPostIndex, lastPostIndex)

    return (
        <div className='feature-container'>
            <div>
                {
                    filterAllNewsIndonesia.map((news, index) => (
                    <div key={index}>
                        <p>{news.title}</p>
                        <a href={news.url} target="_blank" rel="noopener noreferrer">
                            <button>News Detail</button>
                        </a>
                        <p>{news.author}</p>
                        <p>{news.publishedAt}</p>
                        <p>{news.description}</p>
                        <img src={news.urlToImage} alt='indonesia news' />
                   </div>
                    ))
                }
            </div>
            <div>
                <Pagination currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalNews={totalNews}
                postPerPage={postPerPage} />
            </div>
        </div>
    )
}

export default IndonesiaNews;