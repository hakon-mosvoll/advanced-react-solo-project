export default function Tooltip({ children, className, ...rest }) {
	return (
		<div className={`tooltip ${className}`} {...rest}>
			{children}
		</div>
	);
}
