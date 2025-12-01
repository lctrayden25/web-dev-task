import React from "react";
import getPackageBg from "@/assets/images/get-package-bg.png";
import { useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton";

const GetPackage = () => {
	const navigate = useNavigate();
	return (
		<div
			className="relative py-[70px] px-[80px] w-full flex flex-col gap-[24px] items-center justify-center"
			style={{
				backgroundImage: `url(${getPackageBg})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="text-2xl font-light text-[18px]">
				BEST VALUE FOR THE USA
			</div>
			<div className="text-4xl font-bold text-[32px]">
				Get the best value for the USA
			</div>
			<CustomButton>Get Package</CustomButton>
		</div>
	);
};

export default GetPackage;
