import { cn } from "@/utils/helper";
import React from "react";

type CustomButtonProps = {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
};

const CustomButton = ({
	children,
	className,
	onClick,
	...props
}: CustomButtonProps) => {
	return (
		<button
			className={cn(
				"bg-[#B02235] text-white px-[16px] py-[8px] rounded-[8px] cursor-pointer hover:opacity-60",
				className
			)}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
};

export default CustomButton;
