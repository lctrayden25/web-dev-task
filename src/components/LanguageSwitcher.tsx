import translateIcon from "@/assets/icon/translate.svg";
import { Language } from "@/utils/constant";
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
			navigate(`/${language}/${splitPathname?.[2]}`);
		}
	};

	return (
		<div className="relative">
			<button className="cursor-pointer" onClick={() => setIsShow(!isShow)}>
				<img
					src={translateIcon}
					alt="translate"
					className="max-w-[20px] max-h-[18px]"
				/>
			</button>
			{isShow && (
				<div className="absolute top-full left-0 w-full bg-white shadow-md">
					<button onClick={() => handleLanguageChange(Language.EN)}>EN</button>
					<button onClick={() => handleLanguageChange(Language.ZH)}>繁</button>
					<button onClick={() => handleLanguageChange(Language.CN)}>簡</button>
				</div>
			)}
		</div>
	);
};

export default LanguageSwitcher;
