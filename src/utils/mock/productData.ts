import { v4 as uuidv4 } from "uuid";
import { Language, Rating } from "../constant";
import productThumb from "@/assets/images/product-thumb.jpg";
import placeholderImage from "@/assets/images/placeholder.png";

import creditCardIcon from "@/assets/icon/credit-card.svg";
import headphoneIcon from "@/assets/icon/headphones.svg";
import shieldIcon from "@/assets/icon/shield-tick.svg";

type FeatureItem = {
	id: string;
	icon: string;
	title: {
		[key in Language]: string;
	};
};

type Product = {
	id: string;
	name: {
		[key in Language]: string;
	};
	rating: Rating;
	reviews: number;
	meta: {
		id: string;
		title: {
			[key in Language]: string;
		};
		content: {
			[key in Language]: string;
		};
	}[];
	thumbnails: string[];
	features: FeatureItem[];
	packages: {
		[key: string]: string | number | boolean;
	}[];
};

const dummyThumbCarouselData = [
	productThumb,
	placeholderImage,
	productThumb,
	productThumb,
	placeholderImage,
];

export const dummyProductData: Product[] = [
	{
		id: uuidv4(),
		name: {
			[Language.EN]: "eSIM for the Saint Vincent & Grenadines",
			[Language.FR]: "eSIM pour le Saint-Vincent et les Grenadines",
			[Language.TC]: "聖文森及格林納丁斯 eSIM",
			[Language.SC]: "圣文森及格林纳丁斯 eSIM",
		},
		rating: Rating.EXCELLENT,
		reviews: 1764,
		meta: [
			{
				id: `meta-${uuidv4()}`,
				title: {
					[Language.EN]: "Description",
					[Language.FR]: "Description",
					[Language.TC]: "描述",
					[Language.SC]: "描述",
				},
				content: {
					[Language.EN]:
						"We're here to help you find the perfect adventure for you.",
					[Language.FR]:
						"Nous sommes ici pour vous aider à trouver l'aventure parfaite pour vous.",
					[Language.TC]: "我們致力於協助您找到最適合您的完美冒險之旅。",
					[Language.SC]: "我们致力于协助您找到最适合您的完美冒险之旅。",
				},
			},
			{
				id: `meta-${uuidv4()}`,
				title: {
					[Language.EN]: "Network",
					[Language.FR]: "Réseau",
					[Language.TC]: "網絡",
					[Language.SC]: "網絡",
				},
				content: {
					[Language.EN]: "Network information",
					[Language.FR]: "Network information",
					[Language.TC]: "聖文森及格林納丁斯 eSIM",
					[Language.SC]: "圣文森及格林纳丁斯 eSIM",
				},
			},
			{
				id: `meta-${uuidv4()}`,
				title: {
					[Language.EN]: "Returns & money back guarantee",
					[Language.FR]: "Returns & money back guarantee",
					[Language.TC]: "退款保證 ",
					[Language.SC]: "退款保证",
				},
				content: {
					[Language.EN]: "Return and money back guarantee",
					[Language.FR]: "Return and money back guarantee",
					[Language.TC]: "退款保證資訊",
					[Language.SC]: "退款保证信息",
				},
			},
		],
		features: [
			{
				id: `feature-${uuidv4()}`,
				icon: shieldIcon,
				title: {
					[Language.EN]: "Safe & Secure Checkout",
					[Language.FR]: "Paiement sécurisé",
					[Language.TC]: "安全且簡單的支付",
					[Language.SC]: "安全且简单的支付",
				},
			},
			{
				id: `feature-${uuidv4()}`,
				icon: creditCardIcon,
				title: {
					[Language.EN]: "Quick & Easy Recharge",
					[Language.FR]: "Recharge rapide et facile",
					[Language.TC]: "快速且簡單的充值",
					[Language.SC]: "快速且簡單的充值",
				},
			},
			{
				id: `feature-${uuidv4()}`,
				icon: headphoneIcon,
				title: {
					[Language.EN]: "24/7 Customer Support",
					[Language.FR]: "Support client 24/7",
					[Language.TC]: "24/7 客戶支持",
					[Language.SC]: "24/7 客戶支持",
				},
			},
		],
		thumbnails: dummyThumbCarouselData,
		packages: [
			{
				id: `package-${uuidv4()}`,
				amount: 2,
				price: 100,
				days: 10,
				isBestValue: true,
			},
			{
				id: `package-${uuidv4()}`,
				amount: 5,
				price: 150,
				days: 10,
				isBestValue: false,
			},
			{
				id: `package-${uuidv4()}`,
				amount: 10,
				price: 190,
				days: 15,
				isBestValue: false,
			},
			{
				id: `package-${uuidv4()}`,
				amount: 15,
				price: 220,
				days: 15,
				isBestValue: false,
			},
			{
				id: `package-${uuidv4()}`,
				amount: 15,
				price: 240,
				days: 30,
				isBestValue: false,
			},
			{
				id: `package-${uuidv4()}`,
				amount: 20,
				price: 280,
				days: 30,
				isBestValue: false,
			},
		],
	},
];
