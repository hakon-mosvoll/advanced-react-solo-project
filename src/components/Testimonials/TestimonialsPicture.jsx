import classnames from "classnames";

export default function TestimonialsPicture({
	src,
	srcSet,
	sizes,
	className,
	...rest
}) {
	const classNamesCombined = classnames("testimonials-picture", className);

	return (
		<img
			className={classNamesCombined}
			src={src}
			srcSet={srcSet}
			sizes={sizes}
			{...rest}
		/>
	);
}
