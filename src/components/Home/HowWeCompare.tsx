import { apiUrl } from "@/utils/api";
import type { Language } from "@/utils/constant";
import { getCountryCode } from "@/utils/helper";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import tableOur from "@/assets/icon/table-our.svg";
import CustomImage from "../CustomImage";
import tick from "@/assets/icon/tick.svg";
import cross from "@/assets/icon/cross.svg";
import ErrorDisplay from "../ErrorDisplay";

const HowWeCompare = () => {
	const { locale } = useParams<{ locale: Language }>();
	const countryCode = useMemo(
		() => getCountryCode(locale as Language),
		[locale]
	);
	const { data, error } = useSuspenseQuery({
		queryKey: ["HowWeCompare", locale],
		queryFn: async () => {
			try {
				if (!locale || !countryCode) {
					toast.error("Locale or countryCode is required");
					return;
				}
				const response = await fetch(
					`${apiUrl}/content/HowWeCompare/${countryCode}/${locale}`
				).then((res) => res.json());

				return response;
			} catch (error) {
				console.log(error);
			}
		},
	});

	if ((data as unknown as { message: string })?.message)
		return (
			<ErrorDisplay message={error?.message || "Oops! Something went wrong"} />
		);

	return (
		<div className="relative py-[35px] lg:py-[70px] px-[20px] lg:px-[80px] w-full flex flex-col items-center justify-between">
			<div className="font-bold text-[24px] md:text-[28px] xl:text-[32px]">
				{data?.title as string}
			</div>
			<div>
				<table className="my-10 px-2 block">
					<thead className="border-b border-gray-300">
						<tr>
							<th></th>
							{data?.headers?.map((header: string, index: number) => {
								const thBackgroundColor = index === 0 ? `#FBE6E6` : "white";
								return (
									<th
										key={header}
										className="text-center w-[150px] px-2 py-4 rounded-t-3xl text-[12px] md:text-[16px] font-medium"
										style={{ backgroundColor: thBackgroundColor }}
									>
										{index === 0 ? (
											<CustomImage
												src={tableOur}
												alt="table-our"
												className="w-[100px] h-auto md:w-[197px] md:h-[22px]"
											/>
										) : (
											header
										)}
									</th>
								);
							})}
						</tr>
					</thead>
					<tbody>
						{data?.features?.map(
							(
								feature: {
									title: string;
									our: string;
									other: string;
									wifi: string;
									roaming: string;
								},
								index: number
							) => {
								const iconRender = (data: string) => {
									return data === "Yes" ? (
										<CustomImage
											src={tick}
											alt="tick"
											className="w-[20px] h-[20px] mx-auto"
										/>
									) : (
										<CustomImage
											src={cross}
											alt="cross"
											className="w-[20px] h-[20px] mx-auto"
										/>
									);
								};
								return (
									<tr key={feature?.title} className="border-b border-gray-300">
										<td className="px-2 py-4 w-[320px] text-[14px] md:text-[16px]">
											{feature?.title ?? "-"}
										</td>
										<td
											className="px-2 py-4 text-center "
											style={{
												backgroundColor:
													index % 2 === 0 ? "#FBEFEF" : "#FBE6E6",
											}}
										>
											{iconRender(feature?.our)}
										</td>
										<td className="px-2 py-4 text-center">
											{iconRender(feature?.other)}
										</td>
										<td className="px-2 py-4 text-center">
											{iconRender(feature?.wifi)}
										</td>
										<td className="px-2 py-4 text-center">
											{iconRender(feature?.roaming)}
										</td>
									</tr>
								);
							}
						)}
						<tr>
							<td></td>
							<td
								className="p-4 text-center rounded-b-3xl"
								style={{ backgroundColor: "#FBE6E6" }}
							></td>
							<td className="p-4 text-center"></td>
							<td className="p-4 text-center"></td>
							<td className="p-4 text-center"></td>
							<td className="p-4 text-center"></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default HowWeCompare;
