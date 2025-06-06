import classnames from "classnames";

export default function Card({ children, icon, iconBackgroundColor = "blue" }) {
	const iconClasses = classnames(
		"card-icon",
		`card-icon-${iconBackgroundColor}`,
	);

	return (
		<div className="card">
			<div className={iconClasses}>{icon}</div>
			{children}
		</div>
	);
}
