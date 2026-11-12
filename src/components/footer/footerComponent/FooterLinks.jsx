import { ChevronRight } from "lucide-react";

const FooterLinks = ({ links }) => {
	const defaultLinks = [
		{ label: "Home", href: "#home" },
		{ label: "Artisan Services", href: "#services" },
		{ label: "Specialty Menu", href: "#menu" },
		{ label: "Customer Reviews", href: "#reviews" },
		{ label: "Contact & Roastery", href: "#contact" },
	];

	const displayLinks = links && links.length && typeof links[0] === "object" ? links : defaultLinks;

	return (
		<div className="flex flex-col items-start">
			<h3 className="text-xl font-semibold text-white">Quick Links</h3>
			<p className="mt-4 max-w-xs text-xs leading-5 text-white/70">
				Explore our roastery, browse popular brews, and discover seasonal offers:
			</p>

			<ul className="mt-5 space-y-2.5 text-xs text-white/80 w-full">
				{displayLinks.map((item, index) => (
					<li key={index}>
						<a
							href={item.href || "#"}
							className="flex items-center gap-1.5 py-1 hover:text-[#c4a574] hover:translate-x-1 transition duration-200"
						>
							<ChevronRight size={14} className="text-[#c4a574]" />
							<span>{item.label || item}</span>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default FooterLinks;
