// import { apiUrl } from "@/utils/api";
// import { useQuery } from "@tanstack/react-query";
// import React from "react";

const BenefitFeature = () => {
	// const { data, isLoading, error } = useQuery({
	// 	queryKey: ["BenefitsSection"],
	// 	queryFn: () =>
	// 		fetch(`${apiUrl}/content/BenefitsSection/US/en-US`).then((res) =>
	// 			res.json()
	// 		),
	// });

	// // console.log({ data });
	return (
		<div className="relative py-[70px] px-[80px] w-full">
			<div className="relative flex flex-col">
				<h2 className="font-bold text-[32px]">
					Use your eSIM fo United States of America to:
				</h2>
			</div>
		</div>
	);
};

export default BenefitFeature;
