import { apiUrl, type BenefitFeatureType } from "@/utils/api";
import type { Language } from "@/utils/constant";
import { getCountryCode } from "@/utils/helper";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import CustomImage from "../CustomImage";
import Spinner from "../Spinner";
import { toast } from "react-toastify";
const accordionBackgroundColor = [
	"#EFFBFF",
	"#DEF6FF",
	"#DAFFFD",
	"#FFEAD9",
	"#F4F3FF",
];

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
				if (!locale || !countryCode) {
					toast.error("Locale or countryCode is required");
					return;
				}
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
	if (error) toast.error(error?.message || "Something went wrong");

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
										className={`p-[20px] md:p-[40px] ${
											activeAccordion === index
												? "w-full lg:w-[924px]"
												: "w-full lg:w-[100px]"
										} transition-all duration-800 cursor-pointer`}
										onClick={() => setActiveAccordion(index)}
										style={{
											backgroundColor: `${accordionBackgroundColor?.[index]}`,
										}}
									>
										{activeAccordion === index && (
											<div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
												<div className="flex flex-col gap-[10px] md:gap-[24px]">
													<div className="flex flex-col gap-[16px] bg-white p-[20px] md:p-[40px] rounded-[15px]">
														<div className="flex flex-row md:flex-col gap-[10px] md:gap-[24px]">
															<CustomImage
																src={accordion.icon}
																alt={accordion.title}
																className="w-full h-full max-w-[24px] max-h-[24px] md:max-w-[36px] md:max-h-[40px]"
															/>
															<h3 className="font-bold text-[18px] md:text-[28px] xl:text-[32px]">
																{accordion.title}
															</h3>
														</div>
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
																			<div className="p-[10px] md:p-[20px] bg-white rounded-full">
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
													className="hidden md:block w-full h-full max-w-[360px] max-h-[460px] rounded-[10px] object-center"
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
