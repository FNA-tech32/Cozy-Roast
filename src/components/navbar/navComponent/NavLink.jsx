const NavLink = ({ isMobile = false }) => {
	const containerClass = isMobile
		? "flex flex-col gap-4"
		: "flex items-center justify-center gap-4 sm:gap-6 lg:gap-8";

	return (
		<div className={containerClass}>
			<a
				href="#home"
				className="text-sm sm:text-base text-[#6B3E26] hover:text-[#C89B6D] transition text-left cursor-pointer"
			>
				Home
			</a>
			<a
				href="#services"
				className="text-sm sm:text-base text-[#6B3E26] hover:text-[#C89B6D] transition text-left cursor-pointer"
			>
				Services
			</a>
			<a
				href="#menu"
				className="text-sm sm:text-base text-[#6B3E26] hover:text-[#C89B6D] transition text-left cursor-pointer"
			>
				Menu
			</a>
			<a
				href="#reviews"
				className="text-sm sm:text-base text-[#6B3E26] hover:text-[#C89B6D] transition text-left cursor-pointer"
			>
				Reviews
			</a>
			<a
				href="#contact"
				className="text-sm sm:text-base text-[#6B3E26] hover:text-[#C89B6D] transition text-left cursor-pointer"
			>
				Contact
			</a>
		</div>
	);
};

export default NavLink;
