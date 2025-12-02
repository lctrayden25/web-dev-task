import translateIcon from "@/assets/icon/translate.svg";
import { Language } from "@/utils/constant";
import { cn } from "@/utils/helper";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

const LanguageSwitcher = () => {
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
			navigate(`/${language}/${splitPathname?.[3]}`);
		} else {
			// console.log({ splitPathname });
			const newSlicePathname = splitPathname
				?.slice(2, splitPathname?.length)
				?.join("/");
			navigate(`/${language}/${newSlicePathname}`);
		}

		setIsShow(false);
	};

	const buttonClassName = "hover:text-red-500 cursor-pointer scale-110";

	return (
		<div className="relative max-h-[18px]">
			<button className="cursor-pointer" onClick={() => setIsShow(!isShow)}>
				<img
					src={translateIcon}
					alt="translate"
					className="max-w-[20px] max-h-[18px] hover:opacity-60"
				/>
			</button>
			{isShow && (
				<div className="absolute top-full left-[50%] translate-x-[-50%] bg-white shadow-md w-[100px] flex gap-[10px] justify-between items-center p-2">
					<button
						onClick={() => handleLanguageChange(Language.EN)}
						className={cn(
							buttonClassName,
							i18n.language === Language.EN ? "text-red-500" : ""
						)}
					>
						EN
					</button>
					<button
						onClick={() => handleLanguageChange(Language.TC)}
						className={cn(
							buttonClassName,
							i18n.language === Language.TC ? "text-red-500" : ""
						)}
					>
						繁
					</button>
					<button
						onClick={() => handleLanguageChange(Language.SC)}
						className={cn(
							buttonClassName,
							i18n.language === Language.SC ? "text-red-500" : ""
						)}
					>
						簡
					</button>
				</div>
			)}
		</div>
	);
};

export default LanguageSwitcher;
