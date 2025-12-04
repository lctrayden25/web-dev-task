export enum Language {
	EN = "en-US",
	TC = "zh-HK",
	SC = "zh-CN",
	FR = "fr-FR",
}

export const languageMap = {
	[Language.EN]: "EN",
	[Language.TC]: "繁",
	[Language.SC]: "簡",
	[Language.FR]: "FR",
};

export enum Rating {
	EXCELLENT = 5,
	GOOD = 4,
	AVERAGE = 3,
	POOR = 2,
	BAD = 1,
}

export const ratingMap = {
	[Rating.EXCELLENT]: "Excellent",
	[Rating.GOOD]: "Good",
	[Rating.AVERAGE]: "Average",
	[Rating.POOR]: "Poor",
	[Rating.BAD]: "Bad",
};
