import { useDispatch, useSelector } from 'react-redux';
import { savedNews } from '../../features/Saved/savedSlice'
import DirectButton from '../button/directButton';
import SaveButton from '../button/saveButton'
import SaveIco from '../../assets/archive-add.svg'

const Layout = ({ news }) => {
	const dispatch = useDispatch();
	const savedArticle = useSelector(state => state.saved.articles);

	return (
		<div className="feature-content">
		<div className="card-feature-content">
			<a href={news.url} className="top-card" target="_blank">
				<div className="left-top-card">
					<p>{news.source.name}</p>
					<div className="title">{news.title}</div>
					<p>{news.description}</p>
				</div>
				<div className="right-top-card">
					<img src={news.urlToImage} alt={news.title}  />
				</div>
			</a>
			<div className="bottom-card">
				<p>{news.source.name}<span> • {news.publishedAt}</span></p>
				<div className="button">
					<DirectButton
						href={news.url}
						target="_blank"
					>
						Read More
					</DirectButton>
					{/* <img src={SaveIco} alt="Save"/> */}
					<SaveButton
						onClick={() => dispatch(savedNews(news))}
					>
						{savedArticle.find(article => article.title === news.title) ? 'UnSave' : 'Save'}
					</SaveButton>
			
				</div>
			</div>
			</div>
			{/* <img src={news.urlToImage} alt={news.title}  />
			<div className="container">
				<div >
						
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
			</div> */}
		</div>
	);
};

export default Layout;
