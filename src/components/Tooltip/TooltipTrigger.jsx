import { useContext } from "react";
import { TooltipContext } from "./Tooltip";

export default function TooltipTrigger({ children, className, ...rest }) {
	const { setOpen } = useContext(TooltipContext);

	return (
		<div
			className={`tooltip-trigger ${className}`}
			{...rest}
			onClick={() => setOpen((prev) => !prev)}
		>
			{children}
		</div>
	);
}
