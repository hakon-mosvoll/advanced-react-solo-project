export default function TooltipTrigger({ children, className, ...rest }) {
	return (
		<div className={`tooltip-trigger ${className}`} {...rest}>
			{children}
		</div>
	);
}
