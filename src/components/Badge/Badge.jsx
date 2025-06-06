import classnames from "classnames";

import "./badge.css";

export default function Badge({ children, shape = "square", color = "grey" }) {
	// TODO: Ask designer about color and statuses

	const badgeClasses = classnames("badge", `badge-${shape}`, `badge-${color}`);

	return <span className={badgeClasses}>{children}</span>;
}
