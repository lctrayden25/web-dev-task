import { v4 as uuidv4 } from "uuid";
import { Language } from "../constant";

export type FaqItemType = {
	id: string;
	title: {
		[key in Language]: string;
	};
	content: {
		[key in Language]: string;
	};
};

export const dummyFaqData: FaqItemType[] = [
	{
		id: uuidv4(),
		title: {
			[Language.EN]: "Why Choose us for yor United States eSIM",
			[Language.FR]: "Pourquoi choisir notre eSIM pour les États-Unis",
			[Language.TC]: "為什麼選擇我們的美國 eSIM",
			[Language.SC]: "為什麼選擇我們的美國 eSIM",
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
		id: uuidv4(),
		title: {
			[Language.EN]: "What devices support eSIMs? ",
			[Language.FR]: "Quels appareils supportent les eSIMs ?",
			[Language.TC]: "哪些設備支持 eSIM？",
			[Language.SC]: "哪些设备支持 eSIM？",
		},
		content: {
			[Language.EN]:
				"Most modern smartphones and tablets support eSIMs. Check your device's specifications to confirm compatibility.",
			[Language.FR]:
				"La plupart des smartphones et tablettes modernes supportent les eSIMs. Vérifiez les spécifications de votre appareil pour confirmer la compatibilité.",
			[Language.TC]:
				"大多數現代智能手機和平板電腦支持 eSIM。檢查您的設備規格以確認兼容性。",
			[Language.SC]:
				"大多数现代智能手机和平板电脑支持 eSIM。检查您的设备规格以确认兼容性。",
		},
	},
	{
		id: uuidv4(),
		title: {
			[Language.EN]: "How long does it take to activate an eSIM? ",
			[Language.FR]: "Combien de temps faut-il pour activer une eSIM ?",
			[Language.TC]: "激活 eSIM 需要多长时间？",
			[Language.SC]: "激活 eSIM 需要多长时间？",
		},
		content: {
			[Language.EN]:
				"Activation typically takes less than 5 minutes. Once activated, your eSIM will be ready to use.",
			[Language.FR]:
				"L'activation prend généralement moins de 5 minutes. Une fois activé, votre eSIM sera prêt à utiliser.",
			[Language.TC]:
				"激活 eSIM 通常需要少于 5 分钟。激活后，您的 eSIM 即可使用。",
			[Language.SC]:
				"激活 eSIM 通常需要少于 5 分钟。激活后，您的 eSIM 即可使用。",
		},
	},
	{
		id: uuidv4(),
		title: {
			[Language.EN]: "How long does it take to activate an eSIM? ",
			[Language.FR]: "Combien de temps faut-il pour activer une eSIM ?",
			[Language.TC]: "激活 eSIM 需要多长时间？",
			[Language.SC]: "激活 eSIM 需要多长时间？",
		},
		content: {
			[Language.EN]:
				"Activation typically takes less than 5 minutes. Once activated, your eSIM will be ready to use.",
			[Language.FR]:
				"L'activation prend généralement moins de 5 minutes. Une fois activé, votre eSIM sera prêt à utiliser.",
			[Language.TC]:
				"激活 eSIM 通常需要少于 5 分钟。激活后，您的 eSIM 即可使用。",
			[Language.SC]:
				"激活 eSIM 通常需要少于 5 分钟。激活后，您的 eSIM 即可使用。",
		},
	},
];
