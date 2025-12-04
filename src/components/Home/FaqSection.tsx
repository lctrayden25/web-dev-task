import { dummyFaqData, type FaqItemType } from "@/utils/mock/FaqData";
import Accordion from "../Accordion";
import { useTranslation } from "react-i18next";

const FaqSection = () => {
	const faqData = dummyFaqData;
	const { t } = useTranslation();
	return (
		<div className="relative py-[35px] lg:py-[70px] px-[20px] lg:px-[80px] w-full flex flex-col items-center justify-between mt-10">
			<div className="font-bold text-[24px] md:text-[28px] xl:text-[32px]">
				{t("frequentlyAskedQuestions")}
			</div>
			<div className="relative max-w-[974px] w-full bg-[#fbf4e3] border border-[#FFFBF2] rounded-[8px] p-[24px] mt-10">
				<Accordion items={faqData as FaqItemType[]} />
			</div>
		</div>
	);
};

export default FaqSection;
