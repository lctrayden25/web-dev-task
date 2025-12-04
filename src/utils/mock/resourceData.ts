import { v4 as uuidv4 } from "uuid";
import { Language } from "../constant";

type ResourceItemType = {
	id: string;
	title: {
		[key in Language]: string;
	};
	description: {
		[key in Language]: string;
	};
	image: string;
};

type ResourceData = {
	heading: {
		[key in Language]: string;
	};
	items: ResourceItemType[];
};

export const dummyResourceData: ResourceData = {
	heading: {
		[Language.EN]: "Useful resources from our blog",
		[Language.FR]: "Ressources utiles de notre blog",
		[Language.TC]: "我們博客的有用資源",
		[Language.SC]: "我们博客的有用资源",
	},
	items: [
		{
			id: uuidv4(),
			title: {
				[Language.EN]: "25 Travel tips for the United Kingdom",
				[Language.FR]: "25 conseils de voyage pour le Royaume-Uni",
				[Language.TC]: "25 旅遊提示 英國",
				[Language.SC]: "25 旅游提示 英国",
			},
			description: {
				[Language.EN]:
					"Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
				[Language.FR]:
					"Que vous soyez à New York, Los Angeles ou quelque part entre les deux, restez connecté à vos amis et famille à la maison en Afrique du Sud.",
				[Language.TC]:
					"無論您身處紐約市、洛杉磯還是其他地方，保持與南非家鄉的朋友和家人聯繫。",
				[Language.SC]:
					"无论您身处纽约市、洛杉矶还是其他地方，保持与南非家乡的朋友和家人联系。",
			},
			image: "https://via.placeholder.com/150",
		},
		{
			id: uuidv4(),
			title: {
				[Language.EN]: "25 Travel tips for the United Kingdom",
				[Language.FR]: "25 conseils de voyage pour le Royaume-Uni",
				[Language.TC]: "25 旅遊提示 英國",
				[Language.SC]: "25 旅游提示 英国",
			},
			description: {
				[Language.EN]:
					"Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
				[Language.FR]:
					"Que vous soyez à New York, Los Angeles ou quelque part entre les deux, restez connecté à vos amis et famille à la maison en Afrique du Sud.",
				[Language.TC]:
					"無論您身處紐約市、洛杉磯還是其他地方，保持與南非家鄉的朋友和家人聯繫。",
				[Language.SC]:
					"无论您身处纽约市、洛杉矶还是其他地方，保持与南非家乡的朋友和家人联系。",
			},
			image: "https://via.placeholder.com/150",
		},
		{
			id: uuidv4(),
			title: {
				[Language.EN]: "25 Travel tips for the United Kingdom",
				[Language.FR]: "25 conseils de voyage pour le Royaume-Uni",
				[Language.TC]: "25 旅遊提示 英國",
				[Language.SC]: "25 旅游提示 英国",
			},
			description: {
				[Language.EN]:
					"Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
				[Language.FR]:
					"Que vous soyez à New York, Los Angeles ou quelque part entre les deux, restez connecté à vos amis et famille à la maison en Afrique du Sud.",
				[Language.TC]:
					"無論您身處紐約市、洛杉磯還是其他地方，保持與南非家鄉的朋友和家人聯繫。",
				[Language.SC]:
					"无论您身处纽约市、洛杉矶还是其他地方，保持与南非家乡的朋友和家人联系。",
			},
			image: "https://via.placeholder.com/150",
		},
	],
};
