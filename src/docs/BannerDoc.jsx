import Banner from "../components/Banner/index";

export default function BannerDocs() {
	return (
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
	);
}
