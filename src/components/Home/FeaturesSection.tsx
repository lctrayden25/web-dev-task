import { apiUrl, type FeaturesSectionType } from "@/utils/api";
import { useSuspenseQuery } from "@tanstack/react-query";
import Spinner from "../Spinner";
import type { Language } from "@/utils/constant";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { getCountryCode } from "@/utils/helper";
import { toast } from "react-toastify";
import ErrorDisplay from "../ErrorDisplay";

const FeaturesSection = () => {
	const { locale } = useParams<{ locale: Language }>();
	const countryCode = useMemo(
		() => getCountryCode(locale as Language),
		[locale]
	);
	const { data, isLoading, error } = useSuspenseQuery<FeaturesSectionType>({
		queryKey: ["FeaturesSection", locale],
		queryFn: async () => {
			try {
				if (!locale || !countryCode) {
					toast.error("Locale or countryCode is required");
					return;
				}
				const response = await fetch(
					`${apiUrl}/content/FeaturesSection/${countryCode}/${locale}`
				).then((res) => res.json());

				return response;
			} catch (error) {
				console.log(error);
			}
		},
	});

	const featuresData = data?.features ?? undefined;

	if (isLoading) return <Spinner />;
	if (error) toast.error(error?.message || "Something went wrong");
	if ((data as unknown as { message: string })?.message)
		return (
			<ErrorDisplay message={error?.message || "Oops! Something went wrong"} />
		);

	return (
		<div className="relative py-[35px] lg:py-[70px] px-[20px] lg:px-[80px] w-full">
			<div className="relative flex flex-col gap-[24px]">
				<h2 className="font-bold text-[24px] md:text-[28px] xl:text-[32px]">
					{data?.title as string}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
					{featuresData?.map(
						(feature: FeaturesSectionType["features"][number]) => {
							return (
								<div
									key={feature?.title}
									className="bg-[#F8FAFD] p-[20px] rounded-[8px] flex flex-col gap-[15px]"
								>
									<div className="flex flex-row md:flex-col gap-[10px] md:gap-[24px] items-center md:items-start">
										<img
											src={feature?.icon}
											alt={feature?.title}
											className="max-w-[30px] max-h-[30px] md:max-w-[48px] md:max-h-[48px] w-full h-full"
										/>
										<h3 className="text-[18px] md:text-[24px] font-bold">
											{feature?.title}
										</h3>
									</div>
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
