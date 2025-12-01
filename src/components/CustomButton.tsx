import { cn } from "@/utils/helper";
import React from "react";

type CustomButtonProps = {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
};

const CustomButton = ({ children, className, onClick }: CustomButtonProps) => {
	return (
		<button
			className={cn(
				"bg-[#B02235] text-white px-[16px] py-[8px] rounded-[8px] cursor-pointer",
				className
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default CustomButton;
