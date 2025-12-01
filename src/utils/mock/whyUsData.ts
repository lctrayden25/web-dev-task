import { v4 as uuidv4 } from "uuid";
import whyusTag1 from "@/assets/icon/whyus-tag1.svg";
import whyusTag2 from "@/assets/icon/whyus-tag2.svg";
import whyusTag3 from "@/assets/icon/whyus-tag3.svg";
import whyusTag4 from "@/assets/icon/whyus-tag4.svg";
import whyusTag5 from "@/assets/icon/whyus-tag5.svg";
import whyusTag6 from "@/assets/icon/whyus-tag6.svg";

export type WhyUsSectionType = {
	title: string;
	description: string;
	image: string;
	features: {
		id: string;
		title: string;
		icon: string;
		description: string;
	}[];
};

export const dummyWhyUsSectionData: WhyUsSectionType = {
	title: "Why Choose us for yor United States eSIM",
	description: "We're here to help you find the perfect adventure for you.",
	image: "https://via.placeholder.com/150",
	features: [
		{
			id: uuidv4(),
			title: "Clear simple pricing",
			icon: whyusTag1,
			description:
				"Our plans are fully prepaid with no roaming fees or hidden charges. No overages. Transparent pricing always. lorem ipsum ",
		},
		{
			id: uuidv4(),
			title: "One eSIM, Multiple Trips lorem",
			icon: whyusTag2,
			description:
				"Install our eSIM once and reuse it for future trips—just purchase a data package for your next destination from the app ",
		},
		{
			id: uuidv4(),
			title: "Fully customisable",
			icon: whyusTag3,
			description:
				"You can customise your eSIM plan to suit your needs. Recharge or extend your plan anytime from our apps.   ",
		},
		{
			id: uuidv4(),
			title: "Apps are easy to use",
			icon: whyusTag4,
			description:
				"Our apps put you in the driving seat. Install your eSIM, check your data balance, manage plans, and contact support—all in just a few taps. ",
		},
		{
			id: uuidv4(),
			title: "Compatibility",
			icon: whyusTag5,
			description:
				"Our eSIM works with a wide range of iOS and Android eSIM devices that support eSIM. See list of compatible devices. ",
		},
		{
			id: uuidv4(),
			title: "24/7 Support",
			icon: whyusTag6,
			description:
				"You can get help with the app anytime. You can view FAQ sections, review guides or contact support ",
		},
	],
};
