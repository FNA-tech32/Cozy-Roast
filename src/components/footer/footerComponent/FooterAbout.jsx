import { MapPin, Phone, Mail, Compass } from "lucide-react";

const FooterAbout = () => {
	return (
		<div className="flex flex-col items-start">
			<div className="flex items-center gap-2">
				<h3 className="text-xl font-semibold text-white">About Cozy Roast</h3>
				<span className="rounded-full bg-[#c4a574]/15 px-2 py-0.5 text-[11px] font-medium text-[#c4a574] border border-[#c4a574]/30">
					Primary Desk
				</span>
			</div>
			<p className="mt-4 max-w-xs text-xs leading-5 text-white/70">
				Small-batch artisanal roasts, ethically sourced beans, and a warm neighborhood atmosphere crafted for every coffee lover.
			</p>

			<div className="mt-5 space-y-3.5 text-xs text-white/85 w-full">
				<a
					href="https://maps.google.com/?q=Arts+District+Los+Angeles+CA"
					target="_blank"
					rel="noreferrer"
					className="flex items-start gap-2.5 rounded-lg bg-white/5 p-2.5 border border-white/10 hover:border-[#c4a574]/40 hover:bg-white/10 transition group"
				>
					<MapPin size={16} className="text-[#c4a574] shrink-0 mt-0.5 group-hover:scale-110 transition" />
					<div>
						<span className="block text-[10px] uppercase tracking-wider text-white/50 font-semibold">
							Flagship Roastery
						</span>
						<span className="text-white/90">742 Evergreen Terrace, Arts District, LA 90013</span>
					</div>
				</a>

				<a
					href="tel:+15552699778"
					className="flex items-center gap-2.5 rounded-lg bg-white/5 p-2.5 border border-white/10 hover:border-[#c4a574]/40 hover:bg-white/10 transition group"
				>
					<Phone size={16} className="text-[#c4a574] shrink-0 group-hover:scale-110 transition" />
					<div>
						<span className="block text-[10px] uppercase tracking-wider text-white/50 font-semibold">
							Primary Phone
						</span>
						<span className="text-white/90 font-medium">+1 (555) 269-9778 (+1 555-COZY-RST)</span>
					</div>
				</a>

				<a
					href="mailto:hello@cozyroast.com"
					className="flex items-center gap-2.5 rounded-lg bg-white/5 p-2.5 border border-white/10 hover:border-[#c4a574]/40 hover:bg-white/10 transition group"
				>
					<Mail size={16} className="text-[#c4a574] shrink-0 group-hover:scale-110 transition" />
					<div>
						<span className="block text-[10px] uppercase tracking-wider text-white/50 font-semibold">
							General &amp; Support Email
						</span>
						<span className="text-white/90 font-medium">hello@cozyroast.com</span>
					</div>
				</a>

				<div className="flex items-center gap-2 pt-1 text-[11px] text-white/60">
					<Compass size={14} className="text-[#c4a574]" />
					<span>Free visitor parking &bull; Outdoor patio seating</span>
				</div>
			</div>
		</div>
	);
};

export default FooterAbout;
