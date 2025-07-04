import { BsBasket, BsCode, BsFillBookmarkCheckFill } from "react-icons/bs";
import Card from "../components/Card/index";

export default function CardDoc() {
	return (
		<section className="doc-section">
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
	);
}
