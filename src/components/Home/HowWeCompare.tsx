import { apiUrl } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const HowWeCompare = () => {
	const { data, isLoading, error } = useQuery<unknown>({
		queryKey: ["HowWeCompare"],
		queryFn: () =>
			fetch(`${apiUrl}/content/HowWeCompare/US/en-US`).then((res) =>
				res.json()
			),
	});

	// console.log({ data });

	return (
		<div className="relative py-[70px] px-[80px] w-full flex flex-col items-center justify-between">
			<div className="font-bold text-[32px]">
				How we compare with other eSIM providers
			</div>
		</div>
	);
};

export default HowWeCompare;
