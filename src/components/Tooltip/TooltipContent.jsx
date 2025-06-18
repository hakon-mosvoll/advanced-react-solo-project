import classNames from "classnames";
import { useId, useLayoutEffect, useRef, useState } from "react";
import { BsX } from "react-icons/bs";

export default function TooltipContent({
	children,
	className,
	title,
	open,
	onClose,
	position = "top",
	...rest
}) {
	const tooltipRef = useRef(null);
	const [adjustedPosition, setAdjustedPosition] = useState(position);
	const titleId = useId();

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
	});

	return (
		<div ref={tooltipRef} className={tooltipContentClasses} {...rest}>
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
