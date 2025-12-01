const apiKey = import.meta.env.VITE_API_KEY as string;

export const apiUrl = `${"https://content.travsim.fr/api"}/${apiKey}`;

export type FeaturesSectionType = {
	title: string;
	image: string;
	features: {
		icon: string;
		title: string;
		paragraph: string;
	}[];
};
