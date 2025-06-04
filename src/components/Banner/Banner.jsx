import classnames from "classnames";

export default function Banner({ children, variant = "neutral" }) {
	const bannerClassnames = classnames("banner", `banner-${variant}`);

	return <div className={bannerClassnames}>{children}</div>;
}
