import quotePersonSmall from "../assets/img/quote-person-small.jpeg";
import quotePerson from "../assets/img/quote-person.jpeg";
import logo from "../assets/svg/logo.svg";

import Testimonails from "../components/Testimonials/index";

export default function TestimonialsDoc() {
	return (
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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
							nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
							adipiscing nunc urna, sit.
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
							expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
							in laborum sed rerum et corporis.
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
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
							nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
							adipiscing nunc urna, sit.
						</Testimonails.Quote>
					</Testimonails>
				</li>
			</ul>
		</section>
	);
}
