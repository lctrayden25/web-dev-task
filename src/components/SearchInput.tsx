import React, { useState } from "react";
import searchIcon from "@/assets/icon/search-icon.svg";
import { useNavigate } from "react-router-dom";

type SearchInputProps = {
	isMenuOpen: boolean;
};

const SearchInput = ({ isMenuOpen }: SearchInputProps) => {
	const navigate = useNavigate();
	const [searchText, setSearchText] = useState("");
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.target.value);
	};

	const handleSearchRedirect = () => {
		navigate(`/explore?searchText=${searchText}`, { replace: true });
	};

	return (
		<div className={`relative ${isMenuOpen ? "block" : "hidden md:block"}`}>
			<input
				type="text"
				placeholder="Where to next?"
				value={searchText}
				onChange={handleSearch}
				className="px-[16px] py-[12px] border border-[#EBEBEB] rounded-[8px] w-full xl:w-[411px] max-h-[48px]"
			/>
			<img
				onClick={handleSearchRedirect}
				src={searchIcon}
				alt="search"
				className="absolute right-[16px] top-[50%] translate-y-[-50%] max-w-[24px] max-h-[24px] hover:opacity-60 cursor-pointer"
			/>
		</div>
	);
};

export default SearchInput;
