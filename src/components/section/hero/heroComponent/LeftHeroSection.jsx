import { ArrowUpRight } from "lucide-react";
import Items from "./Items";

const LeftHeroSection = () => {
	return (
		<div className="w-full lg:w-1/2 px-0 lg:px-10 py-8 lg:py-0 flex flex-col justify-center">
			<div className="flex flex-col items-start gap-3 lg:pt-[28%]">
				<h1 className="font-[Playfair] text-4xl sm:text-5xl lg:text-7xl text-[#6B3E26] font-bold leading-tight">
					Discover The Art <br />
					of Perfect Coffee
				</h1>
				<p className="font-Arile text-sm sm:text-base lg:text-lg text-[#C89B6D] font-normal pb-2 leading-relaxed">
					At Cozy Roast, we craft slow-roasted specialty blends and
					ethically sourced single-origin coffees, bringing warm
					comfort, artisanal precision, and unforgettable aromas to
					every single cup.
				</p>
				<button className="flex items-center justify-between gap-4 bg-[#6B3E26] text-white pl-4 sm:pl-6 pr-1 sm:pr-2 py-2 sm:py-1.5 rounded-full hover:bg-[#432010] transition text-sm sm:text-base">
					Order Now{" "}
					<span className="h-7 sm:h-8 w-7 sm:w-8 rounded-full bg-white text-[#2B2B2B] flex items-center justify-center shrink-0">
						<ArrowUpRight size={18} />
					</span>{" "}
				</button>
			</div>
			<div className="mt-8 lg:mt-4">
				<Items />
			</div>
		</div>
	);
};

export default LeftHeroSection;
