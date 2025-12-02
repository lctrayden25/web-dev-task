import React from "react";
import CustomImage from "../CustomImage";
import switchVerticalIcon from "@/assets/icon/switch-vertical.svg";
import calendarIcon from "@/assets/icon/calendar.svg";
import { cn, getPrice } from "@/utils/helper";

type PackageCardProps = {
	days: number | string;
	price: number;
	amount: number;
	isBestValue?: boolean;
};

const PackageCard = ({
	days,
	price,
	amount,
	isBestValue = false,
}: PackageCardProps) => {
	return (
		<div
			className={cn(
				"relative w-[242px] max-h-[80px] bg-white p-[16px] rounded-[8px] border border-[#D9D9D9] flex items-center justify-between",
				isBestValue ? "border-2 border-blue-700" : ""
			)}
		>
			<div className="flex flex-col gap-[10px]">
				<div className="flex gap-[5px] font-bold">
					<CustomImage
						src={switchVerticalIcon}
						alt="switch vertical"
						className="max-w-[20px] max-h-[20px]"
					/>
					<span>{amount} GB</span>
				</div>
				<div className="flex gap-[5px]">
					<CustomImage
						src={calendarIcon}
						alt="calendar"
						className="max-w-[20px] max-h-[20px]"
					/>
					<span>{days} Days</span>
				</div>
			</div>
			<div className="font-bold">{getPrice(price)}</div>
			{isBestValue && (
				<div className="absolute top-[-10px] right-[5px]">
					<span className="text-white bg-linear-to-r from-[#02D6CC] to-[#0042C4] px-2 py-1 rounded-full text-[15px] font-bold">
						Best Value
					</span>
				</div>
			)}
		</div>
	);
};

export default PackageCard;
