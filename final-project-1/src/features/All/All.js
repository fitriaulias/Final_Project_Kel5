import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination';
import { fetchAll } from './allSlice';



const AllNews = () => {
    const posts = useSelector((state) => state.all.allState);
    const dispatch = useDispatch();

    //pagination
    const [ currentPage, setCurrentPage ] = useState(1);
    
    useEffect(() => {
        dispatch(fetchAll())
      
    }, [dispatch])

    const postPerPage = 40;
	const totalPosts = posts.length;

    const indexOfLastPost = currentPage * postPerPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;
	const filterPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    
    return (
        <div className='indonesia-container'>
            <div>
                { 
                    filterPosts.map((news, index) => (
                    <div key={index} style={{ width: '35rem' }}>
                        <img src={news.urlToImage} alt='indonesia news' />
                        <p>{news.title}</p>
                        <p>{news.author}</p>
                        <p>{news.publishedAt}</p>
                        <p>{news.description}</p>
                        <p>{news.content}</p>
                </div>
            ))
        }
        <br/>
            </div>
                {totalPosts > postPerPage && (
						<Pagination
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							totalPosts={totalPosts}
							postPerPage={postPerPage}
						/>
					)}
        </div>
    )
}

export default AllNews;