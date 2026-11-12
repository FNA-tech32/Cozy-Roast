import { MessageSquare, PhoneCall, Mail, MapPin, Truck } from "lucide-react";

const FooterAlternative = () => {
	return (
		<div className="flex flex-col items-start">
			<div className="flex items-center gap-2">
				<h3 className="text-xl font-semibold text-white">Alternative Details</h3>
				<span className="rounded-full bg-[#e2c8ae]/15 px-2 py-0.5 text-[11px] font-medium text-[#e2c8ae] border border-[#e2c8ae]/30">
					Direct Channels
				</span>
			</div>
			<p className="mt-4 max-w-xs text-xs leading-5 text-white/70">
				Need quick orders, event bookings, or delivery help? Reach our dedicated alternative channels:
			</p>

			<div className="mt-5 space-y-3.5 text-xs text-white/85 w-full">
				<a
					href="tel:+15558342699"
					className="flex items-center gap-2.5 rounded-lg bg-white/5 p-2.5 border border-white/10 hover:border-[#e2c8ae]/40 hover:bg-white/10 transition group"
				>
					<PhoneCall size={16} className="text-[#e2c8ae] shrink-0 group-hover:scale-110 transition" />
					<div>
						<span className="block text-[10px] uppercase tracking-wider text-white/50 font-semibold">
							Hotline &amp; WhatsApp
						</span>
						<span className="text-white/90 font-medium">+1 (555) 834-COZY (2699)</span>
					</div>
				</a>

				<a
					href="mailto:orders@cozyroast.com"
					className="flex items-center gap-2.5 rounded-lg bg-white/5 p-2.5 border border-white/10 hover:border-[#e2c8ae]/40 hover:bg-white/10 transition group"
				>
					<Mail size={16} className="text-[#e2c8ae] shrink-0 group-hover:scale-110 transition" />
					<div>
						<span className="block text-[10px] uppercase tracking-wider text-white/50 font-semibold">
							Orders &amp; Quick Dispatch
						</span>
						<span className="text-white/90 font-medium">orders@cozyroast.com</span>
					</div>
				</a>

				<a
					href="mailto:catering@cozyroast.com"
					className="flex items-center gap-2.5 rounded-lg bg-white/5 p-2.5 border border-white/10 hover:border-[#e2c8ae]/40 hover:bg-white/10 transition group"
				>
					<MessageSquare size={16} className="text-[#e2c8ae] shrink-0 group-hover:scale-110 transition" />
					<div>
						<span className="block text-[10px] uppercase tracking-wider text-white/50 font-semibold">
							Catering &amp; Events
						</span>
						<span className="text-white/90 font-medium">catering@cozyroast.com</span>
					</div>
				</a>

				<div className="flex items-start gap-2.5 pt-1 text-white/70">
					<MapPin size={16} className="text-[#e2c8ae] shrink-0 mt-0.5" />
					<div>
						<span className="block text-[10px] uppercase tracking-wider text-white/50 font-semibold">
							Alt Pick-up Hub
						</span>
						<span>Suite 204, Westside Brew Lab, Santa Monica, CA 90401</span>
					</div>
				</div>

				<div className="flex items-center gap-2 pt-1 text-[11px] text-white/60">
					<Truck size={14} className="text-[#e2c8ae]" />
					<span>Delivery via DoorDash &amp; UberEats (@CozyRoast)</span>
				</div>
			</div>
		</div>
	);
};

export default FooterAlternative;
