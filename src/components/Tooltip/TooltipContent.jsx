import classNames from "classnames";

export default function TooltipContent({ children, className, open, ...rest }) {
	const tooltipContentClasses = classNames("tooltip-content", className, {
		"tooltip-content-open": open,
	});

	return (
		<div className={tooltipContentClasses} {...rest}>
			{children}
		</div>
	);
}
