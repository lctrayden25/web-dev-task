import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Language } from "./constant";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getPrice(price: number) {
	return `$${price.toFixed(2)}`;
}

export function getCountryCode(locale: Language) {
	switch (locale) {
		case Language.EN:
			return "US";
		case Language.TC:
			return "HK";
		case Language.SC:
			return "CN";
		default:
			return "US";
	}
}
