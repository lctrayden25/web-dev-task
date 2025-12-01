import BenefitFeature from "@/components/Home/BenefitFeature";
import FaqSection from "@/components/Home/FaqSection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import GetPackage from "@/components/Home/GetPackage";
import GetTheAppSection from "@/components/Home/GetTheAppSection";
import HowToGetStarted from "@/components/Home/HowToGetStarted";
import HowWeCompare from "@/components/Home/HowWeCompare";
import ProductSection from "@/components/Home/ProductSection";
import ResourceSection from "@/components/Home/ResourceSection";
import TravelerSaySection from "@/components/Home/TravelerSaySection";
import WhyUsSection from "@/components/Home/WhyUsSection";
import YouMayLike from "@/components/Home/YouMayLike";
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
			<HowToGetStarted />
			<YouMayLike />
			<FaqSection />
			<TravelerSaySection />
			<ResourceSection />
			<GetTheAppSection />
		</Layout>
	);
};

export default Home;
