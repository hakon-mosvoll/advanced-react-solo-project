import { createContext, useEffect, useRef, useState } from "react";

const TooltipContext = createContext();
export { TooltipContext };

export default function Tooltip({
	children,
	className,
	onClose,
	onOpen,
	...rest
}) {
	const [open, setOpen] = useState(false);
	const firstRender = useRef(true);

	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			return;
		}

		open ? onOpen?.() : onClose?.();
	}, [open, onOpen, onClose]);

	return (
		<TooltipContext.Provider value={{ open, setOpen }}>
			<div className={`tooltip ${className}`} {...rest}>
				{children}
			</div>
		</TooltipContext.Provider>
	);
}
