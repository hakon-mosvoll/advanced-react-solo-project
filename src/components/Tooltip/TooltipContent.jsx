import classNames from "classnames";
import { useId } from "react";
import { BsX } from "react-icons/bs";

export default function TooltipContent({
	children,
	className,
	title,
	open,
	onClose,
	...rest
}) {
	const tooltipContentClasses = classNames("tooltip-content", className, {
		"tooltip-content-open": open,
	});

	const titleId = useId();

	return (
		<div className={tooltipContentClasses} {...rest}>
			<strong
				id={`tooltip-content-title-${titleId}`}
				className="tooltip-content-title"
			>
				{title}
			</strong>
			<BsX
				className="tooltip-content-close"
				onClick={onClose}
				aria-label="Close tooltip"
			/>
			<p
				className="tooltip-content-body"
				aria-labelledby={`tooltip-content-title-${titleId}`}
			>
				{children}
			</p>
		</div>
	);
}
