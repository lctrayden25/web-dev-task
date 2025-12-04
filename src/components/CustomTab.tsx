import { cn } from "@/utils/helper";
import { useState } from "react";

type CustomTabProps = {
	tabs: { name: string; id: string }[];
	activeTab?: string;
	setActiveTab: (tab: string) => void;
	className?: string;
	render: { content: string; id: string }[];
};

const CustomTab = ({
	tabs,
	activeTab,
	setActiveTab,
	className,
	render,
}: CustomTabProps) => {
	const [selectedTab, setSelectedTab] = useState(activeTab);

	const activeIndex = tabs.findIndex((tab) => tab?.id === selectedTab);

	const handleSelectTab = (tab: { name: string; id: string }) => {
		console.log({ tab });
		setSelectedTab(tab?.id);
		setActiveTab(tab.id);
	};

	console.log({ render, activeIndex });
	return (
		<div className="flex flex-col gap-[24px]">
			<div className="flex gap-[24px] flex-wrap">
				{tabs.map((tab) => (
					<button
						key={tab?.id}
						onClick={() => handleSelectTab(tab)}
						className={cn(
							`${
								selectedTab === tab?.id ? "border-primary" : "border-gray-200"
							}  border rounded-[100px] px-[16px] py-[12px] cursor-pointer hover:opacity-60`,
							className
						)}
					>
						{tab?.name}
					</button>
				))}
			</div>
			<div className="flex-1">{render?.[activeIndex]?.content ?? null}</div>
		</div>
	);
};

export default CustomTab;
