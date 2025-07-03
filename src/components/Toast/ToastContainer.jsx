import classNames from "classnames";

export default function ToastContainer({ children, className, ...rest }) {
	const toastContainerClasses = classNames("toast-container", className);

	return (
		<div id="toast-container" className={toastContainerClasses} {...rest}>
			{children}
		</div>
	);
}
