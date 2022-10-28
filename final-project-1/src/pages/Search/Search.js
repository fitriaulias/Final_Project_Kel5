import Title from '../../components/Layout/Title'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Layout from '../../components/Layout/Layout'
import Pagination from '../../features/Pagination'
import { useEffect, useState } from 'react'

const SearchP = () => {
    const search = useSelector(state => state.search.search)
    
    // const {data,loading} = useGetSearchQuery(search)
    // useEffect
    // console.log(data)
    
    const [news, setNews] = useState([]);

	//pagination
	const [currentPage, setCurrentPage] = useState(1);
  	const [postsPerPage] = useState(5);

	
	useEffect(() => {
		(async () => {
 
			const res = await axios.get(`https://newsapi.org/v2/everything?q=${search?search:'Indonesia'}&pageSize=40&apiKey=84de37a1a2054cc18bafae4caa2694fe`);

			setNews(res.data.articles);
		})();
	}, [search]);

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = news.slice(indexOfFirstPost, indexOfLastPost);
  
	// Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <Title title='Search'>
            <div className='category-title'>
				<h2>Hasil dari <b>{search?search:'Indonesia'}</b></h2>
			</div>
			<section>
				{currentPosts?.map(n => (
					<Layout news={n} key={n.title} />
				))}
				
				<div>
				<Pagination
        			postsPerPage={postsPerPage}
        			totalPosts={news.length}
        			paginate={paginate}
      			/>
				</div>
			</section>
        </Title>
    )
}

export default SearchP