// import { apiUrl } from "@/utils/api";
// import type { Language } from "@/utils/constant";
// import { getCountryCode } from "@/utils/helper";
// import { useQuery } from "@tanstack/react-query";
// import { useMemo } from "react";
// import { useParams } from "react-router-dom";

const HowWeCompare = () => {
	// const { locale } = useParams<{ locale: Language }>();
	// const countryCode = useMemo(
	// 	() => getCountryCode(locale as Language),
	// 	[locale]
	// );
	// const { data } = useQuery<unknown>({
	// 	queryKey: ["HowWeCompare", locale],
	// 	queryFn: () =>
	// 		fetch(`${apiUrl}/content/HowWeCompare/${countryCode}/${locale}`).then(
	// 			(res) => res.json()
	// 		),
	// });

	// console.log({ data });

	return (
		<div className="relative py-[35px] lg:py-[70px] px-[20px] lg:px-[80px] w-full flex flex-col items-center justify-between">
			<div className="font-bold text-[24px] md:text-[28px] xl:text-[32px]">
				How we compare with other eSIM providers
			</div>
		</div>
	);
};

export default HowWeCompare;
