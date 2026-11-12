import FooterSection from "./components/footer/FooterSection";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/section/hero/HeroSection";
import ProductSection from "./components/section/product/ProductSection";
import ReviewSection from "./components/section/review/ReviewSection";
import ServiceSection from "./components/section/service/ServiceSection";
const App = () => {
	return (
		<div className="bg-[#F5F2EF] flex flex-col min-h-screen flex-1">
			<Navbar />
			<main>
				<section id="home">
					<HeroSection />
				</section>
				<section id="services">
					<ServiceSection />
				</section>
				<section id="menu">
					<ProductSection />
				</section>
				<section id="reviews">
					<ReviewSection />
				</section>
			</main>
			<FooterSection />
		</div>
	);
};

export default App;
