import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import Toast from "./Toast";

export default function useToast() {
	const rootRef = useRef(null);
	const toastContainerRef = useRef(null);
	const [toasts, setToasts] = useState([]);

	useEffect(() => {
		toastContainerRef.current = document.getElementById("toast-container");
		if (toastContainerRef.current && !rootRef.current) {
			rootRef.current = createRoot(toastContainerRef.current);
		}
	}, []);

	useEffect(() => {
		if (rootRef.current && toastContainerRef.current) {
			rootRef.current.render(
				<div>
					{toasts.map((toast) => (
						<Toast key={toast.id} {...toast} />
					))}
				</div>,
			);
		}
	}, [toasts]);

	function displayToast(title, message, variant = "info") {
		const toastId = crypto.randomUUID();

		setToasts((prevToasts) => [
			...prevToasts,
			{ title, message, variant, id: toastId },
		]);

		setTimeout(() => {
			setToasts((prevToasts) =>
				prevToasts.filter((toast) => toast.id !== toastId),
			);
		}, 3000);
	}

	return {
		showToast: displayToast,
	};
}
