import React from "react";
import youMayLikeBg from "@/assets/images/you-may-like-bg.png";
import CustomImage from "../CustomImage";
import CustomButton from "../CustomButton";

const YouMayLike = () => {
	return (
		<div
			className="relative py-[70px] px-[80px] w-full flex flex-col gap-[24px] items-center justify-center max-h-[489px]"
			style={{
				backgroundImage: `url(${youMayLikeBg})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="max-w-[1280px] w-full flex gap-[107px]">
				<CustomImage className="max-w-[606px] max-h-[389px] w-full h-full rounded-md" />
				<div className="flex flex-col gap-[24px] justify-center">
					<p className="font-light text-[18px]">YOU MAY ALSO LIKE</p>
					<h2 className="font-bold text-[32px]">Europe Regional Package</h2>
					<p className="text-sm text-gray-500 text-[18px]">From $15,99</p>
					<CustomButton>Get packages</CustomButton>
				</div>
			</div>
		</div>
	);
};

export default YouMayLike;
