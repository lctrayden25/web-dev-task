import { useState } from "react";
import add from "@/assets/icon/add.svg";
import type { Language } from "@/utils/constant";
import { useParams } from "react-router-dom";

type AccordionItem = {
	id: string;
	title: {
		[key in Language]: string;
	};
	content: {
		[key in Language]: string;
	};
}[];

const Accordion = ({ items }: { items: AccordionItem }) => {
	const { locale } = useParams<{ locale: Language }>();
	const [openItems, setOpenItems] = useState({});

	const toggleItem = (id: string) => {
		setOpenItems((prev) => ({
			...prev,
			[id]: !prev[id as keyof typeof prev],
		}));
	};

	return (
		<div className="rounded-lg overflow-hidden w-full max-w-[974px]">
			{items.map((item) => (
				<div
					key={item.id}
					className="border-b border-[#E2D5B7] last:border-b-0"
				>
					<button
						className="flex justify-between items-center w-full p-4 text-left font-medium text-gray-800  focus:outline-none"
						onClick={() => toggleItem(item.id)}
					>
						<span>{item.title?.[locale as Language]}</span>
						<img src={add} alt="add" className="w-3 h-3" />
					</button>
					<div
						className={`overflow-hidden transition-all duration-300 ${
							openItems[item.id as keyof typeof openItems]
								? "max-h-96 opacity-100"
								: "max-h-0 opacity-0"
						}`}
					>
						<div className="p-4 text-gray-600">
							{item.content?.[locale as Language]}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Accordion;
