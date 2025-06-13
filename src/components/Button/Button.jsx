import classnames from "classnames";
import "./button.css";

export default function Button({
	children,
	className,
	size,
	variant,
	...rest
}) {
	const sizeClass = size && `button-${size}`;
	const variantClass = variant && `button-${variant}`;
	const allClasses = classnames(sizeClass, variantClass, className);

	return (
		<button className={allClasses} {...rest}>
			{children}
		</button>
	);
}
