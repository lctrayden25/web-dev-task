import BenefitFeature from "@/components/Home/BenefitFeature";
import FeaturesSection from "@/components/Home/FeaturesSection";
import GetPackage from "@/components/Home/GetPackage";
import HowWeCompare from "@/components/Home/HowWeCompare";
import ProductSection from "@/components/Home/ProductSection";
import Layout from "@/components/Layout";

const Home = () => {
	return (
		<Layout>
			<ProductSection />
			<BenefitFeature />
			<FeaturesSection />
			<GetPackage />
			<HowWeCompare />
		</Layout>
	);
};

export default Home;
