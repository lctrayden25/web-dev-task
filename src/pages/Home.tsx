import BenefitFeature from "@/components/Home/BenefitFeature";
import FeaturesSection from "@/components/Home/FeaturesSection";
import GetPackage from "@/components/Home/GetPackage";
import HowWeCompare from "@/components/Home/HowWeCompare";
import ProductSection from "@/components/Home/ProductSection";
import WhyUsSection from "@/components/Home/WhyUsSection";
import Layout from "@/components/Layout";

const Home = () => {
	return (
		<Layout>
			<ProductSection />
			<BenefitFeature />
			<FeaturesSection />
			<GetPackage />
			<HowWeCompare />
			<WhyUsSection />
		</Layout>
	);
};

export default Home;
