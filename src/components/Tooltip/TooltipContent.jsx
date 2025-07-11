import classNames from "classnames";
import { useId, useRef } from "react";
import { useContext } from "react";
import { BsX } from "react-icons/bs";
import { TooltipContext } from "./Tooltip";

export default function TooltipContent({
	children,
	className,
	title,
	icon,
	variant = "black",
	position = "top",
	...rest
}) {
	const tooltipRef = useRef(null);
	const titleId = useId();
	const { open, setOpen } = useContext(TooltipContext);

	// TODO: Add out of bounds detection and adjustment

	const tooltipContentClasses = classNames("tooltip-content", className, {
		"tooltip-content-open": open,
		[`tooltip-content-${position}`]: position,
		[`tooltip-content-${variant}`]: variant,
	});

	return (
		<div ref={tooltipRef} className={tooltipContentClasses} {...rest}>
			<div className="tooltip-content-icon">{icon}</div>
			<div className="tooltip-content-text">
				<strong
					id={`tooltip-content-title-${titleId}`}
					className="tooltip-content-title"
				>
					{title}
				</strong>
				<BsX
					className="tooltip-content-close"
					onClick={() => {
						setOpen(false);
					}}
					aria-label="Close tooltip"
				/>
				<p
					className="tooltip-content-body"
					aria-labelledby={`tooltip-content-title-${titleId}`}
				>
					{children}
				</p>
			</div>
		</div>
	);
}
