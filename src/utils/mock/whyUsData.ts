import { v4 as uuidv4 } from "uuid";
import whyusTag1 from "@/assets/icon/whyus-tag1.svg";
import whyusTag2 from "@/assets/icon/whyus-tag2.svg";
import whyusTag3 from "@/assets/icon/whyus-tag3.svg";
import whyusTag4 from "@/assets/icon/whyus-tag4.svg";
import whyusTag5 from "@/assets/icon/whyus-tag5.svg";
import whyusTag6 from "@/assets/icon/whyus-tag6.svg";
import { Language } from "../constant";

export type WhyUsSectionType = {
	title: {
		[key in Language]: string;
	};
	description: {
		[key in Language]: string;
	};
	image: string;
	features: {
		id: string;
		title: {
			[key in Language]: string;
		};
		icon: string;
		content: {
			[key in Language]: string;
		};
	}[];
};

export const dummyWhyUsSectionData: WhyUsSectionType = {
	title: {
		[Language.EN]: "Why Choose us for yor United States eSIM",
		[Language.FR]: "Pourquoi choisir notre eSIM pour les États-Unis",
		[Language.TC]: "為什麼選擇我們的美國 eSIM",
		[Language.SC]: "為什麼選擇我們的美國 eSIM",
	},
	description: {
		[Language.EN]: "We're here to help you find the perfect adventure for you.",
		[Language.FR]:
			"Nous sommes ici pour vous aider à trouver l'aventure parfaite pour vous.",
		[Language.TC]: "我們致力於協助您找到最適合您的完美冒險之旅。",
		[Language.SC]: "我们致力于协助您找到最适合您的完美冒险之旅。",
	},
	image: "https://via.placeholder.com/150",
	features: [
		{
			id: uuidv4(),
			title: {
				[Language.EN]: "Clear simple pricing",
				[Language.FR]: "Prix clair et simple",
				[Language.TC]: "清晰简单的定价",
				[Language.SC]: "清晰简单的定价",
			},
			icon: whyusTag1,
			content: {
				[Language.EN]:
					"Our plans are fully prepaid with no roaming fees or hidden charges. No overages. Transparent pricing always. lorem ipsum ",
				[Language.FR]:
					"Nos plans sont entièrement prépayés sans frais de roaming ou frais cachés. Pas d'excédents. Prix transparent toujours. lorem ipsum ",
				[Language.TC]:
					"我們的計劃是完全預付的，沒有漫遊費或隱藏費用。沒有超額費用。透明定價始終。 lorem ipsum ",
				[Language.SC]:
					"我们的计划是完全预付的，没有漫游费或隐藏费用。没有超额费用。透明定价始终。 lorem ipsum ",
			},
		},
		{
			id: uuidv4(),
			title: {
				[Language.EN]: "One eSIM, Multiple Trips lorem",
				[Language.FR]: "One eSIM, Multiple Trips lorem",
				[Language.TC]: "一個 eSIM，多個旅程 Lorem ipsum",
				[Language.SC]: "一个 eSIM，多个旅程 Lorem ipsum",
			},
			icon: whyusTag2,
			content: {
				[Language.EN]: "One eSIM, Multiple Trips lorem",
				[Language.FR]: "One eSIM, Multiple Trips lorem",
				[Language.TC]: "一個 eSIM，多個旅程 Lorem ipsum",
				[Language.SC]: "一个 eSIM，多个旅程 Lorem ipsum",
			},
		},
		{
			id: uuidv4(),
			title: {
				[Language.EN]: "Fully customisable",
				[Language.FR]: "Fully customisable",
				[Language.TC]: "完全可定制",
				[Language.SC]: "完全可定制",
			},
			icon: whyusTag3,
			content: {
				[Language.EN]:
					"You can customise your eSIM plan to suit your needs. Recharge or extend your plan anytime from our apps.",
				[Language.FR]:
					"Vous pouvez personnaliser votre plan eSIM pour répondre à vos besoins. Rechargez ou étendez votre plan à tout moment via nos applications.",
				[Language.TC]:
					"您可以自訂您的 eSIM 計劃以滿足您的需求。隨時從我們的應用程式中充值或延長計劃。",
				[Language.SC]:
					"您可以定制您的 eSIM 计划以满足您的需求。随时从我们的应用程序中充值或延长计划。",
			},
		},
		{
			id: uuidv4(),
			title: {
				[Language.EN]: "Apps are easy to use",
				[Language.FR]: "Les applications sont faciles à utiliser",
				[Language.TC]: "應用程序易於使用",
				[Language.SC]: "应用程序易于使用",
			},
			icon: whyusTag4,
			content: {
				[Language.EN]:
					"Our apps put you in the driving seat. Install your eSIM, check your data balance, manage plans, and contact support—all in just a few taps.",
				[Language.FR]:
					"Nos applications vous mettent au volant. Installez votre eSIM, vérifiez votre solde de données, gérez vos plans et contactez le support - tout en un seul clic.",
				[Language.TC]:
					"我們的應用程式讓您掌握主動權。安裝您的 eSIM，檢查您的數據餘額，管理計劃，並聯繫支持 - 只需幾次點擊。",
				[Language.SC]:
					"我们的应用程序让您掌控主动权。安装您的 eSIM，检查您的数据余额，管理计划，并联系支持 - 只需几次点击。",
			},
		},
		{
			id: uuidv4(),
			title: {
				[Language.EN]: "Compatibility",
				[Language.FR]: "Compatibilité",
				[Language.TC]: "兼容性",
				[Language.SC]: "兼容性",
			},
			icon: whyusTag5,
			content: {
				[Language.EN]:
					"Our eSIMs are compatible with most modern devices. Check your device's specifications to confirm compatibility.",
				[Language.FR]:
					"Nos eSIMs sont compatibles avec la plupart des appareils modernes. Vérifiez les spécifications de votre appareil pour confirmer la compatibilité.",
				[Language.TC]:
					"我們的 eSIM 兼容大多數現代設備。檢查您的設備規格以確認兼容性。",
				[Language.SC]:
					"我们的 eSIM 兼容大多数现代设备。检查您的设备规格以确认兼容性。",
			},
		},
		{
			id: uuidv4(),
			title: {
				[Language.EN]: "24/7 Support",
				[Language.FR]: "Support 24/7",
				[Language.TC]: "24/7 支持",
				[Language.SC]: "24/7 支持",
			},
			icon: whyusTag6,
			content: {
				[Language.EN]:
					"You can get help with the app anytime. You can view FAQ sections, review guides or contact support",
				[Language.FR]:
					"Vous pouvez obtenir de l'aide avec l'application à tout moment. Vous pouvez consulter les sections FAQ, examiner les guides ou contacter le support",
				[Language.TC]:
					"您可以随时通过应用程序获得帮助。您可以查看常见问题解答部分，查看指南或联系支持",
				[Language.SC]:
					"您可以随时通过应用程序获得帮助。您可以查看常见问题解答部分，查看指南或联系支持",
			},
		},
	],
};
