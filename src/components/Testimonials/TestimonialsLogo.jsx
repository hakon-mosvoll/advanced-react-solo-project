import classnames from "classnames";

export default function TestimonialsLogo({ src, className, ...rest }) {
	const classNamesCombined = classnames("testimoinals-logo", className);

	return <img className={classNamesCombined} src={src} {...rest} />;
}

TestimonialsLogo.displayName = "TestimonialsLogo";
