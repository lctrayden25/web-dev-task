import { apiUrl, type FeaturesSectionType } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner";
import ErrorDisplay from "../ErrorDisplay";
import type { Language } from "@/utils/constant";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { getCountryCode } from "@/utils/helper";

const FeaturesSection = () => {
	const { locale } = useParams<{ locale: Language }>();
	const countryCode = useMemo(
		() => getCountryCode(locale as Language),
		[locale]
	);
	const { data, isLoading, error } = useQuery<FeaturesSectionType>({
		queryKey: ["FeaturesSection", locale],
		queryFn: () =>
			fetch(`${apiUrl}/content/FeaturesSection/${countryCode}/${locale}`).then(
				(res) => res.json()
			),
	});

	const featuresData = data?.features ?? undefined;

	if (isLoading) return <Spinner />;
	if (error) return <ErrorDisplay message={error.message} />;

	return (
		<div className="relative py-[70px] px-[80px] w-full">
			<div className="relative flex flex-col gap-[24px]">
				<h2 className="font-bold text-[32px]">{data?.title as string}</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
					{featuresData?.map(
						(feature: FeaturesSectionType["features"][number]) => {
							return (
								<div
									key={feature?.title}
									className="bg-[#F8FAFD] p-[20px] rounded-[8px] flex flex-col gap-[15px]"
								>
									<img
										src={feature?.icon}
										alt={feature?.title}
										className="max-w-[48px] max-h-[48px] w-full h-full"
									/>
									<h3 className="text-lg font-bold">{feature?.title}</h3>
									<p className="text-sm text-gray-500 text-[16px]">
										{feature?.paragraph}
									</p>
								</div>
							);
						}
					)}
				</div>
			</div>
		</div>
	);
};

export default FeaturesSection;
