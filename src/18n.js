import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enUs from "./assets/locale/en-US/translation.json";
import zhHk from "./assets/locale/zh-HK/translation.json";
import zhCn from "./assets/locale/zh-CN/translation.json";

const resources = {
	"en-US": {
		translation: enUs,
	},
	"zh-HK": {
		translation: zhHk,
	},
	"zh-CN": {
		translation: zhCn,
	},
};

i18n
	// .use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: true,
		detection: {
			lookupFromPathIndex: 0,
			order: [
				"path",
				"querystring",
				"cookie",
				"localStorage",
				"sessionStorage",
				"navigator",
				"htmlTag",
			],
		},
		resources,
		supportedLngs: Object.keys(resources),
		// lookupLocalStorage: "locale",
		fallbackLng: "zh-HK",
		// load: "currentOnly",
		interpolation: { escapeValue: false },
	});
