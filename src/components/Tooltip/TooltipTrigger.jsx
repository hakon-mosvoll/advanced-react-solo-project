import classNames from "classnames";
import { useContext } from "react";
import { TooltipContext } from "./Tooltip";

export default function TooltipTrigger({ children, className, ...rest }) {
	const { setOpen } = useContext(TooltipContext);

	const classNamesCombined = classNames("tooltip-trigger", className);

	return (
		<div
			className={classNamesCombined}
			{...rest}
			onClick={() => setOpen((prev) => !prev)}
		>
			{children}
		</div>
	);
}
