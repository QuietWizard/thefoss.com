import { socialImgs } from "../constants";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="flex justify-center items-center">
				{socialImgs.map((socialImg, index) => (
					<div key={index} className="icon">
						<a href={socialImg.link} target="_blank" rel="noopener noreferrer">
							<img src={socialImg.imgPath} alt="social icon" />
						</a	>
					</div>
				))}
			</div>
			<p>
				© {new Date().getFullYear()} Michael Foss. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
