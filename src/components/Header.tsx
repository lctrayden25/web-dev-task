import logo from "@/assets/icon/logo.svg";
import searchIcon from "@/assets/icon/search-icon.svg";
import translateIcon from "@/assets/icon/translate.svg";
import currency from "@/assets/icon/currency.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

// type HeaderProps = {
// 	children?: React.ReactNode;
// };

const Header = () => {
	const [searchText, setSearchText] = useState("");
	return (
		<div className="flex items-center justify-between py-[18px] px-[80px] border-b border-[#EBEBEB]">
			<Link to="/">
				<img
					src={logo}
					alt="logo"
					className="max-w-[204px] max-h-[33.8px] w-full h-full"
				/>
			</Link>
			<div className="relative hidden sm:block">
				<input
					type="text"
					placeholder="Where to next?"
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
					className="px-[16px] py-[12px] border border-[#EBEBEB] rounded-[8px] w-[111px] lg:w-[411px] xl:w-[411px] max-h-[48px]"
				/>
				<img
					src={searchIcon}
					alt="search"
					className="absolute right-[16px] top-[50%] translate-y-[-50%] max-w-[24px] max-h-[24px]"
				/>
			</div>
			<div className="flex items-center gap-[35px]">
				<div className="relative flex items-center gap-[35px] text-[16px]">
					<Link to="/explore">Explore</Link>
					<Link to="/help">Help</Link>
					<button className="cursor-pointer">
						<img
							src={translateIcon}
							alt="translate"
							className="max-w-[20px] max-h-[18px]"
						/>
					</button>
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
						Sign in | Sign up
					</CustomButton>
				</div>
			</div>
		</div>
	);
};

export default Header;
