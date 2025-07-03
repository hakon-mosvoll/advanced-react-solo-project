export default function Toast({ title, message, variant = "info" }) {
	return (
		<div className={`toast ${variant}`}>
			<strong>{title}</strong>
			<p>{message}</p>
		</div>
	);
}
