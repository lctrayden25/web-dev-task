import { cn } from "@/utils/helper";
import logo from "@/assets/icon/logo.svg";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import LanguageSwitcher from "./LanguageSwitcher";
import SearchInput from "./SearchInput";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type MobileMenuProps = {
	isOpen: boolean;
	onClose: (isOpen: boolean) => void;
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
	const { t } = useTranslation();
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(isOpen);

	const handleMenuClose = (isOpen: boolean) => {
		setIsMenuOpen(isOpen);
		onClose(isOpen);
	};

	return (
		<div
			className={cn(
				`flex flex-col gap-[24px] w-full h-full absolute top-0 left-0 bg-white z-50 px-8 py-[24px]`,
				isOpen ? "flex" : "hidden"
			)}
		>
			<div className="flex flex-col gap-[24px]">
				<div className="flex items-center justify-between">
					<Link to="/">
						<img
							src={logo}
							alt="logo"
							className="max-w-[204px] max-h-[33.8px] w-full h-full"
						/>
					</Link>
					<button
						onClick={() => handleMenuClose(!isMenuOpen)}
						className="cursor-pointer"
					>
						<MdClose />
					</button>
				</div>
				<SearchInput isMenuOpen={isOpen} />
			</div>
			<div className="flex flex-col gap-[24px]">
				<Link to="/explore" className="hover:opacity-60">
					{t("explore")}
				</Link>
				<Link to="/help" className="hover:opacity-60">
					{t("help")}
				</Link>
				<LanguageSwitcher isMenuOpen={isOpen} />
				<CustomButton onClick={() => console.log("sign in|sign up")}>
					{t("signInSignUp")}
				</CustomButton>
			</div>
		</div>
	);
};

export default MobileMenu;
