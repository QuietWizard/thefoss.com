import Hero from './sections/Hero.jsx'
import NavBar from "./components/NavBar.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
	return (
		<>
			<NavBar />
			<Hero />
			<ExperienceSection />
			<TechStack />
			<FeatureCards />
			<Contact />
			<Footer />
		</>
	)
}
export default App