import CustomImage from "../CustomImage";
import { dummyTravelerSayData } from "@/utils/mock/travelerSayData";

const TravelerSaySection = () => {
	return (
		<div className="relative py-[35px] px-[20px] lg:px-[80px] w-full flex flex-col items-center justify-between">
			<div className="flex flex-col gap-4 justify-center items-center">
				<div className="font-bold text-[24px] md:text-[28px] xl:text-[32px]">
					Hear what travellers say about us
				</div>
				<div className="font-light text-[18px]">
					Your United States of America eSIM features
				</div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-4">
				{dummyTravelerSayData?.map((item) => (
					<div className="p-5 bg-[#F8FAFD] rounded-lg flex flex-col items-end md:items-start gap-4 max-w-full sm:max-w-[284px] lg:max-w-[284px] hover:shadow-md transition-all duration-300">
						<div className="flex flex-row md:flex-col gap-3">
							<CustomImage
								src={item.avatar}
								alt="avatar"
								className="w-10 h-10"
							/>
							<div className="font-light text-[14px]">{item.description}</div>
						</div>
						<div className="font-bold text-[18px]">{item.name}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TravelerSaySection;
