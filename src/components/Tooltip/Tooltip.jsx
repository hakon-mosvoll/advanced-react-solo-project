import classNames from "classnames";
import { createContext, useEffect, useRef, useState } from "react";

const TooltipContext = createContext();
export { TooltipContext };

export default function Tooltip({
	children,
	className,
	onClose,
	onOpen,
	open = false,
	...rest
}) {
	const [_open, setOpen] = useState(open);
	const firstRender = useRef(true);

	const tooltipClasses = classNames("tooltip", className);

	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			return;
		}

		_open ? onOpen?.() : onClose?.();
	}, [_open, onOpen, onClose]);

	return (
		<TooltipContext.Provider value={{ open: _open, setOpen }}>
			<div className={tooltipClasses} {...rest}>
				{children}
			</div>
		</TooltipContext.Provider>
	);
}
