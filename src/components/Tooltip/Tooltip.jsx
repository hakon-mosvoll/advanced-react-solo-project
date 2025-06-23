import { createContext, useState } from "react";

const TooltipContext = createContext();
export { TooltipContext };

export default function Tooltip({ children, className, ...rest }) {
	const [open, setOpen] = useState(false);

	return (
		<TooltipContext.Provider value={{ open, setOpen }}>
			<div className={`tooltip ${className}`} {...rest}>
				{children}
			</div>
		</TooltipContext.Provider>
	);
}
