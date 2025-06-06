import { useContext } from "react";
import { TestimonailsContext } from "./Testimonials";

export default function TestimonialsQuote({
	children,
	name,
	company,
	companyTitle,
}) {
	const { hasLogo } = useContext(TestimonailsContext);

	return (
		<div className="testimonials-quote">
			<blockquote className="testimonials-blockquote">
				<p>{children}</p>
			</blockquote>
			<p>
				<span className="testimonials-name">{name}</span>
				{hasLogo && " / "}
				<span className="testimonials-company">{company},</span>
				<span className="testimonials-company-title"> {companyTitle}</span>
			</p>
		</div>
	);
}
