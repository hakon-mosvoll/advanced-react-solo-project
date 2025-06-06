import { BsBasket, BsCloudUpload } from "react-icons/bs";
import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/index";
import Card from "./components/Card/index";
import "./App.css";

function App() {
	return (
		<article>
			<h1>Components</h1>
			<section className="doc-section doc-section-badge">
				<h2>Badges</h2>
				<h3>Square</h3>
				<ul>
					<li>
						<Badge shape="square" color="grey">
							Badge
						</Badge>
					</li>
					<li>
						<Badge shape="square" color="red">
							Badge
						</Badge>
					</li>
					<li>
						<Badge shape="square" color="yellow">
							Badge
						</Badge>
					</li>
					<li>
						<Badge shape="square" color="green">
							Badge
						</Badge>
					</li>
					<li>
						<Badge shape="square" color="blue">
							Badge
						</Badge>
					</li>
					<li>
						<Badge shape="square" color="indigo">
							Badge
						</Badge>
					</li>
					<li>
						<Badge shape="square" color="purple">
							Badge
						</Badge>
					</li>
					<li>
						<Badge shape="square" color="pink">
							Badge
						</Badge>
					</li>
				</ul>
				<h3>Pill</h3>
				<ul>
					<li>
						<Badge shape="pill" color="grey">
							Badge
						</Badge>
					</li>
					<li>
						<Badge shape="pill" color="red">
							Badge
						</Badge>
					</li>
					<li>
						<Badge shape="pill" color="yellow">
							Badge
						</Badge>
					</li>
					<li>
						<Badge shape="pill" color="green">
							Badge
						</Badge>
					</li>
					<li>
						<Badge shape="pill" color="blue">
							Badge
						</Badge>
					</li>
					<li>
						<Badge shape="pill" color="indigo">
							Badge
						</Badge>
					</li>
					<li>
						<Badge shape="pill" color="purple">
							Badge
						</Badge>
					</li>
					<li>
						<Badge shape="pill" color="pink">
							Badge
						</Badge>
					</li>
				</ul>
			</section>
			<section className="doc-section doc-section-banner">
				<h2>Banner</h2>
				<h3>Multiline</h3>
				<ul>
					<li>
						<Banner variant="success">
							<Banner.Title>Congratulations!</Banner.Title>
							<Banner.Content>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
								pariatur, ipsum similique veniam.
							</Banner.Content>
						</Banner>
					</li>
					<li>
						<Banner variant="warning">
							<Banner.Title>Attention</Banner.Title>
							<Banner.Content>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
								pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
							</Banner.Content>
						</Banner>
					</li>
					<li>
						<Banner variant="error">
							<Banner.Title>
								There is a problem with your application
							</Banner.Title>
							<Banner.Content>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
								pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
							</Banner.Content>
						</Banner>
					</li>
					<li>
						<Banner variant="neutral">
							<Banner.Title>Update available</Banner.Title>
							<Banner.Content>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
								pariatur, ipsum similique veniam.
							</Banner.Content>
						</Banner>
					</li>
				</ul>
				<h3>Singleline</h3>
				<ul>
					<li>
						<Banner variant="success">
							<Banner.Title>Congratulations!</Banner.Title>
						</Banner>
					</li>
					<li>
						<Banner variant="warning">
							<Banner.Title>Attention</Banner.Title>
						</Banner>
					</li>
					<li>
						<Banner variant="error">
							<Banner.Title>
								There is a problem with your application
							</Banner.Title>
						</Banner>
					</li>
					<li>
						<Banner variant="neutral">
							<Banner.Title>Update available</Banner.Title>
						</Banner>
					</li>
				</ul>
			</section>
			<section className="doc-section doc-section-card">
				<h2>Card</h2>

				<ul>
					<li>
						<Card icon={<BsCloudUpload />}>
							<Card.Title>Easy Development</Card.Title>
							<Card.Content>
								Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
								Et magna sit morbi lobortis.
							</Card.Content>
						</Card>
					</li>
					<li>
						<Card icon={<BsBasket />} iconBackgroundColor="green">
							<Card.Title>Easy Development</Card.Title>
							<Card.Content>
								Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
								Et magna sit morbi lobortis.
							</Card.Content>
						</Card>
					</li>
				</ul>
			</section>
		</article>
	);
}

export default App;
