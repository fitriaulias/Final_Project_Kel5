import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import Title from '../../components/Layout/Title'


const ProgrammingPage = () => {
	const [news, setNews] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await axios.get(
				`https://newsapi.org/v2/everything?q=programming&pageSize=40&apiKey=a403faed7a1a4aa89b4870e0d507d9ef`
			);

			setNews(res.data.articles);
		})();
	}, []);

	return (
		<Title title="Programming">
			<section>
				{news?.map(n => (
					<Layout news={n} key={n.title} />
				))}
			</section>
		</Title>
	);
};

export default ProgrammingPage;
