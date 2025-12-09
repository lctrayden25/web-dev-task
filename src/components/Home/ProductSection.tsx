import productSectionBg from "@/assets/images/product-section-bg.png";
import CustomThumbCarousel from "../CustomThumbCarousel";
import StarIcon from "@/assets/icon/star.svg";
import CustomImage from "../CustomImage";
import PackageCard from "../Product/PackageCard";
import mobileCountryFlag from "@/assets/icon/mobile-icon.svg";
import mobileEasy from "@/assets/icon/mobile-easy.svg";
import mobileFast from "@/assets/icon/mobile-fast.svg";
import mobileGreat from "@/assets/icon/mobile-great.svg";
import iconArrowLeft from "@/assets/icon/icon-left.svg";
import countries from "@/assets/icon/countries.svg";
import moreCountries from "@/assets/icon/moreCountries.svg";

import CustomTab from "../CustomTab";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { dummyProductData } from "@/utils/mock/productData";
import { Language, ratingMap } from "@/utils/constant";
import frameIcon from "@/assets/icon/frame.svg";
import CustomButton from "../CustomButton";

const ProductMobileSection = ({ icon, alt }: { icon: string; alt: string }) => {
	return (
		<div className="flex flex-col items-center justify-center gap-[8px]">
			<CustomImage src={icon} alt={alt} className="w-[40px] h-[40px]" />
			<span className="text-[16px] font-normal text-center">{alt}</span>
		</div>
	);
};

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

	return (
		<div
			className="relative lg:py-[70px]  lg:px-[80px] w-full bg-cover bg-center flex flex-col md:flex-row md:gap-[50px]"
			style={{ backgroundImage: `url(${productSectionBg})` }}
		>
			{/* show on desktop */}
			<div className="hidden md:block max-w-auto md:max-w-[364px] xl:max-w-[464px] w-full">
				<CustomThumbCarousel slides={thumbnails ?? []} />
			</div>

			{/* show on mobile */}
			<div className="relative flex md:hidden flex-col items-center justify-center bg-blue-200 w-full h-[283px] ">
				<CustomImage
					src={mobileCountryFlag}
					alt="mobile country flag"
					className="w-[48px] h-[48px] my-[12px]"
				/>
				<h3 className="text-[20px] font-bold py-[8px] px-[20px]">
					United States of America
				</h3>
				<button
					onClick={() => console.log("details")}
					className="bg-white text-[16px] py-[8px] px-[11px] rounded-[21px] w-[108px] shadow-md font-bold mb-[16px]"
				>
					Details
				</button>
				<div className="grid grid-cols-3 items-baseline py-[16px] px-[20px]">
					<ProductMobileSection icon={mobileFast} alt="Fast internet" />
					<ProductMobileSection icon={mobileGreat} alt="Great coverage" />
					<ProductMobileSection icon={mobileEasy} alt="Easy to use" />
				</div>
				<div className="absolute top-[20px] left-[40px]">
					<button
						onClick={() => alert("back")}
						className="cursor-pointer hover:opacity-60 transition-opacity duration-300"
					>
						<CustomImage
							src={iconArrowLeft}
							alt="arrow left"
							className="w-[6px] h-[12px]"
						/>
					</button>
				</div>
			</div>

			<div className="flex flex-col gap-[24px] px-[20px]">
				<h2 className="hidden md:block font-bold text-[24px] md:text-[28px] xl:text-[36px] w-full">
					{name?.[locale as Language]}
				</h2>
				<div className="hidden md:flex gap-[20px] flex-wrap">
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
					<h3 className="hidden md:block font-bold text-[20px]">
						Choose your USA eSIM package
					</h3>
					<div className="flex md:hidden justify-between">
						<h3 className="font-bold text-[20px]">Plans</h3>
						<button className="rounded-[31px] shadow-md bg-white px-[30px] py-[7.5px] cursor-pointer hover:opacity-60">
							USD
						</button>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px] mt-[16px]">
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

				{/* show on desktop */}
				<>
					<div className="mt-5 hidden md:flex flex-wrap md:flex-nowrap flex-col md:flex-row gap-[24px] items-center">
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

					<div className="mt-5 hidden md:block">
						<CustomTab
							tabs={tabNames ?? []}
							render={tabContents ?? []}
							activeTab={tabNames?.[0]?.id ?? ""}
							setActiveTab={(tab) => console.log(tab)}
						/>
					</div>

					<div className="mt-1 hidden md:block">
						<Link to="/product/1" className="text-[#B02235] font-bold">
							{t("readMore")}
						</Link>
					</div>
				</>

				{/* show on mobile */}
				<div className="flex md:hidden flex-col ">
					<div className="flex flex-col gap-[5px]">
						<h3 className="text-[20px] font-bold">Need more coverage?</h3>
						<p className="text-[16px] font-normal">
							Check out our regional packages instead
						</p>
					</div>
					<div className="grid grid-cols-2 gap-[24px] my-4">
						<div className="flex flex-col gap-[10px] p-[10px] bg-white rounded-[6px] border border-[#D9D9D9]">
							<CustomImage src={frameIcon} alt="mobile country flag" />
							<span className="text-[16px] justify-between font-normal">
								Europe
							</span>
							<div className="flex justify-between p-[8px] border border-[#D9D9D9] rounded-[6px]">
								<button>
									<CustomImage src={countries} alt="countries" />
								</button>
								<div className="flex gap-[5px]">
									<span>60</span>
									<CustomImage src={moreCountries} alt="more countries" />
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-[10px] p-[10px] bg-white rounded-[6px] border border-[#D9D9D9]">
							<CustomImage src={frameIcon} alt="mobile country flag" />
							<span className="text-[16px] font-normal">Europe</span>
							<div className="flex justify-between p-[8px] border border-[#D9D9D9] rounded-[6px]">
								<button>
									<CustomImage src={countries} alt="countries" />
								</button>
								<div className="flex gap-[5px]">
									<span>60</span>
									<CustomImage src={moreCountries} alt="more countries" />
								</div>
							</div>
						</div>
					</div>
					<CustomButton
						onClick={() => console.log("view all")}
						className="max-w-[150px]"
					>
						{t("readMore")}
					</CustomButton>
				</div>
			</div>
		</div>
	);
};

export default ProductSection;
