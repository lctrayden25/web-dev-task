import { dummyWhyUsSectionData, type WhyUsSectionType } from "@/utils/mockData";
import whyUsSectionLogo from "@/assets/images/why-us-logo.png";
import whyUsSectionBg from "@/assets/images/why-us-bg.png";

const WhyUsSection = () => {
	const whyUsSectionData = dummyWhyUsSectionData as WhyUsSectionType;
	const firstThreeFeatures = whyUsSectionData?.features?.slice(0, 3);
	const lastThreeFeatures = whyUsSectionData?.features?.slice(3);
	console.log({ firstThreeFeatures, lastThreeFeatures });

	return (
		<div className="relative py-[70px] px-[80px] w-full bg-cover bg-center flex flex-col gap-[24px]">
			<div className="font-bold text-[32px]">{whyUsSectionData?.title}</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[14px]">
				<div className="flex flex-col gap-[24px]">
					{firstThreeFeatures?.map((item) => (
						<div
							key={item.id}
							className="bg-white p-[20px] rounded-[8px] flex flex-col gap-[15px] border border-[#BFC8D0] max-w-[421px]"
						>
							<img
								src={item.icon}
								alt={item.title}
								className="w-full h-full max-w-[40px] max-h-[40px]"
							/>
							<h3 className="text-lg font-bold">{item.title}</h3>
							<p className="text-sm text-gray-500 text-[14px]">
								{item.description}
							</p>
						</div>
					))}
				</div>
				<div
					className="relative h-full rounded-[8px] flex items-center justify-center"
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
					{lastThreeFeatures?.map((item) => (
						<div
							key={item.id}
							className="bg-white p-[20px] rounded-[8px] flex flex-col gap-[15px] border border-[#BFC8D0]"
						>
							<img
								src={item.icon}
								alt={item.title}
								className="w-full h-full max-w-[40px] max-h-[40px]"
							/>
							<h3 className="text-lg font-bold">{item.title}</h3>
							<p className="text-sm text-gray-500 text-[14px]">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WhyUsSection;
