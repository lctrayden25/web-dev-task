// import React from "react";

// type TravelerSayCardProps = {
// 	title: string;
// 	description: string;
// 	image: string;
// 	isSpan: boolean;
// };

// const TravelerSayCard = ({
// 	title,
// 	description,
// 	image,
// 	isSpan = false,
// }: TravelerSayCardProps) => {
// 	return <div className="relative"></div>;
// };

const TravelerSaySection = () => {
	return (
		<div className="relative py-[70px] px-[20px] lg:px-[80px] w-full flex flex-col items-center justify-between mt-10">
			<div className="flex flex-col gap-4 justify-center items-center">
				<div className="font-bold text-[24px] md:text-[28px] xl:text-[32px]">
					Hear what travellers say about us
				</div>
				<div className="font-light text-[18px]">
					Your United States of America eSIM features
				</div>
			</div>
		</div>
	);
};

export default TravelerSaySection;
