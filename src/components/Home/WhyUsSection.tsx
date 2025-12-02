import {
	dummyWhyUsSectionData,
	type WhyUsSectionType,
} from "@/utils/mock/whyUsData";
import whyUsSectionLogo from "@/assets/images/why-us-logo.png";
import whyUsSectionBg from "@/assets/images/why-us-bg.png";
import WhyUsCard from "../WhyUsCard";

const WhyUsSection = () => {
	const whyUsSectionData = dummyWhyUsSectionData as WhyUsSectionType;
	const firstThreeFeatures = whyUsSectionData?.features?.slice(0, 3);
	const lastThreeFeatures = whyUsSectionData?.features?.slice(3);

	return (
		<div className="relative py-[70px] px-[20px] lg:px-[80px] w-full bg-cover bg-center flex flex-col gap-[24px]">
			<div className="font-bold text-[32px]">{whyUsSectionData?.title}</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[14px]">
				<div className="flex flex-col gap-[24px]">
					{firstThreeFeatures?.map((item) => WhyUsCard({ ...item }))}
				</div>
				<div
					className="relative h-full rounded-[8px] items-center justify-center hidden lg:flex"
					style={{
						backgroundImage: `url(${whyUsSectionBg})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
				>
					<img
						src={whyUsSectionLogo}
						alt="why-us-logo"
						className="w-full h-auto"
					/>
				</div>
				<div className="flex flex-col gap-[24px]">
					{lastThreeFeatures?.map((item) => WhyUsCard({ ...item }))}
				</div>
			</div>
		</div>
	);
};

export default WhyUsSection;
