import classNames from "classnames";
import { useId, useLayoutEffect, useRef, useState } from "react";
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
	const [adjustedPosition, setAdjustedPosition] = useState(position);
	const titleId = useId();
	const { open, setOpen } = useContext(TooltipContext);

	// Simple adjustment of the position of the tooltip if it goes out of bounds
	// TODO: Improve out of bounds detection and adjustment
	useLayoutEffect(() => {
		if (!tooltipRef.current) return;

		if (!open) {
			setAdjustedPosition(position);
			return;
		}

		const rect = tooltipRef.current.getBoundingClientRect();
		const { innerWidth, innerHeight } = window;

		let newPosition = position;

		if (position === "top" && rect.top < 0) {
			newPosition = "bottom";
		} else if (position === "bottom" && rect.bottom > innerHeight) {
			newPosition = "top";
		} else if (position === "left" && rect.left < 0) {
			newPosition = "right";
		} else if (position === "right" && rect.right > innerWidth) {
			newPosition = "left";
		}

		setAdjustedPosition(newPosition);
	}, [open, position]);

	const tooltipContentClasses = classNames("tooltip-content", className, {
		"tooltip-content-open": open,
		[`tooltip-content-${adjustedPosition}`]: adjustedPosition,
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
