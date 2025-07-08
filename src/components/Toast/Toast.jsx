import classNames from "classnames";
import {
	BsCheckCircle,
	BsExclamationCircle,
	BsInfoCircle,
	BsXCircle,
} from "react-icons/bs";

export default function Toast({ title, message, variant = "info" }) {
	const toastClasses = classNames("toast", `toast-${variant}`);

	let Icon;
	switch (variant) {
		case "success":
			Icon = BsCheckCircle;
			break;
		case "warning":
			Icon = BsExclamationCircle;
			break;
		case "error":
			Icon = BsXCircle;
			break;
		default:
			Icon = BsInfoCircle;
	}

	return (
		<div className={toastClasses}>
			<Icon className="toast-icon" size={18} />
			<strong className="toast-title">{title}</strong>
			<p className="toast-message">{message}</p>
		</div>
	);
}
