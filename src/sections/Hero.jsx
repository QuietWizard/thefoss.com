import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { words } from "../constants";

const Hero = () => {
	useGSAP(() => {
		gsap.fromTo(
			".hero-text h1",
			{ y: 50, opacity: 0 },
			{ y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
		);
	});

	return (
		<section id="hero">
			<header className="hero-layout">
				{/* LEFT: Hero Content */}
				<div className="hero-text">
					<h3>Delivering Real Results</h3>
					<h3>for
						<span className="slide">
							<span className="wrapper">
								{words.map((word, index) => (
									<span
										key={index}
										className="flex items-center md:gap-3 gap-1 pb-2"
									>
										<img
											src={word.imgPath}
											alt="clipart image"
										/>
										<span>{word.text}</span>
									</span>
								))}
							</span>
						</span>
					</h3>
					<p className="text-white-50 md:text-xl py-10 pointer-events-none">
						Hi, I’m Michael, a Southern California native who has spent the past 3 decades in programming and system engineering. I have a passion for creating innovative solutions that drive business success. I specialize in eCommerce, web development, and system integration. I am dedicated to delivering high-quality results that exceed client expectations.
					</p>
				</div>

				{/* RIGHT: Hero Headshot */}
				<div className="hero-portrait">
					<img src="/images/headshot.jpg" alt="headshot image of Michael Foss" />
				</div>
			</header>
		</section>
	);
};

export default Hero;