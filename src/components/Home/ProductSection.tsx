import productSectionBg from "@/assets/images/product-section-bg.png";
import CustomThumbCarousel from "../CustomThumbCarousel";
import StarIcon from "@/assets/icon/star.svg";
import CustomImage from "../CustomImage";
import PackageCard from "../Product/PackageCard";

import CustomTab from "../CustomTab";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { dummyProductData } from "@/utils/mock/productData";
import { Language, ratingMap } from "@/utils/constant";

const ProductSection = () => {
	const { t } = useTranslation();
	const { locale } = useParams<{ locale: Language }>();
	const productData = dummyProductData?.[0] ?? undefined;

	const { name, rating, reviews, meta, thumbnails, packages, features } =
		productData ?? {};

	const tabNames = meta?.map((item) => {
		return { name: item?.title?.[locale as Language], id: item?.id };
	});
	const tabContents = meta?.map((item) => {
		return { content: item?.content?.[locale as Language], id: item?.id };
	});
	console.log({ tabNames, tabContents });

	return (
		<div
			className="relative py-[35px] lg:py-[70px] px-[20px] lg:px-[80px] w-full bg-cover bg-center flex flex-col md:flex-row gap-[50px]"
			style={{ backgroundImage: `url(${productSectionBg})` }}
		>
			<div className="max-w-auto md:max-w-[364px] xl:max-w-[464px] w-full">
				<CustomThumbCarousel slides={thumbnails ?? []} />
			</div>
			<div className="flex flex-col gap-[24px]">
				<h2 className="font-bold text-[24px] md:text-[28px] xl:text-[36px] w-full">
					{name?.[locale as Language]}
				</h2>
				<div className="flex gap-[20px] flex-wrap">
					<div className="flex gap-[20px] items-center">
						<span className="text-[16px] font-bold">{ratingMap[rating]}</span>
						<div className="flex gap-[5px]">
							{Array.from({ length: rating }).map((_, index) => (
								<CustomImage key={index} src={StarIcon} alt="star" />
							))}
						</div>
					</div>
					<div className="flex gap-[10px] items-center">
						<span className="text-[16px] font-bold">Base on</span>
						<div className="">
							{reviews} {t("reviews")}
						</div>
					</div>
				</div>
				<div className="mt-5 flex flex-col gap-[10px]">
					<h3 className="font-bold text-[20px]">
						Choose your USA eSIM package
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px]">
						{packages?.map((item) => (
							<PackageCard
								key={item.id as string}
								id={item.id as string}
								days={item.days as number}
								price={item.price as number}
								amount={item.amount as number}
								isBestValue={item.isBestValue as boolean}
							/>
						))}
					</div>
				</div>

				<div className="mt-5 flex flex-wrap md:flex-nowrap flex-col md:flex-row gap-[24px] items-center">
					<div className="grid grid-cols-2 md:grid-cols-3 gap-[24px]">
						{features?.map((feature) => (
							<div
								key={feature?.id as string}
								className="flex items-center gap-[10px] w-full md:w-auto"
							>
								<div className="flex justify-center items-center bg-white rounded p-[5px] w-[48px] h-[48px] border border-[#D9D9D9]">
									<CustomImage
										src={feature?.icon as string}
										alt="shield tick"
										className="w-[24px] h-[24px]"
									/>
								</div>
								<span>{feature?.title?.[locale as Language]}</span>
							</div>
						))}
					</div>
					<button className="border border-primary w-full p-[17px] rounded-[8px] text-center text-black max-w-full md:max-w-[149px] font-medium cursor-pointer hover:opacity-60">
						{t("checkDeviceCompatibility")}
					</button>
				</div>

				<div className="mt-5">
					<CustomTab
						tabs={tabNames ?? []}
						render={tabContents ?? []}
						activeTab={tabNames?.[0]?.id ?? ""}
						setActiveTab={(tab) => console.log(tab)}
					/>
				</div>

				<div className="mt-1">
					<Link to="/product/1" className="text-[#B02235] font-bold">
						{t("readMore")}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductSection;
