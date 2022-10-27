import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/layout/Layout';
import Title from '../../components/layout/Title';
import Pagination from '../../features/Pagination';


const ProgrammingPage = () => {
	const [news, setNews] = useState([]);

	//pagination
	const [currentPage, setCurrentPage] = useState(1);
  	const [postsPerPage] = useState(5);

	useEffect(() => {
		(async () => {
			const res = await axios.get(
				`https://newsapi.org/v2/everything?q=programming&pageSize=40&apiKey=a403faed7a1a4aa89b4870e0d507d9ef`
			);

			setNews(res.data.articles);
		})();
	}, []);

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = news.slice(indexOfFirstPost, indexOfLastPost);
  
	// Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);

	return (
		<Title title="Programming">
			<div className='category-title'>
				<h2>Programming</h2>
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
	);
};

export default ProgrammingPage;
