import React from "react";
import Header from "./Header";

type LayoutProps = {
	children: React.ReactNode;
	showHeader?: boolean;
};

const Layout = ({ children, showHeader = true }: LayoutProps) => {
	return (
		<div className="bg-white w-full">
			<div className="min-h-screen w-full max-w-[1440px] mx-auto">
				<div className="relative flex flex-col max-w-[1280px] w-full mx-auto ">
					{showHeader && <Header />}
					{children}
				</div>
			</div>
		</div>
	);
};

export default Layout;
