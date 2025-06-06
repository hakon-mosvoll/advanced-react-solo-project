import classnames from "classnames";
import React, { Children, isValidElement } from "react";

const TestimonailsContext = React.createContext();
export { TestimonailsContext };

export default function Testimonials({ children, backgroundColor }) {
	const hasPicture = hasChildOfType("TestimonialsPicture", children);
	const hasLogo = hasChildOfType("TestimonialsLogo", children);

	const testimonialsClassNames = classnames(
		"testimonials",
		{ "testimonials-with-picture": hasPicture },
		{ "testimonials-with-logo": hasLogo },
		backgroundColor && `testimonials-${backgroundColor}`,
	);

	return (
		<TestimonailsContext.Provider value={{ hasPicture, hasLogo }}>
			<div className={testimonialsClassNames}>{children}</div>
		</TestimonailsContext.Provider>
	);
}

function hasChildOfType(componentName, children) {
	return Children.toArray(children).some((child) => {
		return isValidElement(child) && child.type.name === componentName;
	});
}
