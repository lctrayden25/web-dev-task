import logo from "@/assets/icon/logo.svg";
import currency from "@/assets/icon/currency.svg";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import LanguageSwitcher from "./LanguageSwitcher";
import SearchInput from "./SearchInput";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { useTranslation } from "react-i18next";

// type HeaderProps = {
// 	children?: React.ReactNode;
// };

const Header = () => {
	const { t } = useTranslation();
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const handleMenuOpen = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="flex items-center justify-between py-[18px] px-[20px] lg:px-[80px] border-b border-[#EBEBEB]">
			<Link to="/">
				<img
					src={logo}
					alt="logo"
					className="max-w-[204px] max-h-[33.8px] w-full h-full"
				/>
			</Link>
			<SearchInput isMenuOpen={isMenuOpen} />
			<div className="hidden md:flex items-center gap-[35px]">
				<div className="relative flex items-center gap-[35px] text-[16px]">
					<Link to="/explore" className="hover:opacity-60">
						{t("explore")}
					</Link>
					<Link to="/help" className="hover:opacity-60">
						{t("help")}
					</Link>
					{/* <button className="cursor-pointer">
						<img
							src={translateIcon}
							alt="translate"
							className="max-w-[20px] max-h-[18px]"
						/>
					</button> */}
					<LanguageSwitcher isMenuOpen={isMenuOpen} />
				</div>
				<div className="relative flex items-center gap-[35px] text-[16px]">
					<button className="cursor-pointer">
						<img
							src={currency}
							alt="currency"
							className="max-w-[20px] max-h-[18px]"
						/>
					</button>

					<CustomButton onClick={() => console.log("sign in|sign up")}>
						{t("signInSignUp")}
					</CustomButton>
				</div>
			</div>
			<MdMenu
				className="block text-[24px] cursor-pointer md:hidden"
				onClick={handleMenuOpen}
			/>
			{isMenuOpen && <MobileMenu isOpen={isMenuOpen} onClose={setIsMenuOpen} />}
		</div>
	);
};

export default Header;
