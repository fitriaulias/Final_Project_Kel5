import { useDispatch, useSelector } from 'react-redux';
import { savedNews } from '../../features/Saved/savedSlice'
import ButtonDirect from '../button/directButton';
import ButtonSave from '../button/saveButton'

const Layout = ({ news }) => {
	const dispatch = useDispatch();
	const savedArticle = useSelector(state => state.saved.articles);

	return (
		<div className="container">
			<img src={news.urlToImage} alt={news.title}  />
			<div className="container">
				<div>
						
					<h5>{news.title}</h5>
					<p>{news.description}</p>
					<p>{news.author} | {news.source.name}</p>
					<ButtonDirect
						href={news.url}
						target="_blank"
					>
						Read More
					</ButtonDirect>
					<ButtonSave
						onClick={() => dispatch(savedNews(news))}
					>
						{savedArticle.find(article => article.title === news.title) ? 'UnSaved' : 'Saved'}
					</ButtonSave>
				</div>
			</div>
		</div>
	);
};

export default Layout;
