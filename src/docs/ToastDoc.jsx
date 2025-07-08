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
							showToast(
								"Information",
								"Please read updated information",
								"info",
							)
						}
					>
						Show Toast (Info)
					</Button>
				</li>
				<li>
					<Button
						onClick={() =>
							showToast("Success", "Your work has been saved", "success")
						}
					>
						Show Toast (Success)
					</Button>
				</li>
				<li>
					<Button
						onClick={() =>
							showToast("Warning", "A network error was detected", "warning")
						}
					>
						Show Toast (Warning)
					</Button>
				</li>
				<li>
					<Button
						onClick={() =>
							showToast("Error", "Please re-save your work again", "error")
						}
					>
						Show Toast (Error)
					</Button>
				</li>
			</ul>
		</section>
	);
}
