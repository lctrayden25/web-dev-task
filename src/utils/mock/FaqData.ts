import { v4 as uuidv4 } from "uuid";

export type FaqItemType = {
	id: string;
	title: string;
	content: string;
};

export const dummyFaqData: FaqItemType[] = [
	{
		id: uuidv4(),
		title: "Why Choose us for yor United States eSIM",
		content: "We're here to help you find the perfect adventure for you.",
	},
	{
		id: uuidv4(),
		title: "What devices support eSIMs? ",
		content:
			"Most modern smartphones and tablets support eSIMs. Check your device's specifications to confirm compatibility.",
	},
	{
		id: uuidv4(),
		title: "How long does it take to activate an eSIM? ",
		content:
			"Activation typically takes less than 5 minutes. Once activated, your eSIM will be ready to use.",
	},
	{
		id: uuidv4(),
		title: "How long does it take to activate an eSIM? ",
		content:
			"Activation typically takes less than 5 minutes. Once activated, your eSIM will be ready to use.",
	},
	{
		id: uuidv4(),
		title: "How long does it take to activate an eSIM? ",
		content:
			"Activation typically takes less than 5 minutes. Once activated, your eSIM will be ready to use.",
	},
	{
		id: uuidv4(),
		title: "How long does it take to activate an eSIM? ",
		content:
			"Activation typically takes less than 5 minutes. Once activated, your eSIM will be ready to use.",
	},
	{
		id: uuidv4(),
		title: "How long does it take to activate an eSIM? ",
		content:
			"Activation typically takes less than 5 minutes. Once activated, your eSIM will be ready to use.",
	},
];
