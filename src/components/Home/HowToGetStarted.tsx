import { apiUrl, type HowToGetStartedType } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner";
import ErrorDisplay from "../ErrorDisplay";
import type { Language } from "@/utils/constant";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { getCountryCode } from "@/utils/helper";

const HowToGetStart = () => {
	const { locale } = useParams<{ locale: Language }>();
	const countryCode = useMemo(
		() => getCountryCode(locale as Language),
		[locale]
	);
	const { data, isLoading, error } = useQuery<HowToGetStartedType>({
		queryKey: ["HowToGetStarted", locale],
		queryFn: () =>
			fetch(`${apiUrl}/content/HowToGetStarted/${countryCode}/${locale}`).then(
				(res) => res.json()
			),
	});

	if (isLoading) return <Spinner />;
	if (error) return <ErrorDisplay message={error.message} />;

	return (
		<div className="relative py-[35px] lg:py-[70px] px-[20px] lg:px-[80px] w-full">
			<div className="relative flex flex-col gap-[24px]">
				<h2 className="font-bold text-[24px] md:text-[28px] xl:text-[32px]">
					{data?.title as string}
				</h2>
				<p className="text-sm text-gray-500 text-[18px]">{`Get started in ${data?.steps?.length} easy steps`}</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
					{data?.steps?.map((step) => (
						<div
							key={step.title}
							className="bg-[#F8FAFD] p-[20px] rounded-[10px] flex flex-col gap-[15px] hover:shadow-md transition-all duration-300"
						>
							<h3 className="text-lg font-bold">{step.title}</h3>
							<img src={step.image} alt={step.title} />
							<p className="text-sm text-gray-500 text-[14px]">
								{step.paragraph}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default HowToGetStart;
