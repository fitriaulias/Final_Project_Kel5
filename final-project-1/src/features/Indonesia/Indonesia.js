import { useDispatch, useSelector } from 'react-redux';
import { fetchIndonesia } from './indonesiaSlice';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination';
import saveIco from '../../assets/archive-add.svg'


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
        <>
            <div className='feature-content'>
                {
                    filterAllNewsIndonesia.map((news, index) => (
                    <div key={index} className="card-feature-content">
                        <a href={news.url} className="top-card">
                            <div className="left-top-card">
                                <p>{news.source.name}</p>
                                <div className='title'>{news.title}</div>
                                <p>{news.description}</p>
                            </div>
                            <div className="right-top-card">
                                <img src={news.urlToImage} alt="indonesian news"/>
                            </div>
                        </a>
                        <div className='bottom-card'>
                            <p>{news.source.name}<span> • {news.publishedAt}</span></p>
                            <div><img src={saveIco} alt='Save'/></div>
                        </div>
                   </div>
                    ))
                }
            </div>
            <div className='feature-pagination'>
                <Pagination currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalNews={totalNews}
                postPerPage={postPerPage} />
            </div>
        </>
    )
}

export default IndonesiaNews;