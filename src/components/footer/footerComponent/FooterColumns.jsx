import FooterAbout from "./FooterAbout";
import FooterAlternative from "./FooterAlternative";
import FooterHours from "./FooterHours";
import FooterLinks from "./FooterLinks";

const FooterColumns = () => {
	const quickLinks = [
		{ label: "Home", href: "#home" },
		{ label: "Our Services", href: "#services" },
		{ label: "Artisan Menu", href: "#menu" },
		{ label: "Customer Reviews", href: "#reviews" },
		{ label: "Contact & Roastery", href: "#contact" },
	];

	return (
		<div className="bg-[#2b1208] px-6 py-14 md:px-12 lg:px-20 border-t border-white/5">
			<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
				<FooterAbout />
				<FooterAlternative />
				<FooterLinks links={quickLinks} />
				<FooterHours />
			</div>
		</div>
	);
};

export default FooterColumns;
