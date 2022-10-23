import { useDispatch, useSelector } from 'react-redux';
import { savedNews } from '../../features/Saved/savedSlice'
import DirectButton from '../button/directButton';
import SaveButton from '../button/saveButton'

const Layout = ({ news }) => {
	const dispatch = useDispatch();
	const savedArticle = useSelector(state => state.saved.articles);

	return (
		<div className="feature-container">
			<img src={news.urlToImage} alt={news.title}  />
			<div className="container">
				<div>
						
					<h5>{news.title}</h5>
					<p>{news.description}</p>
					<p>{news.author} | {news.source.name}</p>
					<DirectButton
						href={news.url}
						target="_blank"
					>
						Read More
					</DirectButton>
					<SaveButton
						onClick={() => dispatch(savedNews(news))}
					>
						{savedArticle.find(article => article.title === news.title) ? 'UnSaved' : 'Saved'}
					</SaveButton>
				</div>
			</div>
		</div>
	);
};

export default Layout;
