import translateIcon from "@/assets/icon/translate.svg";
import { Language, languageMap } from "@/utils/constant";
import { cn } from "@/utils/helper";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

type LanguageSwitcherProps = {
	isMenuOpen: boolean;
};

const LanguageSwitcher = ({ isMenuOpen }: LanguageSwitcherProps) => {
	const { i18n } = useTranslation();
	const [isShow, setIsShow] = useState<boolean>(false);
	const navigate = useNavigate();
	const location = useLocation();
	const pathname = location.pathname;
	const supportedLngs = Object.keys(i18n.services.resourceStore.data);

	const handleLanguageChange = (language: Language) => {
		i18n.changeLanguage(language);
		const splitPathname = pathname?.split("/");

		// console.log({ language, pathname, splitPathname });

		// if splitPathname?.[1] === "zh-HK", then splitPathname?.[3] must be the path without locale
		// if splitPathname?.[1] !== "zh-HK" (no locale appended in the path), then splitPathname?.[2] must be the path without locale
		if (!supportedLngs.includes(splitPathname?.[1])) {
			navigate(`/${language}/${splitPathname?.[3]}${location?.search}`);
		} else {
			// console.log({ splitPathname });
			const newSlicePathname = splitPathname
				?.slice(2, splitPathname?.length)
				?.join("/");
			navigate(`/${language}/${newSlicePathname}${location?.search}`);
		}

		setIsShow(false);
	};

	const buttonClassName = "hover:text-red-500 cursor-pointer scale-110";

	return (
		<div
			className={`relative max-h-[18px] ${
				isMenuOpen ? "z-50 flex gap-[10px] items-center" : ""
			}`}
		>
			<button
				className="cursor-pointer disabled:cursor-default disabled:opacity-100 hover:opacity-60"
				onClick={() => {
					return isMenuOpen ? undefined : setIsShow(!isShow);
				}}
				disabled={isMenuOpen}
			>
				<img
					src={translateIcon}
					alt="translate"
					className="max-w-[20px] max-h-[18px] "
				/>
			</button>
			{isMenuOpen && <div> | </div>}
			{(isShow || isMenuOpen) && (
				<div
					className={`${
						isMenuOpen
							? "relative"
							: "absolute top-full left-[50%] translate-x-[-50%] bg-white shadow-md"
					}  w-[100px] flex gap-[10px] justify-between items-center p-2`}
				>
					{Object.keys(languageMap)?.map((language: string) => {
						return (
							<button
								onClick={() => handleLanguageChange(language as Language)}
								className={cn(
									buttonClassName,
									i18n.language === language ? "text-red-500" : ""
								)}
							>
								{languageMap[language as Language]}
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default LanguageSwitcher;
