import { apiUrl, type HowToGetStartedType } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner";
import ErrorDisplay from "../ErrorDisplay";

const HowToGetStart = () => {
	const { data, isLoading, error } = useQuery<HowToGetStartedType>({
		queryKey: ["HowToGetStarted"],
		queryFn: () =>
			fetch(`${apiUrl}/content/HowToGetStarted/US/en-US`).then((res) =>
				res.json()
			),
	});

	if (isLoading) return <Spinner />;
	if (error) return <ErrorDisplay message={error.message} />;

	return (
		<div className="relative py-[70px] px-[20px] lg:px-[80px] w-full">
			<div className="relative flex flex-col gap-[24px]">
				<h2 className="font-bold text-[32px]">{data?.title as string}</h2>
				<p className="text-sm text-gray-500 text-[18px]">{`Get started in ${data?.steps?.length} easy steps`}</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
					{data?.steps?.map((step) => (
						<div
							key={step.title}
							className="bg-[#F8FAFD] p-[20px] rounded-[10px] flex flex-col gap-[15px]"
						>
							<h3 className="text-lg font-bold">{step.title}</h3>
							<img src={step.image} alt={step.title} />
							<p className="text-sm text-gray-500 text-[14px]">
								{step.paragraph}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default HowToGetStart;
