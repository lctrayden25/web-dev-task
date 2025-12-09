import { dummyResourceData } from "@/utils/mock/resourceData";
import CustomImage from "../CustomImage";
import { Link, useParams } from "react-router-dom";
import type { Language } from "@/utils/constant";
import { useTranslation } from "react-i18next";

const ResourceSection = () => {
	const { t } = useTranslation();
	const { locale } = useParams<{ locale: Language }>();
	const data = dummyResourceData;
	return (
		<div className="relative py-[35px] lg:py-[70px] px-[20px] lg:px-[80px] w-full">
			<div className="relative flex flex-col gap-[24px]">
				<h2 className="font-bold text-[24px] md:text-[28px] xl:text-[32px]">
					{data?.heading?.[locale as Language]}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
					{(data?.items ?? [])?.map((item) => (
						<div
							key={item.id}
							className="bg-[#F8FAFD] p-[20px] rounded-[10px] flex flex-col gap-[15px] hover:shadow-md transition-all duration-300"
						>
							<h3 className="text-lg font-bold">
								{item.title?.[locale as Language]}
							</h3>
							<CustomImage
								src={undefined}
								alt={item.title?.[locale as Language]}
							/>
							<p className="text-[14px]">
								{item.description?.[locale as Language]}
							</p>
							<Link
								to={`/resource/${item.id}`}
								className="text-[14px] hover:underline"
							>
								{t("readMore")}
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ResourceSection;
