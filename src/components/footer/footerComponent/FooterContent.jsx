import FooterBottom from "./FooterBottom";
import FooterColumns from "./FooterColumns";
import FooterHero from "./FooterHero";

const FooterContent = () => {
	return (
		<footer id="contact" className="w-full text-white">
			<FooterHero />
			<FooterColumns />
			<FooterBottom />
		</footer>
	);
};

export default FooterContent;
