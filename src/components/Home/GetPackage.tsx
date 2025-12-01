import React from "react";
import getPackageBg from "@/assets/images/get-package-bg.png";
import { useNavigate } from "react-router-dom";

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

			<button
				className="bg-[#B02235] text-white px-[16px] py-[8px] rounded-[8px] cursor-pointer"
				onClick={() => navigate("/packages")}
			>
				Get Package
			</button>
		</div>
	);
};

export default GetPackage;
