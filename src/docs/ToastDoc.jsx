import Button from "../components/Button/Button";
import { useToast } from "../components/Toast/index";

export default function ToastDoc() {
	const { showToast } = useToast();

	return (
		<section className="doc-section">
			<h2>Toast Popups (Work In Progress)</h2>
			<ul className="doc-list doc-list-horizontal">
				<li>
					<Button
						onClick={() =>
							showToast("Notification", "This is a toast message!", "info")
						}
					>
						Show Toast
					</Button>
				</li>
			</ul>
		</section>
	);
}
