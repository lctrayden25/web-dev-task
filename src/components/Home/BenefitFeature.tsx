import { apiUrl, type BenefitFeatureType } from "@/utils/api";
import type { Language } from "@/utils/constant";
import { getCountryCode } from "@/utils/helper";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import CustomImage from "../CustomImage";
import Spinner from "../Spinner";
import ErrorDisplay from "../ErrorDisplay";

const BenefitFeature = () => {
	const [activeAccordion, setActiveAccordion] = useState<number>(0);
	const { locale } = useParams<{ locale: Language }>();
	const countryCode = useMemo(
		() => getCountryCode(locale as Language),
		[locale]
	);
	const { data, isLoading, error } = useQuery<BenefitFeatureType>({
		queryKey: ["BenefitsSection", locale],
		queryFn: async () => {
			try {
				const response = await fetch(
					`${apiUrl}/content/BenefitsSection/${countryCode}/${locale}`
				).then((res) => res.json());
				console.log({ response });
				return response;
			} catch (error) {
				console.log(error);
			}
		},
	});

	if (isLoading) return <Spinner />;
	if (error) return <ErrorDisplay message={error.message} />;

	return (
		<div className="relative py-[35px] lg:py-[70px] px-[20px] lg:px-[80px] w-full">
			<div className="relative flex flex-col">
				<h2 className="font-bold text-[24px] md:text-[28px] xl:text-[32px]">
					{data?.title as string}
				</h2>
				<div className="mt-5 flex flex-col gap-[24px]">
					<div className="flex gap-5 flex-wrap">
						{data?.accordions?.map(
							(
								accordion: BenefitFeatureType["accordions"][number],
								index: number
							) => {
								return (
									<button
										key={index}
										className={`border rounded-[100px] px-[16px] py-[12px] cursor-pointer hover:bg-[#DEF6FF] hover:text-[#005371] hover:border-[#26a9d4] ${
											activeAccordion === index
												? "bg-[#DEF6FF] text-[#005371] border-[#26a9d4]"
												: "bg-white text-black border-[#D9D9D9]"
										}`}
										onClick={() => setActiveAccordion(index)}
									>
										{accordion.title}
									</button>
								);
							}
						)}
					</div>
					<div className="flex flex-col md:flex-row rounded-[30px] overflow-hidden">
						{data?.accordions?.map(
							(
								accordion: BenefitFeatureType["accordions"][number],
								index: number
							) => {
								return (
									<div
										key={index}
										className={`${
											index % 2 === 0 ? `bg-[#DEF6FF]` : `bg-[#ece2c1]`
										} p-[40px] ${
											activeAccordion === index ? "w-[924px]" : "w-[100px]"
										} transition-all duration-800`}
										onClick={() => setActiveAccordion(index)}
									>
										{activeAccordion === index && (
											<div className="grid grid-cols-2 gap-[24px]">
												<div className="flex flex-col gap-[24px]">
													<div className="flex flex-col gap-[16px] bg-white p-[40px] rounded-[15px]">
														<CustomImage
															src={accordion.icon}
															alt={accordion.title}
															className="w-full h-full max-w-[36px] max-h-[40px]"
														/>
														<h3 className="font-bold text-[24px] md:text-[28px] xl:text-[32px]">
															{accordion.title}
														</h3>
														<p className="text-[16px] text-[#666666] leading-[20px]">
															{accordion.paragraph}
														</p>
													</div>

													<div className="flex flex-col gap-[24px] mt-8">
														{accordion?.apps?.length > 0 &&
															accordion?.apps?.map(
																(
																	accIcon: BenefitFeatureType["accordions"][number]["apps"][number]
																) => {
																	return (
																		<div className="flex items-center gap-[24px]">
																			<div className="p-[20px] bg-white rounded-full">
																				<CustomImage
																					src={accIcon?.iconUrl}
																					alt={accIcon?.iconId || ""}
																					className="w-full h-full max-w-[36px] max-h-[36px]"
																				/>
																			</div>
																			<span>
																				{accIcon?.text ||
																					accIcon?.iconId ||
																					"App Name"}
																			</span>
																		</div>
																	);
																}
															)}
													</div>
												</div>

												<CustomImage
													// srcSet="srcSet={accordion.image ?? undefined}"
													// src={accordion.image ?? undefined}
													src={undefined}
													alt={accordion?.title || ""}
													className="w-full h-full max-w-[360px] max-h-[460px] rounded-[10px] object-center"
												/>
											</div>
										)}
									</div>
								);
							}
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BenefitFeature;
