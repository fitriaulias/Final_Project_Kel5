const ButtonDirect = ({ children, href, ...props }) => {
	const className = 'container';

	if (href) {
		return (
			<a href={href} {...props} className={className}>
				{children}
			</a>
		);
	}

	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export default ButtonDirect;
