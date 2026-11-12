import { Clock } from "lucide-react";

const FooterHours = () => {
	return (
		<div className="flex flex-col items-start">
			<div className="flex items-center gap-2">
				<h3 className="text-xl font-semibold text-white">Opening Hours</h3>
				<Clock size={16} className="text-[#c4a574]" />
			</div>
			<p className="mt-4 max-w-xs text-xs leading-5 text-white/70">
				Freshly brewed roasts, pour-overs, and cozy seating throughout the week:
			</p>

			<div className="mt-5 space-y-3 text-xs text-white/85 w-full">
				<div className="rounded-lg bg-white/5 p-2.5 border border-white/10 space-y-2">
					<div className="flex items-center justify-between">
						<span className="text-white/60">Monday &ndash; Friday</span>
						<span className="font-semibold text-[#e2c8ae]">07:00 AM &ndash; 08:00 PM</span>
					</div>
					<div className="flex items-center justify-between border-t border-white/10 pt-2">
						<span className="text-white/60">Saturday &ndash; Sunday</span>
						<span className="font-semibold text-[#e2c8ae]">08:00 AM &ndash; 09:00 PM</span>
					</div>
				</div>

				<div className="rounded-lg bg-white/5 p-2.5 border border-white/10 space-y-1.5">
					<div className="text-[10px] uppercase tracking-wider text-white/50 font-semibold">
						Specialty Hours
					</div>
					<div className="flex items-center justify-between text-[11px]">
						<span className="text-white/70">Alt Curbside Pickup:</span>
						<span className="text-[#c4a574]">Till 09:30 PM Daily</span>
					</div>
					<div className="flex items-center justify-between text-[11px]">
						<span className="text-white/70">Cupping &amp; Tasting:</span>
						<span className="text-[#c4a574]">Thu&ndash;Sun 10am&ndash;2pm</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterHours;
