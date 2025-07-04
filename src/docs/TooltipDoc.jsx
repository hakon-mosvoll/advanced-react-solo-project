import { BsCloudUpload } from "react-icons/bs";
import Button from "../components/Button/Button";
import Tooltip from "../components/Tooltip/index";

export default function TooltipDoc() {
	return (
		<section className="doc-section">
			<h2>Tooltip</h2>
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
	);
}
