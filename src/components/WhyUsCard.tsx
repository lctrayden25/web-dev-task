import { memo } from "react";
import CustomImage from "./CustomImage";

type WhyUsCardProps = {
	id: string;
	title: string;
	description: string;
	icon: string;
};

const WhyUsCard = ({ title, description, icon, id }: WhyUsCardProps) => {
	return (
		<div
			key={id}
			className="bg-white p-[20px] rounded-[8px] flex flex-col gap-[15px] border border-[#BFC8D0] hover:shadow-md transition-all duration-300"
		>
			<div className="flex flex-row md:flex-col gap-[10px] md:gap-[24px] items-center md:items-start">
				<CustomImage
					src={icon}
					alt={title}
					className="w-full h-full max-w-[40px] max-h-[40px]"
				/>
				<h3 className="text-[18px] md:text-[24px] font-bold">{title}</h3>
			</div>
			<p className="text-sm text-gray-500 text-[14px]">{description}</p>
		</div>
	);
};

export default memo(WhyUsCard);
