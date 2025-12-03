import productSectionBg from "@/assets/images/product-section-bg.png";
import productThumb from "@/assets/images/product-thumb.jpg";
import placeholderImage from "@/assets/images/placeholder.png";
import CustomThumbCarousel from "../CustomThumbCarousel";
import StarIcon from "@/assets/icon/star.svg";
import CustomImage from "../CustomImage";
import PackageCard from "../Product/PackageCard";

import creditCardIcon from "@/assets/icon/credit-card.svg";
import headphoneIcon from "@/assets/icon/headphones.svg";
import shieldIcon from "@/assets/icon/shield-tick.svg";
import CustomTab from "../CustomTab";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const dummyThumbCarouselData = [
	productThumb,
	placeholderImage,
	productThumb,
	productThumb,
	placeholderImage,
];

const DescriptionTabRender = () => {
	return (
		<div>
			<ul className="list-disc pl-[20px]">
				<li>Uses [Network1] and [Network2] in [country]</li>
				<li>Reliable nationwide coverage</li>
				<li>4G/5G data speeds</li>
				<li>Hotspot / tethering allowed</li>
			</ul>
		</div>
	);
};

const ProductSection = () => {
	const { t } = useTranslation();

	return (
		<div
			className="relative py-[35px] lg:py-[70px] px-[20px] lg:px-[80px] w-full bg-cover bg-center flex flex-col md:flex-row gap-[50px]"
			style={{ backgroundImage: `url(${productSectionBg})` }}
		>
			<div className="max-w-auto md:max-w-[364px] xl:max-w-[464px] w-full">
				<CustomThumbCarousel slides={dummyThumbCarouselData} />
			</div>
			<div className="flex flex-col gap-[24px]">
				<h2 className="font-bold text-[24px] md:text-[28px] xl:text-[36px] w-full">
					eSIM for the Saint Vincent & Grenadines
				</h2>
				<div className="flex gap-[20px] flex-wrap">
					<div className="flex gap-[20px] items-center">
						<span className="text-[16px] font-bold">Excellent</span>
						<div className="flex gap-[5px]">
							<CustomImage src={StarIcon} alt="star" />
							<CustomImage src={StarIcon} alt="star" />
							<CustomImage src={StarIcon} alt="star" />
							<CustomImage src={StarIcon} alt="star" />
							<CustomImage src={StarIcon} alt="star" />
						</div>
					</div>
					<div className="flex gap-[10px] items-center">
						<span className="text-[16px] font-bold">Base on</span>
						<div className="">1,764 Reviews</div>
					</div>
				</div>
				<div className="mt-5 flex flex-col gap-[10px]">
					<h3 className="font-bold text-[20px]">
						Choose your USA eSIM package
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px]">
						<PackageCard days={14} price={1.99} amount={5} />
						<PackageCard days={30} price={6.99} amount={10} />
						<PackageCard
							days={22}
							price={11.99}
							amount={15}
							isBestValue={true}
						/>
						<PackageCard days={14} price={1.99} amount={5} />
						<PackageCard days={30} price={6.99} amount={10} />
						<PackageCard days={22} price={11.99} amount={15} />
					</div>
				</div>

				<div className="mt-5 flex flex-wrap md:flex-nowrap flex-col md:flex-row gap-[24px] items-center">
					<div className="grid grid-cols-2 md:grid-cols-3 gap-[24px]">
						<div className="flex items-center gap-[10px] w-full md:w-auto">
							<div className="flex justify-center items-center bg-white rounded p-[5px] w-[48px] h-[48px] border border-[#D9D9D9]">
								<CustomImage
									src={shieldIcon}
									alt="shield tick"
									className="w-[24px] h-[24px]"
								/>
							</div>
							<span>Safe & Secure Checkout</span>
						</div>
						<div className="flex items-center gap-[10px] w-full md:w-auto">
							<div className="flex justify-center items-center bg-white rounded p-[5px] w-[48px] h-[48px] border border-[#D9D9D9]">
								<CustomImage
									src={creditCardIcon}
									alt="credit card"
									className="w-[24px] h-[24px] "
								/>
							</div>
							<span>Quick & Easy Recharge</span>
						</div>
						<div className="flex items-center gap-[10px] w-full md:w-auto">
							<div className="flex justify-center items-center bg-white rounded p-[5px] w-[48px] h-[48px] border border-[#D9D9D9]">
								<CustomImage
									src={headphoneIcon}
									alt="headphone"
									className="w-[24px] h-[24px] "
								/>
							</div>
							<span>24/7 Customer Support</span>
						</div>
					</div>
					<button className="border border-primary w-full p-[17px] rounded-[8px] text-center text-black max-w-full md:max-w-[149px] font-medium cursor-pointer hover:opacity-60">
						Check Device Compatibility
					</button>
				</div>

				<div className="mt-5">
					<CustomTab
						tabs={["Description", "Network", "Returns & money back guarantee"]}
						render={[
							<DescriptionTabRender />,
							<div>Network</div>,
							<div>Returns & money back guarantee</div>,
						]}
						activeTab="Description"
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
