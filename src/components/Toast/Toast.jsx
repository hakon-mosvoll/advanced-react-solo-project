import classNames from "classnames";

export default function Toast({ title, message, variant = "info" }) {
	const toastClasses = classNames("toast", `toast-${variant}`);

	return (
		<div className={toastClasses}>
			<strong className="toast-title">{title}</strong>
			<p className="toast-message">{message}</p>
		</div>
	);
}
