import { v4 as uuidv4 } from "uuid";

type ResourceItemType = {
	id: string;
	title: string;
	description: string;
	image: string;
};

export const dummyResourceData: ResourceItemType[] = [
	{
		id: uuidv4(),
		title: "25 Travel tips for the United Kingdom",
		description:
			"Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
		image: "https://via.placeholder.com/150",
	},
	{
		id: uuidv4(),
		title: "25 Travel tips for the United Kingdom",
		description:
			"Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
		image: "https://via.placeholder.com/150",
	},
	{
		id: uuidv4(),
		title: "25 Travel tips for the United Kingdom",
		description:
			"Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
		image: "https://via.placeholder.com/150",
	},
];
