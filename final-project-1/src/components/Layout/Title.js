import { Helmet } from 'react-helmet-async';


const Title = ({ children, title }) => {
	return (
		<>
			<Helmet>
				<title>{title ? `NewsInd | ${title}` : 'NewsInd'}</title>
			</Helmet>
		
			<main >{children}</main>
		</>
	);
};

export default Title;
