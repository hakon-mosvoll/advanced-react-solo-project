import BadgeDoc from "./docs/BadgeDoc";
import BannerDoc from "./docs/BannerDoc";
import CardDoc from "./docs/CardDoc";
import TestimonialsDoc from "./docs/TestimonialsDoc";
import ToastDoc from "./docs/ToastDoc";
import TooltipDoc from "./docs/TooltipDoc";
import "./App.css";
import { ToastContainer } from "./components/Toast/index";

function App() {
	return (
		<article className="doc-article">
			<h1>Components</h1>
			<BadgeDoc />
			<BannerDoc />
			<CardDoc />
			<TestimonialsDoc />
			<TooltipDoc />
			<ToastDoc />
			<ToastContainer />
		</article>
	);
}

export default App;
