import { BsBasket, BsCloudUpload } from "react-icons/bs";
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
			<section className="doc-section doc-section-testimonials">
				<h2>Testimonials</h2>
				<ul>
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
			<section className="doc-section doc-section-tooltip">
				<h2>Tooltip (Work in progress)</h2>
				<ul className="doc-list-horizontal">
					<li>
						<Tooltip>
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
			</section>
		</article>
	);
}

export default App;
