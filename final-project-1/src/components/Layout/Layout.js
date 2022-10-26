import { useDispatch, useSelector } from 'react-redux';
import { savedNews } from '../../features/Saved/savedSlice'
import SaveButton from '../button/saveButton'
import SaveIco from '../../assets/archive-add.svg'

const Layout = ({ news }) => {
	const dispatch = useDispatch();
	const savedArticle = useSelector(state => state.saved.articles);

	return (
		<div className="feature-content">
		<div className="card-feature-content">
			<a href={news.url} className="top-card" target="_blank" rel='noreferrer'>
				<div className="left-top-card">
					<p>{news.source.name}</p>
					<div className="title">{news.title}</div>
					<p>{news.description}</p>
				</div>
				<div className="right-top-card">
					<img src={news.urlToImage} alt={news.title} />
				</div>
			</a>
			<div className="bottom-card">
				<p>{news.source.name}<span> • {news.publishedAt}</span></p>
				<div className="button">
					<SaveButton
						onClick={() => dispatch(savedNews(news))}
					>
						<img src={SaveIco} alt="Save"/> {savedArticle.find(article => article.title === news.title) ? 'UnSave' : 'Save'}
					</SaveButton>
			
				</div>
			</div>
			</div>
		</div>
	);
};

export default Layout;
