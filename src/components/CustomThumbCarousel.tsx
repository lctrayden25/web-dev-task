import { useState } from "react";
import CustomImage from "./CustomImage";

type CustomThumbCarouselProps = {
	slides: string[];
};

const CustomThumbCarousel = ({ slides }: CustomThumbCarouselProps) => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleSelect = (index: number) => {
		setSelectedIndex(index);
	};

	return (
		<div className="relative flex flex-col gap-[16px]">
			<div className="flex justify-center items-center border border-gray-200 rounded-[1.8rem]">
				<CustomImage
					src={slides[selectedIndex]}
					alt={`slide ${selectedIndex + 1}`}
					className="w-full md:w-[464px] h-full md:h-[464px] rounded-[1.8rem] object-contain"
				/>
			</div>
			<div className="flex gap-[16px]">
				{slides.map((slide, index) => (
					<button
						key={index}
						onClick={() => handleSelect(index)}
						className={`${
							selectedIndex === index ? "border-2 border-primary" : ""
						} w-[80px] h-[80px] rounded-[8px] overflow-hidden cursor-pointer hover:opacity-60 transition-opacity duration-300`}
					>
						<CustomImage
							src={slide}
							alt={`slide ${index}`}
							className="w-full h-full object-cover"
						/>
					</button>
				))}
			</div>
		</div>
	);
};

export default CustomThumbCarousel;
