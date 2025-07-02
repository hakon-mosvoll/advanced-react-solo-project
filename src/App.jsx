import {
	BsBasket,
	BsCloudUpload,
	BsCode,
	BsFillBookmarkCheckFill,
} from "react-icons/bs";
import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/index";
import Card from "./components/Card/index";
import Testimonails from "./components/Testimonials/index";
import Tooltip from "./components/Tooltip/index";
import "./App.css";
import Button from "./components/Button/Button";

import quotePersonSmall from "./assets/img/quote-person-small.jpeg";
import quotePerson from "./assets/img/quote-person.jpeg";
import logo from "./assets/svg/logo.svg";

function App() {
	return (
		<article className="doc-article">
			<h1>Components</h1>
			<section className="doc-section">
				<h2>Badges</h2>
				<h3>Square</h3>
				<ul className="doc-list doc-list-horizontal">
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
				<ul className="doc-list doc-list-horizontal">
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
			<section className="doc-section">
				<h2>Banner</h2>
				<h3>Multiline</h3>
				<ul className="doc-list">
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
				<ul className="doc-list">
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
			<section className="doc-sectio">
				<h2>Card</h2>

				<div className="doc-columns">
					<Card icon={<BsCode />}>
						<Card.Title>Easy Development</Card.Title>
						<Card.Content>
							Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
							magna sit morbi lobortis.
						</Card.Content>
					</Card>
					<Card icon={<BsBasket />} iconBackgroundColor="green">
						<Card.Title>Easy Shopping</Card.Title>
						<Card.Content>
							Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
							magna sit morbi lobortis.
						</Card.Content>
					</Card>
					<Card icon={<BsFillBookmarkCheckFill />} iconBackgroundColor="purple">
						<Card.Title>Easy Reading</Card.Title>
						<Card.Content>
							Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
							magna sit morbi lobortis.
						</Card.Content>
					</Card>
				</div>
			</section>
			<section className="doc-section">
				<h2>Testimonials</h2>
				<ul className="doc-list">
					<li>
						<Testimonails backgroundColor="blue">
							<Testimonails.Picture
								src={quotePerson}
								srcSet={`${quotePersonSmall} 500w, ${quotePerson} 1900w`}
								sizes="(max-width: 768px) 500px, 1900px"
								alt="Picture of May Andersons"
							/>
							<Testimonails.Quote
								name="May Andersons"
								company="Workcation"
								companyTitle="CTO"
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								urna nulla vitae laoreet augue. Amet feugiat est integer dolor
								auctor adipiscing nunc urna, sit.
							</Testimonails.Quote>
						</Testimonails>
					</li>
					<li>
						<Testimonails>
							<Testimonails.Logo src={logo} />
							<Testimonails.Quote
								name="May Andersons"
								company="Workcation"
								companyTitle="CTO"
							>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
								expedita voluptas culpa sapiente alias molestiae. Numquam
								corrupti in laborum sed rerum et corporis.
							</Testimonails.Quote>
						</Testimonails>
					</li>
					<li>
						<Testimonails backgroundColor="green">
							<Testimonails.Picture
								src={quotePerson}
								srcSet={`${quotePersonSmall} 500w, ${quotePerson} 1900w`}
								sizes="(max-width: 768px) 500px, 1900px"
								alt="Picture of May Andersons"
							/>
							<Testimonails.Quote
								name="May Andersons"
								company="Workcation"
								companyTitle="CTO"
							>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								urna nulla vitae laoreet augue. Amet feugiat est integer dolor
								auctor adipiscing nunc urna, sit.
							</Testimonails.Quote>
						</Testimonails>
					</li>
				</ul>
			</section>
			<section className="doc-section">
				<h2>Tooltip (Work in progress)</h2>
				<h3>Tooltip position</h3>
				<ul className="doc-list doc-list-horizontal">
					<li>
						<Tooltip
							onClose={() => console.log("Tooltip closed")}
							onOpen={() => console.log("Tooltip opened")}
						>
							<Tooltip.Trigger>
								<Button>Click me (top)</Button>
							</Tooltip.Trigger>
							<Tooltip.Content
								title="Tooltip Title"
								icon={<BsCloudUpload />}
								color="blue"
							>
								This is a tooltip with some content. It can be used to provide
								additional information.
							</Tooltip.Content>
						</Tooltip>
					</li>
					<li>
						<Tooltip>
							<Tooltip.Trigger>
								<Button>Click me (bottom)</Button>
							</Tooltip.Trigger>
							<Tooltip.Content
								title="Tooltip Title"
								icon={<BsCloudUpload />}
								color="blue"
								position="bottom"
							>
								This is a tooltip with some content. It can be used to provide
								additional information.
							</Tooltip.Content>
						</Tooltip>
					</li>
					<li>
						<Tooltip>
							<Tooltip.Trigger>
								<Button>Click me (left)</Button>
							</Tooltip.Trigger>
							<Tooltip.Content
								title="Tooltip Title"
								icon={<BsCloudUpload />}
								color="blue"
								position="left"
							>
								This is a tooltip with some content. It can be used to provide
								additional information.
							</Tooltip.Content>
						</Tooltip>
					</li>
					<li>
						<Tooltip>
							<Tooltip.Trigger>
								<Button>Click me (right)</Button>
							</Tooltip.Trigger>
							<Tooltip.Content
								title="Tooltip Title"
								icon={<BsCloudUpload />}
								color="blue"
								position="right"
							>
								This is a tooltip with some content. It can be used to provide
								additional information.
							</Tooltip.Content>
						</Tooltip>
					</li>
				</ul>
				<h3>Tooltip color</h3>
				{/* TODO: Talk to designer about colors, styles, states (warning, error, info...) */}
				{/* TODO: Talk to designer about contrast to background (white tooltip) */}
				<div className="doc-columns">
					<ul className="doc-list doc-list-tooltip">
						<li>
							<Tooltip open={true}>
								<Tooltip.Trigger>
									<Button>Click me (black)</Button>
								</Tooltip.Trigger>
								<Tooltip.Content
									title="Tooltip Title"
									icon={<BsCloudUpload />}
									variant="black"
								>
									This is a tooltip with some content. It can be used to provide
									additional information.
								</Tooltip.Content>
							</Tooltip>
						</li>
						<li>
							<Tooltip open={true}>
								<Tooltip.Trigger>
									<Button>Click me (bold-blue)</Button>
								</Tooltip.Trigger>
								<Tooltip.Content
									title="Tooltip Title"
									icon={<BsCloudUpload />}
									variant="bold-blue"
								>
									This is a tooltip with some content. It can be used to provide
									additional information.
								</Tooltip.Content>
							</Tooltip>
						</li>
						<li>
							<Tooltip open={true}>
								<Tooltip.Trigger>
									<Button>Click me (bold-purple)</Button>
								</Tooltip.Trigger>
								<Tooltip.Content
									title="Tooltip Title"
									icon={<BsCloudUpload />}
									variant="bold-purple"
								>
									This is a tooltip with some content. It can be used to provide
									additional information.
								</Tooltip.Content>
							</Tooltip>
						</li>
						<li>
							<Tooltip open={true}>
								<Tooltip.Trigger>
									<Button>Click me (bold-green)</Button>
								</Tooltip.Trigger>
								<Tooltip.Content
									title="Tooltip Title"
									icon={<BsCloudUpload />}
									variant="bold-green"
								>
									This is a tooltip with some content. It can be used to provide
									additional information.
								</Tooltip.Content>
							</Tooltip>
						</li>
					</ul>
					<ul className="doc-list doc-list-tooltip">
						<li>
							<Tooltip open={true}>
								<Tooltip.Trigger>
									<Button>Click me (white)</Button>
								</Tooltip.Trigger>
								<Tooltip.Content
									title="Tooltip Title"
									icon={<BsCloudUpload />}
									variant="white"
								>
									This is a tooltip with some content. It can be used to provide
									additional information.
								</Tooltip.Content>
							</Tooltip>
						</li>

						<li>
							<Tooltip open={true}>
								<Tooltip.Trigger>
									<Button>Click me (light-blue)</Button>
								</Tooltip.Trigger>
								<Tooltip.Content
									title="Tooltip Title"
									icon={<BsCloudUpload />}
									variant="light-blue"
								>
									This is a tooltip with some content. It can be used to provide
									additional information.
								</Tooltip.Content>
							</Tooltip>
						</li>

						<li>
							<Tooltip open={true}>
								<Tooltip.Trigger>
									<Button>Click me (light-purple)</Button>
								</Tooltip.Trigger>
								<Tooltip.Content
									title="Tooltip Title"
									icon={<BsCloudUpload />}
									variant="light-purple"
								>
									This is a tooltip with some content. It can be used to provide
									additional information.
								</Tooltip.Content>
							</Tooltip>
						</li>

						<li>
							<Tooltip open={true}>
								<Tooltip.Trigger>
									<Button>Click me (light-green)</Button>
								</Tooltip.Trigger>
								<Tooltip.Content
									title="Tooltip Title"
									icon={<BsCloudUpload />}
									variant="light-green"
								>
									This is a tooltip with some content. It can be used to provide
									additional information.
								</Tooltip.Content>
							</Tooltip>
						</li>
					</ul>
				</div>
			</section>
		</article>
	);
}

export default App;
