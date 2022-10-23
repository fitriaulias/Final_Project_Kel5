import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import Title from '../../components/Layout/Title'


const ProgrammingPage = () => {
	const [news, setNews] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await axios.get(
				`https://newsapi.org/v2/everything?q=programming&pageSize=40&apiKey=f5bf21211b53443993ac8a6834c3ba12`
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
