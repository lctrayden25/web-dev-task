import { cn } from "@/utils/helper";
import React, { useState } from "react";

type CustomTabProps = {
	tabs: string[];
	activeTab: string;
	setActiveTab: (tab: string) => void;
	className?: string;
	render: React.ReactNode[];
};

const CustomTab = ({
	tabs,
	activeTab,
	setActiveTab,
	className,
	render,
}: CustomTabProps) => {
	const [selectedTab, setSelectedTab] = useState(activeTab);

	const activeIndex = tabs.findIndex((tab) => tab === selectedTab);

	const handleSelectTab = (tab: string) => {
		setSelectedTab(tab);
		setActiveTab(tab);
	};
	return (
		<div className="flex flex-col gap-[24px]">
			<div className="flex gap-[24px]">
				{tabs.map((tab) => (
					<button
						key={tab}
						onClick={() => handleSelectTab(tab)}
						className={cn(
							`${
								selectedTab === tab ? "border-primary" : "border-gray-200"
							}  border rounded-[100px] px-[16px] py-[12px] cursor-pointer hover:opacity-60`,
							className
						)}
					>
						{tab}
					</button>
				))}
			</div>
			<div className="flex-1">{render?.[activeIndex] ?? null}</div>
		</div>
	);
};

export default CustomTab;
